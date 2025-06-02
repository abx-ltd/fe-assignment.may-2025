"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  LayoutDashboard,
  Calculator,
  SquarePen,
  CircleHelp,
  SquareArrowOutUpRight,
  BookOpenText,
  Building2,
} from "lucide-react";

const INITIAL_SIDEBAR_ITEMS = [
  {
    icon: LayoutDashboard,
    label: "Overview",
    active: false,
    route: "/overview",
  },
  { icon: CircleHelp, label: "Inquiries", active: false, route: "/inquiries" },
  { icon: Calculator, label: "Estimator", active: false, route: "/estimator" },
  { icon: SquarePen, label: "Projects", active: true, route: "/projects" },
];

const INITIAL_BOTTOM_NAV = [
  { icon: Building2, label: "Administrations", active: false, route: "#" },
  { icon: BookOpenText, label: "Documentation", active: false, route: "#" },
];

export function Sidebar({ currentPage, isCollapsed = false }) {
  const router = useRouter();
  const [sidebarItems, setSidebarItems] = useState(INITIAL_SIDEBAR_ITEMS);
  const [bottomNavItems] = useState(INITIAL_BOTTOM_NAV);

  const handleSidebarItemClick = (item) => {
    setSidebarItems((items) =>
      items.map((sidebarItem) => ({
        ...sidebarItem,
        active: sidebarItem.label === item.label,
      }))
    );
    // Navigate to the route
    if (item.route && item.route !== "#") {
      router.push(item.route);
    }
  };

  const handleLogoClick = () => {
    setSidebarItems((items) =>
      items.map((item) => ({
        ...item,
        active: false,
      }))
    );
    // Navigate to User Management page
    router.push("/user-management");
  };

  // Sync local state with current page prop
  useEffect(() => {
    if (currentPage === "User Management") {
      // Clear all sidebar items when on User Management page
      setSidebarItems((items) =>
        items.map((item) => ({
          ...item,
          active: false,
        }))
      );
    } else {
      setSidebarItems((items) =>
        items.map((item) => ({
          ...item,
          active: item.label === currentPage,
        }))
      );
    }
  }, [currentPage]);

  return (
    <div
      className={`flex flex-col bg-[#F1F1F1] shadow-lg transition-all duration-300 ${
        isCollapsed ? "w-[80px]" : "w-[242px]"
      }`}
    >
      {/* Company Header */}
      <div className="p-4 pt-[26px]">
        <div className="flex items-center gap-3">
          {!isCollapsed ? (
            <Image
              src="/Com-Profile.svg"
              alt="Company Profile"
              width={204}
              height={48}
              className="w-[204px] h-[48px]"
            />
          ) : (
            <Image
              src="/logoMini.jpg"
              alt="Company Profile"
              width={48}
              height={48}
              className="w-[48px] h-[48px]"
            />
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Button
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full transition-colors ${
                  isCollapsed ? "justify-center p-2" : "justify-start gap-3"
                } ${
                  item.active
                    ? "bg-gray-200 text-blue-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => handleSidebarItemClick(item)}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className="w-4 h-4" />
                {!isCollapsed && item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="p-4">
        <ul className="space-y-2">
          {bottomNavItems.map((item) => (
            <li key={item.label}>
              <Button
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full transition-colors ${
                  isCollapsed ? "justify-center p-2" : "justify-center gap-3"
                } ${
                  item.active
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className="w-4 h-4" />
                {!isCollapsed && item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4">
        <div
          className={`flex items-center text-sm font-semibold cursor-pointer transition-all ${
            isCollapsed ? "justify-center" : "justify-center gap-2"
          } ${
            currentPage === "User Management"
              ? "bg-gray-200 text-blue-800 rounded-lg p-2"
              : "text-blue-600 hover:opacity-80"
          }`}
          onClick={handleLogoClick}
          title="User Management"
        >
          {!isCollapsed ? (
            <>
              <Image src="/logo.svg" alt="Logo" width={100} height={40} />
              <Button variant="ghost" size="sm">
                <SquareArrowOutUpRight color="#005A86" />
              </Button>
            </>
          ) : (
            <Image
              src="/logoCompanyMini.png"
              alt="Logo"
              width={40}
              height={40}
            />
          )}
        </div>
      </div>
    </div>
  );
}
