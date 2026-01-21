import { IMAGES } from "@/lib/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getLinks } from "./header-data";

interface HeaderMobileMenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  setActiveModal: (modal: "search" | "login" | "signup" | null) => void;
}

export const HeaderMobileMenu = ({
  showMobileMenu,
  setShowMobileMenu,
  setActiveModal,
}: HeaderMobileMenuProps) => {
  const t = useTranslations("Navigation");
  const links = getLinks(t);

  if (!showMobileMenu) return null;

  return (
    <div className="md:hidden bg-[#0a1f2e] border-t border-gray-800 px-3 py-4 space-y-3">
      {/* User Info */}
      <Link href="/userdashboard">
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
      <div className="flex items-center justify-between bg-linear-to-b from-[#ffffff]/20 to-[#071a26] p-3 rounded-md">
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
          className="bg-linear-to-b from-[#f80507] to-[#860001] whitespace-nowrap text-white font-bold py-2 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all text-sm"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
