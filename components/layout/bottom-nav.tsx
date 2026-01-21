"use client";
import SearchModal from "@/components/modals/search-modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaDice, FaDollarSign, FaHeadset } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiLiveLine } from "react-icons/ri";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("games");
  const [activeModal, setActiveModal] = useState<"search" | null>(null);
  const closeModal = () => setActiveModal(null);

  const router = useRouter();

  const handleNav = (tab: string, path?: string) => {
    setActiveTab(tab);
    if (path) router.push(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0a1214] border-t border-gray-800 z-50 md:hidden">
      <div className="flex items-center justify-around px-2 py-3">
        {/* All Games */}
        <button
          // onClick={() => setActiveTab("games")}

          onClick={() => handleNav("games", "/")}
          className="flex flex-col items-center gap-1 relative"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              activeTab === "games"
                ? "bg-gradient-to-b from-red-600 to-red-700 shadow-lg shadow-red-500/50 -translate-y-2"
                : "bg-gray-800"
            }`}
          >
            <FaDice
              className={`text-xl ${
                activeTab === "games" ? "text-white" : "text-gray-400"
              }`}
            />
          </div>
          <span
            className={`text-[10px] ${
              activeTab === "games" ? "text-white" : "text-gray-400"
            }`}
          >
            All Games
          </span>
        </button>

        {/* Live */}
        <button
          // onClick={() => setActiveTab("live")}
          onClick={() => handleNav("live", "/live-casino")}
          className="flex flex-col items-center gap-1"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              activeTab === "live"
                ? "bg-gradient-to-b from-red-600 to-red-700 shadow-lg shadow-red-500/50 -translate-y-2"
                : "bg-gray-800"
            }`}
          >
            <RiLiveLine
              className={`text-xl ${
                activeTab === "live" ? "text-white" : "text-gray-400"
              }`}
            />
          </div>
          <span
            className={`text-[10px] ${
              activeTab === "live" ? "text-white" : "text-gray-400"
            }`}
          >
            Live
          </span>
        </button>

        {/* Center Deposit Button */}
        <button
          onClick={() => handleNav("deposit", "/userdashboard")}
          className="flex flex-col items-center -mt-6"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-red-600 to-red-700 flex items-center justify-center shadow-xl shadow-red-500/50 border-4 border-[#0a1214]">
            <FaDollarSign className="text-white text-2xl" />
          </div>
          <span className="text-[10px] text-white mt-1">Deposit</span>
        </button>

        {/* Search */}
        <button
          onClick={() => setActiveTab("search")}
          onClickCapture={() => setActiveModal("search")}
          className="flex flex-col items-center gap-1"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              activeTab === "search"
                ? "bg-gradient-to-b from-red-600 to-red-700 shadow-lg shadow-red-500/50 -translate-y-2"
                : "bg-gray-800"
            }`}
          >
            <FiSearch
              className={`text-xl ${
                activeTab === "search" ? "text-white" : "text-gray-400"
              }`}
            />
          </div>
          <span
            className={`text-[10px] ${
              activeTab === "search" ? "text-white" : "text-gray-400"
            }`}
          >
            Search
          </span>
        </button>

        {/* Support */}
        <Link
          href="https://tawk.to/europa777"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
          onClick={() => setActiveTab("support")}
          className="flex flex-col items-center gap-1"
        >
          <button
            onClick={() => setActiveTab("support")}
            className="flex flex-col items-center gap-1"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                activeTab === "support"
                  ? "bg-gradient-to-b from-red-600 to-red-700 shadow-lg shadow-red-500/50 -translate-y-2"
                  : "bg-gray-800"
              }`}
            >
              <FaHeadset
                className={`text-xl ${
                  activeTab === "support" ? "text-white" : "text-gray-400"
                }`}
              />
            </div>
            <span
              className={`text-[10px] ${
                activeTab === "support" ? "text-white" : "text-gray-400"
              }`}
            >
              Support
            </span>
          </button>
        </Link>
      </div>
      {/* Single Modal Overlay for ALL modals (Desktop & Mobile) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-[#081A26] border border-slate-700 w-full max-w-2xl rounded-2xl lg:p-8 p-4 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 rounded-full p-2 text-white transition-colors z-10"
            >
              ✕
            </button>

            {/* Modal Content Switcher */}
            <div className="text-white">
              {activeModal === "search" && <SearchModal />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
