"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import ActivityFeed from "../shared/ActivityFeed";

export default function RecentActivity() {
  const activities = useQuery(api.activity.listRecent);

  return (
    <div className="bg-gray-900 border border-gray-700/50 rounded-xl p-6">
      <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
        Recent Activity
      </h3>
      {activities ? (
        <ActivityFeed activities={activities.slice(0, 10)} />
      ) : (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-800/50 rounded animate-pulse" />
          ))}
        </div>
      )}
    </div>
  );
}
