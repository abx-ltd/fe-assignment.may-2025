"use client";
import { useState, useCallback } from "react";
import { INITIAL_ACTIVITIES, TICKET_DATA } from "@/utils/data";
import { Breadcrumb } from "../Breadcrumb";
import { TicketDescription } from "./TicketDescription";
import { ActivitySection } from "../ActivitySection";
import { TicketProperties } from "./TicketProperties";

export default function TicketDetail() {
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);

  const handleAddComment = useCallback((comment) => {
    const newActivity = {
      user: "Current User", // This would come from auth context
      action: `commented: ${comment}`,
      timestamp: new Date().toLocaleString("sv-SE").replace("T", " "),
      type: "info",
    };
    setActivities((prev) => [newActivity, ...prev]);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Main Content Area with Properties */}
      <div className="flex flex-col flex-1 py-4 pl-4 overflow-visible">
        <Breadcrumb items={TICKET_DATA.breadcrumb} />

        {/* Content Grid: Main content and Properties side by side - takes remaining height */}
        <div className="grid flex-1 grid-cols-1 gap-6 overflow-visible lg:grid-cols-4">
          {/* Main Content (3 columns on large screens) */}
          <div className="space-y-6 overflow-auto lg:col-span-3">
            <TicketDescription
              description={TICKET_DATA.description}
              onAddSubTickets={() => {}}
            />
            <ActivitySection
              activities={activities}
              onAddComment={handleAddComment}
            />
          </div>

          {/* Properties Column (1 column on large screens) */}
          <div className="relative z-10 overflow-visible lg:col-span-1">
            <TicketProperties properties={TICKET_DATA.properties} />
          </div>
        </div>
      </div>
    </div>
  );
}
