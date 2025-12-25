import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeroMobile2 from "../../public/HeroMobile2.png";
import Visa from "../../public/Visa2.png";

const Hero = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <div className="relative   lg:flex hidden items-center">
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Hero.png"
          width={1000}
          height={300}
          alt="Hero"
          className="w-full "
        />

        <div className="absolute text-white items-center   left-7">
          <div className="flex flex-col flex-start justify-between h-full">
            <div className="">
              <p
                className="text-[4vh] font-semibold tracking-wider uppercase opacity-90 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("welcome")}
              </p>
            </div>

            <div className="mb-1">
              <h1
                className="text-[8vh] font-bold leading-tight font-bebas "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("percentage")}
              </h1>
            </div>

            <div className="mb-6">
              <p className="text-sm opacity-80 font-bounded font-bebas">
                {t("deposit")}
              </p>
            </div>
            <Link href="/login">
              <button className="cursor-pointer flex justify-start items-start bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-[32px] py-[6px] rounded-md text-white font-medium transition w-fit">
                <span> {t("button")}</span>
              </button>
            </Link>

            <Image
              src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Visa.png"
              width={300}
              height={300}
              // src={Visa}

              alt=""
              className="h-16 w- mt-8"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-full lg:hidden">
        <div
          className="relative w-full overflow-hidden"
          style={{ fontFamily: "var(--font-bounded)" }}
        >
          <Image
            src={HeroMobile2}
            alt=""
            width={1000}
            height={300}
            className="w-full h-auto"
            sizes="100vw"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center  top-4 text-center ">
            {/* Welcome Pack Text */}
            <p className="text-white text-xl  font-semibold tracking-wider mb-2">
              {t("welcome")}
            </p>

            {/* Percentage */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
              {t("percentage")}
            </h2>

            {/* Free Spins Text */}
            <p className="text-white text-base mb-4">{t("deposit")}</p>

            {/* Join Now Button */}
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
              {t("button")}
            </button>

            <Image
              src={Visa}
              alt=""
              width={1000}
              height={300}
              className="w-full h-auto mt-6 mx-4 px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
