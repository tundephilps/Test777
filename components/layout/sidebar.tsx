// components/Sidebar.tsx
"use client";

import {
  FaHome,
  FaDice,
  FaGift,
  FaCrown,
  FaCoins,
  FaHeadset,
  FaChevronDown,
} from "react-icons/fa";
import { RiLiveLine, RiTrophyLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SideAds from "../../public/SideAds.png";
import { useState } from "react";

export default function Sidebar() {
  const [pathname, setPathname] = useState("/");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
  ];

  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/casino", label: "Casino", icon: <FaDice /> },
    { href: "/live-casino", label: "Live Casino", icon: <RiLiveLine /> },
    { href: "/jackpot", label: "Jackpot", icon: <FaGift /> },
    { href: "/tournaments", label: "Tournaments", icon: <RiTrophyLine /> },
    { href: "/promotions", label: "Promotions", icon: <FaGift /> },
    { href: "/vip", label: "VIP Club", icon: <FaCrown /> },
    { href: "/cashback", label: "Cashback", icon: <FaCoins /> },
    { href: "/contact", label: "Contact", icon: <FaHeadset /> },
  ];

  const currentLanguage =
    languages.find((lang) => lang.name === selectedLanguage) || languages[0];

  return (
    <div className="w-full min-h-full bg-[#081a26] rounded-md  text-white flex flex-col p-4 space-y-4">
      {/* Jackpot Card */}
      <div>
        <div className="relative">
          <Image
            src={SideAds}
            alt="Jackpot Banner"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            active={pathname === link.href}
          />
        ))}
      </nav>

      {/* Bottom Section - Live Support & Language */}
      <div className="mt-auto pt-4  space-y-3">
        {/* Live Support */}
        <button className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#0a1f2d] hover:bg-[#0d2535] transition-all w-full text-left">
          <FaHeadset className="text-green-400 text-lg" />
          <span className="text-sm font-medium text-[#58656e]">
            Live support
          </span>
        </button>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center justify-between px-4 py-3 rounded-lg bg-[#0a1f2d] hover:bg-[#0d2535] transition-all w-full"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{currentLanguage.flag}</span>
              <span className="text-sm font-medium text-[#58656e]">
                {currentLanguage.name}
              </span>
            </div>
            <FaChevronDown
              className={`text-gray-400 text-sm transition-transform ${
                showLanguageDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Language Dropdown */}
          {showLanguageDropdown && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-[#0a1f2d] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguage(lang.name);
                    setShowLanguageDropdown(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 w-full hover:bg-[#0d2535] transition-all ${
                    lang.name === selectedLanguage ? "bg-[#0d2535]" : ""
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-medium text-gray-300">
                    {lang.name}
                  </span>
                  {lang.name === selectedLanguage && (
                    <span className="ml-auto text-green-400">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type SidebarLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

function SidebarLink({ href, icon, label, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg relative overflow-hidden transition-all duration-300 ${
        active
          ? "text-[#ff1b1b] font-semibold"
          : "text-[#58656e] hover:text-white bg-[#0a1f2d]"
      }`}
    >
      {/* Animated gradient for active state */}
      <span
        className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#860001] via-[#1a1f2f] to-transparent transition-all duration-500 ease-in-out ${
          active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
      />

      {/* Content (icon + label) */}
      <span className="relative z-10 text-lg">{icon}</span>
      <span className="relative z-10 font-medium text-sm">{label}</span>
    </Link>
  );
}
