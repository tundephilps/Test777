"use client";

import { useAuth } from "@/contexts/auth-context";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaGem,
  FaGift,
  FaHandHoldingUsd,
  FaHistory,
  FaHome,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaUser,
  FaWallet,
} from "react-icons/fa";

export const UserDropdown = () => {
  const { user, logout, avatarUrl } = useAuth();
  const t = useTranslations("Navigation");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { icon: FaUser, label: "Profile", href: "/#" },
    { icon: FaHome, label: "My account", href: "/#" },
    { icon: FaWallet, label: "Deposit", href: "/#" },
    { icon: FaMoneyBillWave, label: "Withdraw", href: "/#" },
    { icon: FaGift, label: "Bonus", href: "/#" },
    { icon: FaGem, label: "Free Spins", href: "/#" },
    { icon: FaHandHoldingUsd, label: "VIP Cashback", href: "/#" },
    { icon: FaHistory, label: "Game History", href: "/#" },
  ];

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Trigger */}
      <button
        className="flex items-center space-x-2 cursor-pointer hover:opacity-80 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <Image
          src={avatarUrl || "https://github.com/shadcn.png"}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover border-2 border-[#182935]"
          alt="Profile"
        />
        <div className="flex flex-col leading-tight text-left">
          <span className="text-base font-semibold text-white">
            {user?.username || user?.first_name || "User"}
          </span>
          <span className="text-[10px] bg-[#1e141e] whitespace-nowrap border-[#ea0000] text-[#f80507] w-fit px-1 border rounded-sm text-center">
            Level 27
          </span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-[#e6eeff] rounded-lg shadow-xl z-50 overflow-hidden text-[#1f2b37]">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[#d0e1fd] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="text-xl text-[#1f2b37]" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
            <div className="border-t border-gray-300 my-1"></div>
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#d0e1fd] transition-colors text-left"
            >
              <FaSignOutAlt className="text-xl text-[#1f2b37]" />
              <span className="font-medium">Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
