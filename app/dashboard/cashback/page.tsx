import React from "react";
import WhyChooseUs from "../../../components/homepage/why-choose";
import Sponsors from "../../../components/homepage/sponsors";
import Image from "next/image";
import CashbackTable from "../../../components/cashback/cashback-table";
import Mask12 from "../../../public/Mask12.png";

const CashbackPage = () => {
  return (
    <div>
      <div className="relative   lg:flex hidden items-center">
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Mask9.png"
          width={1000}
          height={500}
          alt="Hero"
          className="w-full h-[40vh]"
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
          </div>
        </div>
      </div>
      {/* Mobile Hero */}
      <div className="relative   flex lg:hidden items-center">
        <Image
          src={Mask12}
          width={1000}
          height={500}
          alt="Hero"
          className="w-full h-auto"
        />

        <div className="absolute top-6 text-white  items-center inset-0 w-full">
          <div className="flex flex-col text-center h-full">
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
                <p className="text-xs opacity-80 font-bounded font-bebas text-center mx-auto max-w-sm">
                  Enjoy effortless cashback rewards on all your favorite games.
                </p>
              </div>
            </div>
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
