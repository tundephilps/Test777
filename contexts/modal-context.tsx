"use client";

import LoginModal from "@/components/modals/login-modal";
import SearchModal from "@/components/modals/search-modal";
import SignupModal from "@/components/modals/signup-modal";
import { createContext, ReactNode, useContext, useState } from "react";

type ModalType = "search" | "login" | "signup" | null;

interface ModalContextType {
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
      {/* Global Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-[#081A26] border border-slate-700 w-full max-w-2xl rounded-2xl lg:p-8 p-4 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 cursor-pointer text-white transition-colors z-10"
            >
              ✕
            </button>

            {/* Modal Content Switcher */}
            <div className="text-white">
              {activeModal === "search" && <SearchModal />}
              {activeModal === "login" && <LoginModal onClose={closeModal} />}
              {activeModal === "signup" && <SignupModal />}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
