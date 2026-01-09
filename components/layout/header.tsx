"use client";
import React, { useState } from "react";
import {
  MdAccountBalanceWallet,
  MdKeyboardArrowDown,
  MdMenu,
} from "react-icons/md";
import Image from "next/image";
import { DepositModal } from "../modals/deposit-modal";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FaChevronDown } from "react-icons/fa";
import setLanguageValue from "@/actions/set-language-action";

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
import { IMAGES } from "@/lib/assets";
import { FiSearch } from "react-icons/fi";
import SearchModal from "../modals/search-modal";
import LoginModal from "../modals/login-modal";
import SignupModal from "../modals/signup-modal";

const Header = () => {
  const t = useTranslations("Navigation");

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
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const currentLocale = useLocale();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isPending, startTransition] = useTransition();
  // State to manage which modal is open
  const [activeModal, setActiveModal] = useState<
    "search" | "login" | "signup" | null
  >(null);
  const closeModal = () => setActiveModal(null);

  const links = [
    { href: "/dashboard", label: t("home"), icon: <FaHome /> },
    { href: "/dashboard/casino", label: t("casino"), icon: <FaDice /> },
    {
      href: "/dashboard/livecasino",
      label: t("live_casino"),
      icon: <RiLiveLine />,
    },
    { href: "/dashboard/jackpot", label: t("jackpot"), icon: <FaGift /> },
    {
      href: "/dashboard/tournaments",
      label: t("tournaments"),
      icon: <RiTrophyLine />,
    },
    {
      href: "/dashboard/wheelbonus",
      label: t("wheel_bonus"),
      icon: <PiSpinnerBallFill />,
    },
    {
      href: "/dashboard/myfavorite",
      label: t("my_favorite"),
      icon: <FaHeart />,
    },
    { href: "/dashboard/promotions", label: t("promotions"), icon: <FaGift /> },
    { href: "/dashboard/vip", label: t("vip_club"), icon: <FaCrown /> },
    { href: "/dashboard/cashback", label: t("cashback"), icon: <FaCoins /> },
    { href: "/dashboard/contact", label: t("contact"), icon: <FaHeadset /> },
  ];

  const currentLanguage =
    languages.find((l) => l.code === currentLocale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setShowLangDropdown(false);

    startTransition(async () => {
      await setLanguageValue(langCode);
      window.location.reload();
    });
  };

  return (
    <>
      <div className="bg-[#061621] text-white text-sm w-full">
        {/* Main Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 w-full">
          {/* Left Section */}
          <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-[100px] lg:space-x-[200px]">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={IMAGES.Logo}
                alt="Logo"
                width={100}
                height={25}
                className="object-contain h-8 sm:h-10 md:h-12 w-auto"
              />
            </div>

            {/* Rewards - Hidden on mobile */}
            <div className="hidden md:block">
              <Image
                src={IMAGES.Rewards}
                width={1000}
                height={1000}
                className="h-6 md:h-8 w-auto"
                alt="Rewards"
              />
            </div>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-6">
              {/* 1. Search Bar Trigger */}
              <div
                onClick={() => setActiveModal("search")}
                className="relative flex items-center cursor-pointer group"
              >
                <FiSearch className="absolute left-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
                <div className="bg-[#0a1f2d] text-slate-500 text-sm py-2 pl-10 pr-4 rounded-lg border border-transparent hover:border-slate-700 transition-all w-48">
                  Search...
                </div>
              </div>

              {/* 2. Log In Link Trigger */}
              <button
                onClick={() => setActiveModal("login")}
                className="text-white whitespace-nowrap font-semibold text-sm hover:text-red-500 transition-colors"
              >
                Log In
              </button>

              {/* 3. Sign Up Button Trigger */}
              <button
                onClick={() => setActiveModal("signup")}
                className="bg-gradient-to-b from-[#f80507] to-[#860001] whitespace-nowrap text-white font-bold py-2 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all text-sm"
              >
                Sign Up
              </button>
            </div>

            <div className="bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] inline-flex p-1 rounded-md hover:opacity-90 cursor-pointer">
              {/* Balance */}
              <div className="flex items-center space-x-2 px-3 py-1 rounded-md">
                <Image
                  src={IMAGES.Coin}
                  width={1000}
                  height={1000}
                  className="h-6 w-auto"
                  alt="Coin"
                />
                <span className="text-[#757e84]">0.0002745</span>
                <div className="bg-[#182935] p-1 rounded-full">
                  <MdKeyboardArrowDown />
                </div>
              </div>

              {/* Deposit Button */}
              <Link href="/dashboard/userdashboard">
                <button className="flex items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-3 py-1.5 rounded-md text-white font-medium transition">
                  <span>{t("deposit")}</span>
                </button>
              </Link>
            </div>

            {/* User Profile */}
            <Link href="/dashboard/userdashboard">
              <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
                <Image
                  src={IMAGES.Face}
                  width={1000}
                  height={1000}
                  className="w-10 h-10"
                  alt="Profile"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-semibold">Mitchell</span>
                  <span className="text-[10px] bg-[#1e141e] whitespace-nowrap border-[#ea0000] text-[#f80507] w-10 border rounded-sm p-1 text-center">
                    {t("level")} 27
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Section - Mobile */}
          <div className="flex md:hidden items-center space-x-2 relative">
            {/* Search Icon */}
            <button
              onClick={() => setActiveModal("search")}
              className="bg-[#0a1f2d] p-2 rounded-lg hover:bg-[#0d2535] transition-colors"
            >
              <FiSearch className="text-slate-400 text-lg" />
            </button>

            {/* Language Selector */}
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
                        <span className="ml-auto text-green-400 text-xs">
                          ✓
                        </span>
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
                <Image
                  src={IMAGES.Face}
                  width={1000}
                  height={1000}
                  className="w-12 h-12"
                  alt="Profile"
                />
                <div className="flex flex-col">
                  <span className="text-base font-semibold">Mitchell</span>
                  <span className="text-xs bg-[#1e141e] border-[#ea0000] text-[#f80507] w-12 border rounded-sm p-1 text-center mt-1">
                    {t("level")} 27
                  </span>
                </div>
              </div>
            </Link>

            {/* Balance Display */}
            <div className="flex items-center justify-between bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] p-3 rounded-md">
              <div className="flex items-center space-x-2">
                <Image
                  src={IMAGES.Coin}
                  width={1000}
                  height={1000}
                  className="h-6 w-auto"
                  alt="Coin"
                />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">{t("balance")}</span>
                  <span className="text-white font-semibold">0.0002745</span>
                </div>
              </div>
              <MdKeyboardArrowDown className="text-gray-400" />
            </div>

            {/* Rewards */}
            <div className="flex items-center justify-center py-2">
              <Image
                src={IMAGES.Rewards}
                width={1000}
                height={1000}
                className="h-8 w-auto"
                alt="Rewards"
              />
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 py-2 border-b border-gray-800">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  <div className="flex items-center space-x-3 px-3 py-2.5 hover:bg-white/5 rounded-md transition-colors cursor-pointer">
                    <span className="text-lg text-gray-400">{link.icon}</span>
                    <span className="text-sm">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setShowMobileMenu(false);
                  setActiveModal("login");
                }}
                className="text-white whitespace-nowrap font-semibold text-sm hover:text-red-500 transition-colors"
              >
                Log In
              </button>

              <button
                onClick={() => {
                  setShowMobileMenu(false);
                  setActiveModal("signup");
                }}
                className="bg-gradient-to-b from-[#f80507] to-[#860001] whitespace-nowrap text-white font-bold py-2 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all text-sm"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
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
              {activeModal === "login" && <LoginModal />}
              {activeModal === "signup" && <SignupModal />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
