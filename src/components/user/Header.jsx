import { Home, Settings, ChevronDown, CircleUserRound } from "lucide-react";

// Header component for better organization
export const Header = ({ router }) => (
  <header className="bg-[#294172] text-white p-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className="hidden md:block text-green-400 font-jersey text-[16px] font-bold w-48"
          onClick={() => router.push("/projects")}
        >
          COMPANY LOGO XXX
        </div>
        <Home
          className="w-5 h-5 ml-4 mr-2 md:mr-4"
          onClick={() => router.push("/projects")}
        />
        <div className="px-2 md:px-3 py-1 text-sm text-gray-800 bg-[#DAE6EF] rounded">
          <div className="text-xs text-[#294172] font-normal">Module</div>
          <div className="font-bold text-[#294172] text-xs md:text-sm">
            USER MANAGEMENT
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="relative">
          <img
            src="/noti.png"
            alt="Notification"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <div className="absolute flex items-center justify-center w-3 h-3 text-xs text-white bg-red-500 rounded-full md:w-4 md:h-4 -top-1 -right-1">
            1
          </div>
        </div>
        <Settings className="w-4 h-4 md:w-5 md:h-5" />
        <div className="items-center hidden space-x-2 sm:flex">
          <CircleUserRound />
          <div className="text-sm">
            <div className="font-bold">Mr. David Nguyen</div>
            <div className="text-xs text-gray-300">Home Company</div>
          </div>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="sm:hidden">
          <CircleUserRound className="w-6 h-6" />
        </div>
      </div>
    </div>
  </header>
);
