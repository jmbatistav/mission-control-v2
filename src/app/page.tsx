"use client";

import { useState } from "react";
import PipelineStats from "@/components/dashboard/PipelineStats";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import Modal from "@/components/shared/Modal";
import IdeaForm from "@/components/ideas/IdeaForm";
import SpecForm from "@/components/specs/SpecForm";
import TaskForm from "@/components/tasks/TaskForm";

type ModalType = "idea" | "spec" | "task" | null;

export default function DashboardPage() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Your development pipeline at a glance
        </p>
      </div>

      {/* Quick Actions */}
      <QuickActions
        onNewIdea={() => setModal("idea")}
        onNewSpec={() => setModal("spec")}
        onNewTask={() => setModal("task")}
      />

      {/* Pipeline Stats */}
      <PipelineStats />

      {/* Recent Activity */}
      <RecentActivity />

      {/* Modals */}
      <Modal
        isOpen={modal === "idea"}
        onClose={() => setModal(null)}
        title="New Idea"
      >
        <IdeaForm onClose={() => setModal(null)} />
      </Modal>
      <Modal
        isOpen={modal === "spec"}
        onClose={() => setModal(null)}
        title="New Spec"
      >
        <SpecForm onClose={() => setModal(null)} />
      </Modal>
      <Modal
        isOpen={modal === "task"}
        onClose={() => setModal(null)}
        title="New Task"
      >
        <TaskForm onClose={() => setModal(null)} />
      </Modal>
    </div>
  );
}
