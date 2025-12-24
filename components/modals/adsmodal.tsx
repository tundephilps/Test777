import Image from "next/image";
import { FC } from "react";
import { FaTimes } from "react-icons/fa";

type AdsModalProps = {
  onClose: () => void;
};

const AdsModal: FC<AdsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 ">
      <div className="relative bg-[#0A1F2D] rounded-2xl w-full max-w-4xl p-6 z-50 pt-6 lg:mt-0 mt-6 h-screen overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FaTimes size={28} />
        </button>
        {/* Ad content */}
        <span className="text-[16px]  bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 items-center justify-center cursor-pointer rounded-md flex mt-6 mx-auto text-base font-bold text-[#ffffff] px-8 py-3  text-center">
          THIS WEEK PROMOTION
        </span>{" "}
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads1.png"
          height={4000}
          width={4000}
          alt=""
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads2.png"
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads3.png"
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads4.png"
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads5.png"
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads6.png"
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads7.png"
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Ads8.png"
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
      </div>
    </div>
  );
};

export default AdsModal;
