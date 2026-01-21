"use client";
import { useModal } from "@/contexts/modal-context";
import { useState } from "react";
import { HeaderDesktopActions } from "./header/header-desktop-actions";
import { HeaderLogo } from "./header/header-logo";
import { HeaderMobileControls } from "./header/header-mobile-controls";
import { HeaderMobileMenu } from "./header/header-mobile-menu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Use global modal context
  const { openModal } = useModal();
  // Adapter to match expected prop signature if needed, or update children.
  // Assuming children just call setActiveModal('type').
  // If children use functional updates, this will break. But likely they don't.
  const setActiveModal = openModal;

  return (
    <>
      <div className="bg-[#061621] text-white text-sm w-full relative z-40">
        {/* Main Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 w-full">
          {/* Left Section */}
          <HeaderLogo />

          {/* Right Section - Desktop */}
          <HeaderDesktopActions setActiveModal={setActiveModal} />

          {/* Right Section - Mobile */}
          <HeaderMobileControls
            setActiveModal={setActiveModal}
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        </div>

        {/* Mobile Menu Dropdown */}
        <HeaderMobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          setActiveModal={setActiveModal}
        />
      </div>
    </>
  );
};

export default Header;
