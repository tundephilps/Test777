"use server";
import Image from "next/image";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <>
      <div className="relative   lg:flex hidden items-center">
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Mask2.png"
          width={1000}
          height={300}
          alt=""
          className=" w-full h-auto"
        />

        <div className="absolute text-white items-center   left-7">
          <div className="">
            <div className="mb-1">
              <h2
                className="text-[5vh] font-semibold tracking-wider  opacity-90 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Try your luck <br /> Wining Chance
              </h2>
            </div>

            <div className="mb-6">
              <p
                className="text-sm opacity-80"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Every 12 Hours winning chance
              </p>
            </div>

            {/* <CountdownTimer /> */}
            <Countdown targetTime="2025-12-30T23:59:59" />

            <button className="flex cursor-pointer mt-4 items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-24 py-2.5 rounded-md text-white font-medium transition">
              <span>Bet Now</span>
            </button>
          </div>
        </div>
        <div className="absolute right-4">
          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Jackpot.png"
            width={1000}
            height={300}
            alt=""
            className="w-full"
          />
          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Number.png"
            width={1000}
            height={300}
            alt=""
            className="absolute bottom-[15%] h-auto w-auto right-[28%]"
          />
        </div>
      </div>
      {/* Mobile View */}
      <div className="relative   flex lg:hidden items-center w-full">
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Mask4.png"
          width={1000}
          height={1000}
          alt=""
          className="h-auto min-h-[80vh]"
        />
        <div className="p-6 gap-2  space-y-2 absolute items-center w-full justify-center flex flex-col text-white">
          {/* Text */}
          <div className="mb-1">
            <h2
              className="text-[5vh] font-semibold  text-center  opacity-90 "
              style={{ fontFamily: "var(--font-bounded)" }}
            >
              Try your luck Wining Chance
            </h2>
          </div>

          <div className="mb-6">
            <p
              className="text-sm opacity-80"
              style={{ fontFamily: "var(--font-bounded)" }}
            >
              Every 12 Hours winning chance
            </p>
          </div>
          <Countdown targetTime="2025-12-30T23:59:59" />
          <button className="flex cursor-pointer mt-4 items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-24 py-2.5 rounded-md text-white font-medium transition">
            <span>Bet Now</span>
          </button>
          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Jackpot2.png"
            width={3000}
            height={300}
            className="mx-auto  h-auto w-auto"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
