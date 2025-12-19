import Image from "next/image";
import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import Ads1 from "../../public/Ads1.png";

import Ads2 from "../../public/Ads2.png";
import Ads3 from "../../public/Ads3.png";
import Ads4 from "../../public/Ads4.png";
import Ads5 from "../../public/Ads5.png";
import Ads6 from "../../public/Ads6.png";
import Ads7 from "../../public/Ads7.png";
import Ads8 from "../../public/Ads8.png";

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
          src={Ads1}
          height={4000}
          width={4000}
          alt=""
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Ads2}
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Ads3}
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Ads4}
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Ads5}
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Ads6}
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Ads7}
          alt=""
          height={4000}
          width={4000}
          className="h-auto w-full my-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Ads8}
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
