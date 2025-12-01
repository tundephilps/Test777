import Image from "next/image";
import React from "react";
import Car from "../../../public/Car.png";

import Mask6 from "../../../public/Mask6.png";
import Cash2 from "../../../public/Cash2.png";
import Cash from "../../../public/Cash.png";

import Dragon from "../../../public/Dragon.png";
import ProgressLevel from "../../../components/vip/progress-level";
import LevelCard from "../../../components/vip/levels";

const VipPage = () => {
  return (
    <div>
      <div className="relative   lg:flex hidden items-center">
        <Image
          src={Mask6}
          width={1000}
          height={300}
          alt="Hero"
          className="w-full"
        />

        <div className="absolute text-white items-center   left-7">
          <div className="flex flex-col flex-start justify-between h-full">
            <div className="">
              <p
                className="text-[2vh] font-semibold tracking-wider  opacity-90 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Canada777VIP
              </p>
              <p
                className="text-[5vh] font-semibold   opacity-90 max-w-xl"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                The Ultimate Global VIP Experience
              </p>
            </div>

            <div className="mb-2">
              <p className="text-base opacity-80 font-bounded font-bebas max-w-md">
                Become a Canada777 VIP and claim daily cashback everyday!
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProgressLevel />
      {/* <Image src={Mask7} width={1000} alt="" className="h-auto w-full" /> */}
      <div className="relative bg-[#CE58FF]  lg:flex hidden items-center rounded-xl mt-6 ">
        <div className=" text-white items-center inline-flex justify-center w-full  left-7">
          <div className="flex flex-col flex-start justify-between h-full w-full p-12">
            <div className="">
              <p
                className="text-[4vh] font-semibold tracking-wider  mb-4 opacity-90"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Exchange your VIP points
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm opacity-80 font-bounded font-bebas">
                For free spins or bonus cash
              </p>
              <button className="cursor-pointer mt-12 flex  justify-start items-start bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-[32px] py-[6px] rounded-md text-white font-medium transition w-fit">
                <span>Exchange Points</span>
              </button>
            </div>
          </div>
          <Image
            src={Dragon}
            width={300}
            height={300}
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative bg-[#5878FF]  lg:flex hidden items-center rounded-xl mt-6 ">
        <div className=" text-white items-center inline-flex justify-center w-full  left-7">
          <div className="flex flex-col flex-start justify-between h-full w-full p-12">
            <div className="">
              <p
                className="text-[4vh] font-semibold tracking-wider uppercase mb-4 opacity-90"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                WIN AN Audi A3 2026
              </p>
            </div>

            <div className="mb-1">
              <h1
                className="text-xl font-bold leading-tight font-bebas font-medium mb-8 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                YOU HAVE 0 TICKETS
              </h1>
            </div>

            <div className="mb-6">
              <p className="text-sm opacity-80 font-bounded font-bebas">
                1000 VIP Points = 1 Ticket
              </p>
              <p className="text-base mt-4 opacity-80 hover:underline font-bounded font-bebas">
                T&CS Apply
              </p>
            </div>
          </div>
          <Image
            src={Car}
            width={300}
            height={300}
            // src={Visa}

            alt=""
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative bg-[#58DCFF]  lg:flex hidden items-center rounded-xl mt-6 ">
        <div className=" text-white items-center inline-flex justify-center w-full  left-7">
          <div className="flex flex-col flex-start justify-between h-full w-full p-12">
            <div className="">
              <p
                className="text-[4vh] font-semibold tracking-wider  mb-4 opacity-90"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Daily Cash Back
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm opacity-80 font-bounded font-bebas">
                Up to 30%
              </p>
              <button className="cursor-pointer mt-12 flex  justify-start items-start bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-[32px] py-[6px] rounded-md text-white font-medium transition w-fit">
                <span>Claim Your Cashbank</span>
              </button>
            </div>
          </div>
          <Image
            src={Cash}
            width={300}
            height={300}
            alt=""
            className="h-full right-0 absolute bottom-0 w-2/3"
          />
          <Image
            src={Cash2}
            width={300}
            height={300}
            alt=""
            className="h-full w-64 absolute right-[16%]"
          />
        </div>
      </div>
      <LevelCard />
    </div>
  );
};

export default VipPage;
