"use client";
import Sidebar from "./sidebar";
import { useSidebar } from "./SidebarContext";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex bg-[#061621] mb-6 lg:gap-8 px-4">
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "lg:ml-0" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
