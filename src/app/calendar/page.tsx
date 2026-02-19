"use client";

import { useState, useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useActiveUser } from "@/lib/useActiveUser";
import AssigneeAvatar from "@/components/shared/AssigneeAvatar";
import Modal from "@/components/shared/Modal";
import EmptyState from "@/components/shared/EmptyState";
import type { Id } from "../../../convex/_generated/dataModel";

type EventType = "cron" | "scheduled" | "deadline" | "milestone";

const typeConfig: Record<EventType, { color: string; bg: string; emoji: string }> = {
  cron: { color: "text-purple-400", bg: "bg-purple-500/20 border-purple-500/30", emoji: "⏰" },
  scheduled: { color: "text-blue-400", bg: "bg-blue-500/20 border-blue-500/30", emoji: "📅" },
  deadline: { color: "text-red-400", bg: "bg-red-500/20 border-red-500/30", emoji: "🔴" },
  milestone: { color: "text-emerald-400", bg: "bg-emerald-500/20 border-emerald-500/30", emoji: "🏁" },
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function CalendarPage() {
  const events = useQuery(api.calendarEvents.list) ?? [];
  const [activeUser] = useActiveUser();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<Id<"calendarEvents"> | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"month" | "list">("month");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());

  const createEvent = useMutation(api.calendarEvents.create);
  const updateEvent = useMutation(api.calendarEvents.update);
  const removeEvent = useMutation(api.calendarEvents.remove);

  const [form, setForm] = useState({
    title: "", description: "", type: "scheduled" as EventType,
    schedule: "", date: "", time: "09:00", endDate: "", endTime: "",
    recurring: false, recurrenceRule: "", assignee: activeUser as "Kar" | "Joma",
  });

  const filteredEvents = typeFilter === "all" ? events : events.filter((e) => e.type === typeFilter);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, typeof events>();
    for (const event of filteredEvents) {
      const dateKey = new Date(event.startTime).toISOString().split("T")[0];
      if (!map.has(dateKey)) map.set(dateKey, []);
      map.get(dateKey)!.push(event);
    }
    return map;
  }, [filteredEvents]);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfWeek(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long", year: "numeric" });

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else setCurrentMonth(currentMonth - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else setCurrentMonth(currentMonth + 1);
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.date) return;
    const startTime = new Date(`${form.date}T${form.time || "09:00"}`).getTime();
    const endTime = form.endDate ? new Date(`${form.endDate}T${form.endTime || form.time || "09:00"}`).getTime() : undefined;

    if (editingId) {
      await updateEvent({
        id: editingId, title: form.title, description: form.description || undefined,
        type: form.type, schedule: form.schedule || undefined, startTime, endTime,
        recurring: form.recurring, recurrenceRule: form.recurrenceRule || undefined,
        assignee: form.assignee,
      });
    } else {
      await createEvent({
        title: form.title, description: form.description || undefined,
        type: form.type, schedule: form.schedule || undefined, startTime, endTime,
        recurring: form.recurring, recurrenceRule: form.recurrenceRule || undefined,
        assignee: form.assignee,
      });
    }
    resetForm();
  };

  const resetForm = () => {
    setForm({ title: "", description: "", type: "scheduled", schedule: "", date: "", time: "09:00", endDate: "", endTime: "", recurring: false, recurrenceRule: "", assignee: activeUser });
    setEditingId(null);
    setShowForm(false);
  };

  const startEdit = (event: typeof events[0]) => {
    const start = new Date(event.startTime);
    const end = event.endTime ? new Date(event.endTime) : null;
    setForm({
      title: event.title, description: event.description ?? "", type: event.type,
      schedule: event.schedule ?? "",
      date: start.toISOString().split("T")[0], time: start.toTimeString().slice(0, 5),
      endDate: end?.toISOString().split("T")[0] ?? "", endTime: end?.toTimeString().slice(0, 5) ?? "",
      recurring: event.recurring, recurrenceRule: event.recurrenceRule ?? "",
      assignee: event.assignee,
    });
    setEditingId(event._id);
    setShowForm(true);
  };

  const openNewOnDate = (dateStr: string) => {
    setForm({ ...form, date: dateStr, assignee: activeUser });
    setEditingId(null);
    setShowForm(true);
  };

  const todayStr = now.toISOString().split("T")[0];
  const selectedDateEvents = selectedDate ? (eventsByDate.get(selectedDate) ?? []) : [];
  const upcoming = [...filteredEvents].filter((e) => e.startTime >= Date.now()).sort((a, b) => a.startTime - b.startTime);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">📅 Calendar</h1>
          <p className="text-sm text-gray-500 mt-1">Scheduled tasks, cron jobs & deadlines</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {(["month", "list"] as const).map((v) => (
              <button key={v} onClick={() => setViewMode(v)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${viewMode === v ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}>
                {v === "month" ? "📆 Month" : "📋 List"}
              </button>
            ))}
          </div>
          <button onClick={() => { resetForm(); setShowForm(true); }} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
            + New Event
          </button>
        </div>
      </div>

      {/* Type Filter */}
      <div className="flex gap-2">
        {["all", "cron", "scheduled", "deadline", "milestone"].map((t) => (
          <button key={t} onClick={() => setTypeFilter(t)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 ${typeFilter === t ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}>
            {t !== "all" && <span>{typeConfig[t as EventType].emoji}</span>}
            {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {viewMode === "month" ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar Grid */}
          <div className="lg:col-span-3 bg-gray-900 border border-gray-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg">←</button>
              <h2 className="text-lg font-semibold">{monthName}</h2>
              <button onClick={nextMonth} className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 rounded-lg">→</button>
            </div>
            <div className="grid grid-cols-7 gap-px">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="text-center text-xs font-medium text-gray-500 py-2">{d}</div>
              ))}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="min-h-[80px] bg-gray-950/50 rounded" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const dayEvents = eventsByDate.get(dateStr) ?? [];
                const isToday = dateStr === todayStr;
                const isSelected = dateStr === selectedDate;

                return (
                  <div
                    key={day}
                    onClick={() => setSelectedDate(dateStr)}
                    onDoubleClick={() => openNewOnDate(dateStr)}
                    className={`min-h-[80px] p-1.5 rounded cursor-pointer transition-colors border ${
                      isSelected ? "border-blue-500 bg-blue-500/10" : isToday ? "border-blue-500/30 bg-gray-900" : "border-transparent bg-gray-950/30 hover:bg-gray-900/50"
                    }`}
                  >
                    <span className={`text-xs font-medium ${isToday ? "text-blue-400" : "text-gray-400"}`}>{day}</span>
                    <div className="mt-1 space-y-0.5">
                      {dayEvents.slice(0, 3).map((ev) => (
                        <div key={ev._id} className={`text-[10px] px-1 py-0.5 rounded truncate border ${typeConfig[ev.type].bg}`}>
                          <span className={typeConfig[ev.type].color}>{ev.title}</span>
                        </div>
                      ))}
                      {dayEvents.length > 3 && (
                        <span className="text-[10px] text-gray-500">+{dayEvents.length - 3} more</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Day Detail Sidebar */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">
              {selectedDate ? new Date(selectedDate + "T12:00").toLocaleDateString("default", { weekday: "long", month: "long", day: "numeric" }) : "Select a day"}
            </h3>
            {selectedDate && selectedDateEvents.length === 0 && (
              <p className="text-xs text-gray-500 mb-3">No events</p>
            )}
            <div className="space-y-2">
              {selectedDateEvents.map((ev) => (
                <div key={ev._id} className={`p-3 rounded-lg border ${typeConfig[ev.type].bg} group`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs">{typeConfig[ev.type].emoji}</span>
                      <h4 className="text-sm font-medium text-gray-200">{ev.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {new Date(ev.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        {ev.recurring && <span className="ml-1">🔄 {ev.recurrenceRule}</span>}
                      </p>
                      {ev.schedule && <p className="text-xs text-gray-600 font-mono mt-1">{ev.schedule}</p>}
                    </div>
                    <AssigneeAvatar name={ev.assignee} size="sm" />
                  </div>
                  <div className="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => startEdit(ev)} className="text-xs text-gray-500 hover:text-gray-300">✏️ Edit</button>
                    <button onClick={() => removeEvent({ id: ev._id })} className="text-xs text-gray-500 hover:text-red-400">🗑️ Delete</button>
                  </div>
                </div>
              ))}
            </div>
            {selectedDate && (
              <button onClick={() => openNewOnDate(selectedDate)} className="mt-3 w-full px-3 py-2 text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-lg transition-colors">
                + Add event on this day
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {upcoming.length === 0 ? (
            <EmptyState icon={<span className="text-4xl">📅</span>} title="No upcoming events" description="Schedule your first event" actionLabel="Create Event" onAction={() => { resetForm(); setShowForm(true); }} />
          ) : (
            upcoming.map((ev) => (
              <div key={ev._id} className={`bg-gray-900 border rounded-xl p-4 flex items-center justify-between group ${typeConfig[ev.type].bg}`}>
                <div className="flex items-center gap-4">
                  <div className="text-center min-w-[50px]">
                    <p className="text-lg font-bold text-gray-200">{new Date(ev.startTime).getDate()}</p>
                    <p className="text-xs text-gray-500">{new Date(ev.startTime).toLocaleString("default", { month: "short" })}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span>{typeConfig[ev.type].emoji}</span>
                      <h4 className="font-medium text-gray-200">{ev.title}</h4>
                      {ev.recurring && <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full">🔄 {ev.recurrenceRule}</span>}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(ev.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      {ev.schedule && <span className="ml-2 font-mono text-gray-600">{ev.schedule}</span>}
                    </p>
                    {ev.description && <p className="text-xs text-gray-500 mt-1">{ev.description}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <AssigneeAvatar name={ev.assignee} size="sm" />
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => startEdit(ev)} className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded-lg text-xs">✏️</button>
                    <button onClick={() => removeEvent({ id: ev._id })} className="p-1.5 text-gray-500 hover:text-red-400 hover:bg-gray-800 rounded-lg text-xs">🗑️</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Create/Edit Event Modal */}
      <Modal isOpen={showForm} onClose={resetForm} title={editingId ? "Edit Event" : "New Calendar Event"} size="lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500" placeholder="Event title" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500 resize-none" placeholder="Optional description" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Type</label>
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as EventType })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
                <option value="scheduled">📅 Scheduled</option>
                <option value="cron">⏰ Cron Job</option>
                <option value="deadline">🔴 Deadline</option>
                <option value="milestone">🏁 Milestone</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Assignee</label>
              <select value={form.assignee} onChange={(e) => setForm({ ...form, assignee: e.target.value as "Kar" | "Joma" })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
                <option value="Kar">Kar</option>
                <option value="Joma">Joma</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Start Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Start Time</label>
              <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          {form.type === "cron" && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Cron Schedule / Description</label>
              <input value={form.schedule} onChange={(e) => setForm({ ...form, schedule: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm font-mono focus:outline-none focus:border-blue-500" placeholder="0 9 * * * (every day at 9am)" />
            </div>
          )}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.recurring} onChange={(e) => setForm({ ...form, recurring: e.target.checked })} className="rounded bg-gray-800 border-gray-700" />
              <span className="text-sm text-gray-300">Recurring</span>
            </label>
            {form.recurring && (
              <select value={form.recurrenceRule} onChange={(e) => setForm({ ...form, recurrenceRule: e.target.value })} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 text-sm">
                <option value="">Select...</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="weekdays">Weekdays</option>
              </select>
            )}
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button onClick={resetForm} className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200">Cancel</button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg">{editingId ? "Update" : "Create"}</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
