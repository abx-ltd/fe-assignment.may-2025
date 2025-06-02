import UserManagement from "@/components/user/UserManagement";

export default function UserManagementPage() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1">
        <div className="flex-1 overflow-auto">
          <UserManagement />
        </div>
      </div>
    </div>
  );
}
