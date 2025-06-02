import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { users, USER_TYPES, STATUS_OPTIONS } from "@/utils/data";

// Filter component for better organization
export const FilterSection = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-col h-full space-y-3 md:space-y-4">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-600">FILTER</span>
        <Filter className="w-4 h-4 text-gray-500" />
      </div>

      <Separator />

      {/* User Name Filter */}
      <div className="space-y-1">
        <Label className="text-xs font-bold text-gray-700">User name</Label>
        <Select
          value={filters.userName}
          onValueChange={(value) => onFilterChange("userName", value)}
        >
          <SelectTrigger className="w-full h-8 text-xs">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent className="z-50">
            <SelectItem value="all">All Users</SelectItem>
            {users.map((user) => (
              <SelectItem key={user.id} value={user.name}>
                {user.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* User ID Filter */}
      <div className="space-y-1">
        <Label className="text-xs font-bold text-gray-700">User ID</Label>
        <Input placeholder="Input" className="h-8 text-xs" />
      </div>

      {/* User Type Filter */}
      <div className="space-y-1">
        <Label className="text-xs font-bold text-gray-700">User type</Label>
        <Select
          value={filters.userType}
          onValueChange={(value) => onFilterChange("userType", value)}
        >
          <SelectTrigger className="w-full h-8 text-xs">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent className="z-50">
            <SelectGroup>
              <SelectItem value="all">All Types</SelectItem>
              {USER_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Phone Number Filter */}
      <div className="space-y-1">
        <Label className="text-xs font-bold text-gray-700">Phone number</Label>
        <Input
          placeholder="Input"
          value={filters.phone}
          onChange={(e) => onFilterChange("phone", e.target.value)}
          className="h-8 text-xs"
        />
      </div>

      {/* Email Address Filter */}
      <div className="space-y-1">
        <Label className="text-xs font-bold text-gray-700">Email address</Label>
        <Input
          placeholder="Input"
          value={filters.email}
          onChange={(e) => onFilterChange("email", e.target.value)}
          className="h-8 text-xs"
        />
      </div>

      {/* Status Filter */}
      <div className="space-y-1">
        <Label className="text-xs font-bold text-gray-700">Status</Label>
        <div className="space-y-3">
          {STATUS_OPTIONS.map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox
                id={status.toLowerCase()}
                checked={filters.status === status}
                onCheckedChange={() => onFilterChange("status", status)}
              />
              <Label htmlFor={status.toLowerCase()} className="text-xs">
                {status}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Export Data Button */}
      <div className="pt-2 mt-auto">
        <Button variant="outline" className="w-full h-8 text-xs">
          Export Data
        </Button>
      </div>
    </div>
  );
};
