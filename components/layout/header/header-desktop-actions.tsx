import { useAuth } from "@/contexts/auth-context";
import { IMAGES } from "@/lib/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { UserDropdown } from "./user-dropdown";

interface HeaderDesktopActionsProps {
  setActiveModal: (modal: "search" | "login" | "signup" | null) => void;
}

export const HeaderDesktopActions = ({
  setActiveModal,
}: HeaderDesktopActionsProps) => {
  const t = useTranslations("Navigation");
  const { isAuthenticated, user } = useAuth();
  
  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* 1. Search Bar Trigger - Always Visible */}
      <div
        onClick={() => setActiveModal("search")}
        className="relative flex items-center cursor-pointer group"
      >
        <FiSearch className="absolute left-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
        <div className="bg-[#0a1f2d] text-slate-500 text-sm py-2 pl-10 pr-4 rounded-lg border border-transparent hover:border-slate-700 transition-all w-48">
          Search...
        </div>
      </div>

      {!isAuthenticated ? (
        /* GUEST STATE */
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveModal("login")}
            className="text-white whitespace-nowrap font-semibold text-sm hover:text-red-500 transition-colors"
          >
            Log In
          </button>

          <button
            onClick={() => setActiveModal("signup")}
            className="bg-linear-to-b from-[#f80507] to-[#860001] whitespace-nowrap text-white font-bold py-2 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all text-sm"
          >
            Sign Up
          </button>
        </div>
      ) : (
        /* AUTH STATE */
        <div className="flex items-center gap-4">
          <div className="bg-linear-to-b from-[#ffffff]/20 to-[#071a26] inline-flex p-1 rounded-md hover:opacity-90 cursor-pointer">
            {/* Balance */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-md">
              <Image
                src={IMAGES.Coin}
                width={100}
                height={100}
                className="h-6 w-auto"
                alt="Coin"
              />
              <span className="text-[#757e84] font-medium">
                {user?.total_balance || "0.00"} {user?.currency}
              </span>
              <div className="bg-[#182935] p-1 rounded-full text-[#757e84]">
                <MdKeyboardArrowDown />
              </div>
            </div>

            {/* Deposit Button */}
            <Link href="/deposit">
              <button className="flex items-center space-x-1 bg-linear-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-3 py-1.5 rounded-r-md text-white font-medium transition h-full">
                <span>{t("deposit")}</span>
              </button>
            </Link>
          </div>

          {/* User Dropdown */}
          <UserDropdown />
        </div>
      )}
    </div>
  );
};
