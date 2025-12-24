"use client";
import React, { useState } from "react";
import {
  MdAccountBalanceWallet,
  MdKeyboardArrowDown,
  MdMenu,
} from "react-icons/md";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Reward from "../../public/Rewards.png";
import Coin from "../../public/Coin.png";
import Face from "../../public/Face.png";
import { DepositModal } from "../modals/deposit-modal";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "next-intl";
import { FaChevronDown } from "react-icons/fa";

// You can keep or remove this one (we'll use server action + refresh)
import setLanguageValue from "../../actions/set-language-action";

import {
  FaHome,
  FaDice,
  FaGift,
  FaHeart,
  FaCrown,
  FaCoins,
  FaHeadset,
} from "react-icons/fa";
import { RiLiveLine, RiTrophyLine } from "react-icons/ri";
import { PiSpinnerBallFill } from "react-icons/pi";

export default function Header() {
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  const [showLang, setShowLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]); // default EN

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // ── Language switcher state ──
  const currentLocale = useLocale();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isPending, startTransition] = useTransition();

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
    languages.find((l) => l.code === currentLocale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setShowLangDropdown(false);

    startTransition(async () => {
      await setLanguageValue(langCode);
      // router.refresh() ← optional, usually enough with cookie + revalidation
      // but many people keep it for reliability in Next.js App Router + i18n
      window.location.reload(); // ← most reliable in many cases (2024-2025)
      // or: router.refresh();
    });
  };

  return (
    <div className="bg-[#061621] text-white text-sm w-full">
      {/* Main Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 w-full">
        {/* Left Section */}
        <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-[100px] lg:space-x-[200px]">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={25}
              className="object-contain h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Rewards - Hidden on mobile */}
          <div className="hidden md:block">
            <Image src={Reward} className="h-6 md:h-8 w-auto" alt="Rewards" />
          </div>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] inline-flex p-1 rounded-md hover:opacity-90 cursor-pointer">
            {/* Balance */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-md">
              <Image src={Coin} className="h-6 w-auto" alt="Coin" />
              <span className="text-[#757e84]">0.0002745</span>
              <div className="bg-[#182935] p-1 rounded-full">
                <MdKeyboardArrowDown />
              </div>
            </div>

            {/* Deposit Button */}
            <Link href="/dashboard/userdashboard">
              <button
                // onClick={() => setIsDepositModalOpen(true)}

                className="flex items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-3 py-1.5 rounded-md text-white font-medium transition"
              >
                <span>DEPOSIT</span>
              </button>
            </Link>
          </div>
          {/* Modal */}
          {/* <DepositModal
            isOpen={isDepositModalOpen}
            onClose={() => setIsDepositModalOpen(false)}
          /> */}

          {/* User Profile */}
          <Link href="/dashboard/userdashboard">
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
              <Image src={Face} className="w-10 h-10" alt="Profile" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold">Mitchell</span>
                <span className="text-[10px] bg-[#1e141e] whitespace-nowrap border-[#ea0000] text-[#f80507] w-10 border rounded-sm p-1 text-center">
                  LVL 27
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Section - Mobile */}
        <div className="flex md:hidden items-center space-x-2 relative">
          {/* Balance */}
          <Link href="/dashboard/userdashboard">
            <div className="flex items-center space-x-1 bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] px-2 py-1.5 rounded-md text-xs">
              <Image src={Coin} className="h-4 w-auto" alt="Coin" />
              <span className="text-[#757e84]">0.00027</span>
            </div>
          </Link>

          {/* 🌍 Language Selector */}
          {/* ── Improved Mobile Language Switcher ── */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              disabled={isPending}
              className={`bg-[#0a1f2d] rounded-lg px-2.5 py-1.5 text-sm flex items-center gap-1.5 min-w-[68px] justify-center ${
                isPending ? "opacity-60" : ""
              }`}
            >
              <span className="text-xl">{currentLanguage.flag}</span>
              <span className="text-xs font-medium">
                {currentLanguage.code.toUpperCase()}
              </span>
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 top-full mt-2 bg-[#0a1f2d] border border-gray-700 rounded-lg shadow-lg z-50 min-w-[160px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    disabled={isPending}
                    className={`flex items-center gap-2.5 w-full px-3 py-2.5 hover:bg-[#0d2535] text-sm ${
                      lang.code === currentLocale ? "bg-[#0d2535]" : ""
                    } ${isPending ? "opacity-50" : ""}`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {lang.code === currentLocale && (
                      <span className="ml-auto text-green-400 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Menu Icon */}
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="bg-white/20 rounded-lg p-2"
          >
            <BiMenu className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="md:hidden bg-[#0a1f2e] border-t border-gray-800 px-3 py-4 space-y-3">
          {/* User Info */}

          <Link href="/dashboard/userdashboard">
            <div className="flex items-center space-x-3 pb-3 border-b border-gray-800">
              <Image src={Face} className="w-12 h-12" alt="Profile" />
              <div className="flex flex-col">
                <span className="text-base font-semibold">Mitchell</span>
                <span className="text-xs bg-[#1e141e] border-[#ea0000] text-[#f80507] w-12 border rounded-sm p-1 text-center mt-1">
                  LVL 27
                </span>
              </div>
            </div>
          </Link>
          {/* Balance Display */}
          <div className="flex items-center justify-between bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] p-3 rounded-md">
            <div className="flex items-center space-x-2">
              <Image src={Coin} className="h-6 w-auto" alt="Coin" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Balance</span>
                <span className="text-white font-semibold">0.0002745</span>
              </div>
            </div>
            <MdKeyboardArrowDown className="text-gray-400" />
          </div>

          {/* Rewards */}
          <div className="flex items-center justify-center py-2">
            <Image src={Reward} className="h-8 w-auto" alt="Rewards" />
          </div>

          {/* Navigation Links */}
          <div className="space-y-1 py-2 border-b border-gray-800 ">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                <div className="flex items-center space-x-3 px-3 py-2.5 hover:bg-white/5 rounded-md transition-colors cursor-pointer">
                  <span className="text-lg text-gray-400">{link.icon}</span>
                  <span className="text-sm">{link.label}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Deposit Button */}
          <Link href="/dashboard/userdashboard">
            <button
              // onClick={() => setIsDepositModalOpen(true)}
              className="w-full bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 py-3 rounded-md text-white font-medium transition"
            >
              DEPOSIT
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
