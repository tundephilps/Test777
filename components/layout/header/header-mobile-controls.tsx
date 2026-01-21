import { BiMenu } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LanguageSelector } from "./language-selector";

interface HeaderMobileControlsProps {
  setActiveModal: (modal: "search" | "login" | "signup" | null) => void;
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
}

export const HeaderMobileControls = ({
  setActiveModal,
  showMobileMenu,
  setShowMobileMenu,
}: HeaderMobileControlsProps) => {
  return (
    <div className="flex md:hidden items-center space-x-2 relative">
      {/* Search Icon */}
      <button
        onClick={() => setActiveModal("search")}
        className="bg-[#0a1f2d] p-2 rounded-lg hover:bg-[#0d2535] transition-colors"
      >
        <FiSearch className="text-slate-400 text-lg" />
      </button>

      {/* Language Selector */}
      <LanguageSelector />

      {/* Menu Icon */}
      <div
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="bg-white/20 rounded-lg p-2"
      >
        <BiMenu className="text-2xl" />
      </div>
    </div>
  );
};
