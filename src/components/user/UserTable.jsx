import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { users, USER_TABLE_HEADERS } from "@/utils/data";

export const UserTable = ({
  selectedUserIds,
  onCheckAll,
  onUserCheck,
  isAllSelected,
  isSomeSelected,
}) => {
  return (
    <div className="min-w-[600px] md:min-w-0">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DAE6EF]">
            {USER_TABLE_HEADERS.map((header) => (
              <TableHead
                key={header.key}
                className="text-xs font-semibold text-gray-700 lg:text-sm"
              >
                {header.key === "checkbox" ? (
                  <Checkbox
                    checked={isAllSelected}
                    className="bg-white"
                    onCheckedChange={onCheckAll}
                    ref={(el) => {
                      if (el) {
                        el.indeterminate = isSomeSelected;
                      }
                    }}
                  />
                ) : typeof header.label === "string" ? (
                  header.label
                    .split("\n")
                    .map((line, index) => <div key={index}>{line}</div>)
                ) : (
                  header.label
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className={`cursor-pointer hover:bg-gray-50`}
            >
              <TableCell>
                <Checkbox
                  checked={selectedUserIds.has(user.id)}
                  onCheckedChange={(checked) => onUserCheck(user.id, checked)}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xs font-medium lg:text-sm">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500">{user.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="text-xs lg:text-sm">{user.phone}</div>
                  <div className="text-xs lg:text-sm">{user.email}</div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-xs lg:text-sm">{user.type}</span>
              </TableCell>
              <TableCell>
                <span className="text-xs lg:text-sm">{user.experience}</span>
              </TableCell>
              <TableCell>
                <Badge className="text-xs text-green-800 bg-green-100 hover:bg-green-200">
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};