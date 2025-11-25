import Image from "next/image";

const PromotionPage = () => {
  return (
    <div>
      <div>
        <div className="relative   lg:flex hidden items-center">
          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Mask5.png"
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
      <Image
        alt=""
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/FirstDeposit.png"
        width={1000}
        height={300}
        className="w-full h-auto mt-6"
      />

      <Image
        alt=""
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/FirstDeposit2.png"
        width={1000}
        height={300}
        className="w-full h-auto mt-6"
      />
      <Image
        alt=""
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/FirstDeposit3.png"
        width={1000}
        height={300}
        className="w-full h-auto mt-6"
      />
      <Image
        alt=""
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/FirstDeposit4.png"
        width={1000}
        height={300}
        className="w-full h-auto mt-6"
      />
      <Image
        alt=""
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/FirstDeposit5.png"
        width={1000}
        height={300}
        className="w-full h-auto mt-6"
      />
    </div>
  );
};

export default PromotionPage;
