"use client";
import React, { useState, useRef, useEffect } from "react";

import { useTranslations } from "next-intl";
import VisaDepositForm from "@/components/profiledashboard/deposit-forms/visa-form";
import MasterCardDepositForm from "@/components/profiledashboard/deposit-forms/mastercard-form";
import FlexepinDepositForm from "@/components/profiledashboard/deposit-forms/flexpin-form";
import ApplepayDepositForm from "@/components/profiledashboard/deposit-forms/applepay-form";
import GooglepayDepositForm from "@/components/profiledashboard/deposit-forms/googlepay-form";
import BitcoinDepositForm from "@/components/profiledashboard/deposit-forms/bitcoin-form";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import EthDepositForm from "./deposit-forms/eth-form";
import DogeDepositForm from "./deposit-forms/doge-form";
import BnbDepositForm from "./deposit-forms/bnb-form";
import LTCDepositForm from "./deposit-forms/litecoin-form";
import BchDepositForm from "./deposit-forms/bch-form";
import USDCDepositForm from "./deposit-forms/usdc-form";
import XRPDepositForm from "./deposit-forms/xrp-form";
import TronDepositForm from "./deposit-forms/tron-form";
import USDTDepositForm from "./deposit-forms/usdt-form";

const AddFunds = () => {
  const [promoCode, setPromoCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("AddFunds");

  // Scroll to form when payment method is selected
  useEffect(() => {
    if (selectedPayment && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedPayment]);

  const paymentMethods = [
    {
      id: "mastercard",
    },
    {
      id: "visa",
    },
    {
      id: "gpay",
    },
    {
      id: "applepay",
    },
    { id: "bitcoin", name: "BTC" },
    { id: "ethereum", name: "ETH" },
    { id: "doge", name: "DogeCoin" },
    { id: "binance", name: "BNB" },
    { id: "litecoin" },
    {
      id: "bitcoin-cash",
      name: "BCH",
    },
    { id: "USDC", name: "USDC" },
    { id: "xrp" },
    { id: "tron", name: "Tron" },
    { id: "tether", name: "USDT" },
    { id: "flexepin" },
  ];

  const handleAddPromo = () => {
    console.log("Adding promo code:", promoCode);
  };

  const handlePaymentSelect = (id: string) => {
    setSelectedPayment(id);
  };

  // Function to render the appropriate form based on selected payment
  const renderSelectedForm = () => {
    switch (selectedPayment) {
      case "mastercard":
        return <MasterCardDepositForm />;
      case "visa":
        return <VisaDepositForm />;
      case "gpay":
        return <GooglepayDepositForm />;
      case "applepay":
        return <ApplepayDepositForm />;
      case "bitcoin":
        return <BitcoinDepositForm />;
      case "ethereum":
        return <EthDepositForm />;
      case "doge":
        return <DogeDepositForm />;
      case "binance":
        return <BnbDepositForm />;
      case "litecoin":
        return <LTCDepositForm />;
      case "bitcoin-cash":
        return <BchDepositForm />;
      case "USDC":
        return <USDCDepositForm />;
      case "xrp":
        return <XRPDepositForm />;
      case "tron":
        return <TronDepositForm />;
      case "tether":
        return <USDTDepositForm />;
      case "flexepin":
        return <FlexepinDepositForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        className="min-h-screen  flex items-center justify-center"
        style={{ fontFamily: "var(--font-bounded)" }}
      >
        <div className="w-full bg-[#081a26] rounded-2xl  lg:p-8 p-2 shadow-2xl">
          {/* Promo Code Section */}
          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-white text-center mb-4 text-lg">
              {t("promoHeader")}
            </h2>

            <div className="flex mb-2 lg:max-w-lg px-0 mx-auto">
              <input
                type="text"
                placeholder={t("promoPlaceholder")}
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-slate-800/50 border lg:w-full w-56 border-slate-700 rounded-l-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button
                onClick={handleAddPromo}
                className="bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 lg:text-base text-xs cursor-pointer text-white font-semibold lg:px-8 px-2 py-3 rounded-r-lg transition-colors"
              >
                {t("promoButton")}
              </button>
            </div>

            <p className="text-slate-400 text-sm text-center">
              {t("promoInfo")}{" "}
              <a
                href="#"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                {t("promoLink")}
              </a>
            </p>
          </div>

          {/* Payment Methods Section */}
          <div>
            <h2 className="text-white text-center mb-6 text-lg">
              {t("promoHeader")}
            </h2>

            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handlePaymentSelect(method.id)}
                  className={`relative bg-[#0B2231] backdrop-blur-sm rounded-xl p-4 border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 ${
                    selectedPayment === method.id
                      ? "border-red-500 shadow-lg shadow-red-500/30"
                      : "border-slate-700/50"
                  } $"ring-2 ring-red-500/30" : ""}`}
                >
                  {/* Logo/Icon Area */}
                  <div className="flex items-center justify-center h-12 mb-0">
                    {method.id === "mastercard" && (
                      <Image
                        className="h-auto w-auto"
                        width={500}
                        height={500}
                        src={IMAGES.mastercard}
                        alt=""
                      />
                    )}
                    {method.id === "visa" && (
                      <Image
                        className="h-28 w-full"
                        width={1000}
                        height={1000}
                        src={IMAGES.Visa3}
                        alt=""
                      />
                    )}
                    {method.id === "gpay" && (
                      <div className="flex items-center gap-1">
                        <Image
                          className="h-full w-full"
                          width={1000}
                          height={1000}
                          src={IMAGES.googlepay}
                          alt=""
                        />
                      </div>
                    )}
                    {method.id === "applepay" && (
                      <div className="flex items-center gap-1">
                        <Image
                          className="h-full w-full"
                          width={1000}
                          height={1000}
                          src={IMAGES.Applepay}
                          alt=""
                        />
                      </div>
                    )}

                    {method.id === "bitcoin" && (
                      <div className="text-orange-500 text-3xl font-bold">
                        ₿
                      </div>
                    )}
                    {method.id === "ethereum" && (
                      <div className="text-blue-400 text-3xl">
                        <Image
                          className="h-12 w-full"
                          width={1000}
                          height={1000}
                          src={IMAGES.Eth}
                          alt=""
                        />
                      </div>
                    )}
                    {method.id === "doge" && (
                      <div className="text-slate-300 text-3xl font-bold">
                        <Image
                          className="h-12 w-full"
                          width={1000}
                          height={1000}
                          src={IMAGES.Doge}
                          alt=""
                        />
                      </div>
                    )}
                    {method.id === "binance" && (
                      <div className="text-yellow-400 text-2xl font-bold">
                        <Image
                          className="h-12 w-auto"
                          width={500}
                          height={500}
                          src={IMAGES.BNB}
                          alt=""
                        />
                      </div>
                    )}
                    {method.id === "litecoin" && (
                      <div className="text-slate-300 text-3xl font-bold">
                        <div className="text-red-500 text-2xl">
                          <Image
                            className="h-12 w-32"
                            width={500}
                            height={500}
                            src={IMAGES.Litecoin}
                            alt=""
                          />
                        </div>
                      </div>
                    )}
                    {method.id === "bitcoin-cash" && (
                      <div className="">
                        <Image
                          className="h-16 w-auto pb-2"
                          width={500}
                          height={500}
                          src={IMAGES.BCH}
                          alt=""
                        />
                      </div>
                    )}

                    {method.id === "USDC" && (
                      <div className="text-yellow-400 text-2xl font-bold">
                        <Image
                          className="h-12 w-auto"
                          width={500}
                          height={500}
                          src={IMAGES.USDC}
                          alt=""
                        />
                      </div>
                    )}
                    {method.id === "xrp" && (
                      <div className="text-slate-300 text-3xl font-bold">
                        XRP
                      </div>
                    )}
                    {method.id === "tron" && (
                      <div className="text-red-500 text-2xl">
                        <Image
                          className="h-12 w-16"
                          width={500}
                          height={500}
                          src={IMAGES.Tron}
                          alt=""
                        />
                      </div>
                    )}

                    {method.id === "tether" && (
                      <div className="text-red-500 text-2xl">
                        <Image
                          className="h-12 w-16"
                          width={500}
                          height={500}
                          src={IMAGES.Tether}
                          alt=""
                        />
                      </div>
                    )}

                    {method.id === "flexepin" && (
                      <div className="text-white">
                        <span className="text-xl font-bold">flex</span>
                        <span className="text-xl font-bold text-pink-500">
                          e
                        </span>
                        <span className="text-xl font-bold">pin</span>
                      </div>
                    )}
                  </div>

                  {/* Method Name */}
                  <div className="text-white text-xs font-medium text-center mb-1">
                    {method.name}
                  </div>

                  {/* Selection Indicator */}
                  {selectedPayment === method.id && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render only the selected form */}
      {selectedPayment && (
        <div ref={formRef} className="mt-8">
          {renderSelectedForm()}
        </div>
      )}
    </div>
  );
};

export default AddFunds;
