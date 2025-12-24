"use client";
import {
  FaHome,
  FaDice,
  FaGift,
  FaCrown,
  FaCoins,
  FaHeadset,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import { RiLiveLine, RiTrophyLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SideAds from "../../public/SideAds.png";
import { useState, useTransition } from "react";
import { useSidebar } from "./SidebarContext";
import { PiSpinnerBallFill } from "react-icons/pi";
import setLanguageValue from "../../actions/set-language-action"; // Import your server action
import { useLocale } from "next-intl";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const [isPending, startTransition] = useTransition();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "pl", name: "Polski", flag: "🇵🇱" },
    { code: "fi", name: "Suomi", flag: "🇫🇮" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "no", name: "Norsk", flag: "🇳🇴" },
  ];

  const links = [
    { href: "/dashboard", label: "Home", icon: <FaHome /> },
    { href: "/dashboard/casino", label: "Casino", icon: <FaDice /> },
    {
      href: "/dashboard/livecasino",
      label: "Live Casino",
      icon: <RiLiveLine />,
    },
    { href: "/dashboard/jackpot", label: "Jackpot", icon: <FaGift /> },
    {
      href: "/dashboard/tournaments",
      label: "Tournaments",
      icon: <RiTrophyLine />,
    },
    {
      href: "/dashboard/wheelbonus",
      label: "Wheel Bonus",
      icon: <PiSpinnerBallFill />,
    },
    { href: "/dashboard/myfavorite", label: "My Favorite", icon: <FaHeart /> },
    { href: "/dashboard/promotions", label: "Promotions", icon: <FaGift /> },
    { href: "/dashboard/vip", label: "VIP Club", icon: <FaCrown /> },
    { href: "/dashboard/cashback", label: "Cashback", icon: <FaCoins /> },
    { href: "/dashboard/contact", label: "Contact", icon: <FaHeadset /> },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = async (langCode: string) => {
    setShowLanguageDropdown(false);

    startTransition(async () => {
      // Set the cookie
      await setLanguageValue(langCode);
      // Refresh the page to apply new locale
      router.refresh();
    });
  };

  return (
    <div
      className={`min-h-full bg-[#081a26] rounded-md text-white flex flex-col p-4 space-y-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="self-end p-2 rounded-lg bg-[#0a1f2d] hover:bg-[#0d2535] transition-all"
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <FaChevronRight className="text-gray-400" />
        ) : (
          <FaChevronLeft className="text-gray-400" />
        )}
      </button>

      {!isCollapsed && (
        <div>
          <div className="relative">
            <Image
              src={SideAds}
              alt="Jackpot Banner"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}

      <nav className="flex flex-col space-y-2 flex-1">
        {links.map((link) => (
          <SidebarLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            active={pathname === link.href}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>

      <div className="mt-auto pt-4 space-y-3">
        <button
          className={`flex items-center px-4 py-3 rounded-lg bg-[#0a1f2d] hover:bg-[#0d2535] transition-all w-full ${
            isCollapsed ? "justify-center" : "space-x-3 text-left"
          }`}
          title={isCollapsed ? "Live support" : ""}
        >
          <FaHeadset className="text-green-400 text-lg" />
          {!isCollapsed && (
            <span className="text-sm font-medium text-[#58656e]">
              Live support
            </span>
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            disabled={isPending}
            className={`flex items-center px-4 py-3 rounded-lg bg-[#0a1f2d] hover:bg-[#0d2535] transition-all w-full ${
              isCollapsed ? "justify-center" : "justify-between"
            } ${isPending ? "opacity-50 cursor-wait" : ""}`}
            title={isCollapsed ? currentLanguage.name : ""}
          >
            <div
              className={`flex items-center ${isCollapsed ? "" : "space-x-3"}`}
            >
              <span className="text-2xl">{currentLanguage.flag}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium text-[#58656e]">
                  {currentLanguage.name}
                </span>
              )}
            </div>
            {!isCollapsed && (
              <FaChevronDown
                className={`text-gray-400 text-sm transition-transform ${
                  showLanguageDropdown ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {showLanguageDropdown && (
            <div
              className={`absolute bottom-full mb-2 bg-[#0a1f2d] border border-gray-700 rounded-lg overflow-hidden shadow-lg z-50 ${
                isCollapsed ? "left-full ml-2 w-48" : "left-0 right-0"
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  disabled={isPending}
                  className={`flex items-center space-x-3 px-4 py-3 w-full hover:bg-[#0d2535] transition-all ${
                    lang.code === currentLocale ? "bg-[#0d2535]" : ""
                  } ${isPending ? "opacity-50 cursor-wait" : ""}`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-medium text-gray-300">
                    {lang.name}
                  </span>
                  {lang.code === currentLocale && (
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
  isCollapsed?: boolean;
};

function SidebarLink({
  href,
  icon,
  label,
  active,
  isCollapsed,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 rounded-lg relative overflow-hidden transition-all duration-300 ${
        isCollapsed ? "justify-center" : "space-x-3"
      } ${
        active
          ? "bg-gradient-to-r from-[#860001] via-[#1a1f2f] to-transparent text-white font-semibold"
          : "text-[#58656e] hover:text-white bg-[#0a1f2d]"
      }`}
      title={isCollapsed ? label : ""}
    >
      <span className="relative z-10 text-lg">{icon}</span>
      {!isCollapsed && (
        <span className="relative z-10 font-medium text-sm">{label}</span>
      )}
    </Link>
  );
}
