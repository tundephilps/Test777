import { BsGiftFill } from "react-icons/bs";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useTranslations } from "next-intl";
import Depo3 from "../../public/Depo3.png";
import Depo4 from "../../public/Depo4.png";

const WelcomeBonus = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="">
      {/* Bottom Section - Welcome Bonus */}
      <div className="flex items-center justify-between  py-4">
        {/* Left Side - Welcome Bonus */}
        <div className="flex items-center gap-2 text-white">
          <BsGiftFill className="w-5 h-5" />

          <span className="font-semibold"> {t("class2")}</span>
        </div>

        {/* Right Side - View All with Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-300 hover:text-white transition-colors border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26] p-2 rounded-md">
            {t("view")}
          </button>
          <div className="flex gap-2">
            <button className="border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26]  p-2 rounded transition-all">
              <IoChevronBack className="w-4 h-4 text-gray-400" />
            </button>
            <button className="bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-60 cursor-pointer p-2 rounded transition-all">
              <IoChevronForward className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 w-full gap-4">
        {/* First Deposit Card */}
        <div className="relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50 rounded-lg overflow-hidden group">
          <Image
            src={Depo3}
            width={2000}
            height={2000}
            alt={t("deposit1_title")}
            className="h-auto w-full"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8"
            style={{ fontFamily: "var(--font-bounded)" }}
          >
            <h3 className="text-white text-xl  font-bold mb-2 uppercase tracking-wide drop-shadow-lg">
              {t("deposit1_title")}
            </h3>

            <p className="text-white text-sm font-light mb-1 drop-shadow-md">
              {t("deposit_bonus")}
            </p>

            <p className="text-white/90 text-xs font-extralight mb-4 drop-shadow-md">
              {t("deposit_freespins")}
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs  py-2 px-5 sm:py-2.5 sm:px-6 rounded transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl">
              {t("deposit_button")}
            </button>
          </div>
        </div>

        {/* Second Deposit Card */}
        <div className="relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50 rounded-lg overflow-hidden group">
          <Image
            src={Depo4}
            width={2000}
            height={2000}
            alt={t("deposit2_title")}
            className="h-auto w-full"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8"
            style={{ fontFamily: "var(--font-bounded)" }}
          >
            <h3 className="text-white text-xl  font-bold mb-2 uppercase tracking-wide drop-shadow-lg">
              {t("deposit2_title")}
            </h3>

            <p className="text-white text-sm font-light  mb-1 drop-shadow-md">
              {t("deposit_bonus2")}
            </p>

            <p className="text-white/90 text-xs font-extralight  mb-4 drop-shadow-md">
              {t("deposit_freespins2")}
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs  py-2 px-5 sm:py-2.5 sm:px-6 rounded transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl">
              {t("deposit_button2")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBonus;
