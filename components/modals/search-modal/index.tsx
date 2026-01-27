"use client";
import { useState } from "react";
import { SearchFavoriteGames } from "./search-favorite-games";
import { SearchGames } from "./search-games";
import { SearchProvider } from "./search-provider";

const SearchModal = () => {
  const [activeTab, setActiveTab] = useState<
    "games" | "providers" | "favorites"
  >("games");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "games" as const, label: "Games" },
    { id: "providers" as const, label: "Providers" },
    { id: "favorites" as const, label: "Favorites" },
  ];

  return (
    <div className="py-2 rounded-xl min-w-[80vw] mt-6 lg:min-w-3xl ">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for games or providers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#0b1f2b] text-white border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 transition"
        />
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
              activeTab === tab.id
                ? "bg-red-600 text-white"
                : "text-gray-400 hover:text-white bg-[#0b1f2b]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 h-[500px] overflow-y-auto scrollbar-hide">
        {activeTab === "games" && <SearchGames query={searchQuery} />}
        {activeTab === "providers" && <SearchProvider query={searchQuery} />}
        {activeTab === "favorites" && (
          <SearchFavoriteGames query={searchQuery} />
        )}
      </div>
    </div>
  );
};

export default SearchModal;
