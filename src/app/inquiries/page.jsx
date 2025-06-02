import { Sidebar } from "@/components/Sidebar";

const EmptyPage = ({ pageName }) => (
  <div className="p-6 flex items-center justify-center h-full">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-600 mb-2">{pageName}</h2>
      <p className="text-gray-500">This page is under development</p>
    </div>
  </div>
);

export default function InquiriesPage() {
  return (
    <div className="flex h-screen">
      <Sidebar currentPage="Inquiries" />
      <div className="flex flex-col flex-1">
        <div className="flex-1 pr-4 overflow-auto">
          <EmptyPage pageName="Inquiries" />
        </div>
      </div>
    </div>
  );
}
