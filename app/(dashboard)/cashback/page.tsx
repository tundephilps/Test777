import React from "react";
import WhyChooseUs from "../../../components/homepage/why-choose";
import Sponsors from "../../../components/homepage/sponsors";
import Image from "next/image";
import Mask9 from "../../../public/Mask9.png";
import CashbackTable from "../../../components/cashback/cashback-table";

const CashbackPage = () => {
  return (
    <div>
      <div className="relative   lg:flex hidden items-center">
        <Image
          src={Mask9}
          width={1000}
          height={300}
          alt="Hero"
          className="w-full"
        />

        <div className="absolute text-white items-center   left-7">
          <div className="flex flex-col flex-start justify-between h-full">
            <div className="">
              <p
                className="text-[3vh] font-semibold tracking-wider  opacity-90 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Canada777VIP
              </p>
              <p
                className="text-[7vh] font-semibold   opacity-90 max-w-xl"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Your Cashback, Everyday
              </p>
              <div className="mb-2">
                <p className="text-base opacity-80 font-bounded font-bebas max-w-md">
                  Enjoy effortless cashback rewards on all your favorite games.
                </p>
              </div>
            </div>

            {/* <div className="mb-2">
              <p className="text-base opacity-80 font-bounded font-bebas max-w-md">
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
                          Enjoy effortless cashback rewards on all your favorite
                          games.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <CashbackTable />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default CashbackPage;
