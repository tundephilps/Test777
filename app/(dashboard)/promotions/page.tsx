import Image from "next/image";
import React from "react";
import Mask5 from "../../../public/Mask5.png";

import FirstDeposit from "../../../public/FirstDeposit.png";
import FirstDeposit2 from "../../../public/FirstDeposit2.png";
import FirstDeposit3 from "../../../public/FirstDeposit3.png";

import FirstDeposit4 from "../../../public/FirstDeposit4.png";
import FirstDeposit5 from "../../../public/FirstDeposit5.png";

const PromotionPage = () => {
  return (
    <div>
      <div>
        <div className="relative   lg:flex hidden items-center">
          <Image
            src={Mask5}
            width={1000}
            height={300}
            alt="Hero"
            className="w-full"
          />

          <div className="absolute text-white items-center   left-7">
            <div className="flex flex-col flex-start justify-between h-full">
              <div className="">
                <p
                  className="text-[8vh] font-semibold tracking-wider  opacity-90 "
                  style={{ fontFamily: "var(--font-bounded)" }}
                >
                  Promotions
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xl opacity-80 font-bounded font-bebas max-w-md">
                  Boost bets with crypto perks—bonuses, cashback & limited-time
                  offers. Claim rewards for thrilling play!"
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full max-w-full lg:hidden"></div> */}
      </div>
      <Image alt="" src={FirstDeposit} className="w-full h-auto mt-6" />

      <Image alt="" src={FirstDeposit2} className="w-full h-auto mt-6" />
      <Image alt="" src={FirstDeposit3} className="w-full h-auto mt-6" />

      <Image alt="" src={FirstDeposit4} className="w-full h-auto mt-6" />
      <Image alt="" src={FirstDeposit5} className="w-full h-auto mt-6" />
    </div>
  );
};

export default PromotionPage;
