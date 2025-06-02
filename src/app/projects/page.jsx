import { Sidebar } from "@/components/Sidebar";
import TicketDetail from "@/components/ticket/TicketDetail";

export default function ProjectsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar currentPage="Projects" />
      <div className="flex flex-col flex-1">
        <div className="flex-1 pr-4 overflow-auto">
          <TicketDetail />
        </div>
      </div>
    </div>
  );
}
