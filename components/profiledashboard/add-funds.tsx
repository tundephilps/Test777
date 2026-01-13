"use client";
import React, { useState } from "react";

import { useTranslations } from "next-intl";
import VisaDepositForm from "./deposit-forms/visa-form";
import MasterCardDepositForm from "./deposit-forms/mastercard-form";
import FlexepinDepositForm from "./deposit-forms/flexpin-form";
import ApplepayDepositForm from "./deposit-forms/applepay-form";
import GooglepayDepositForm from "./deposit-forms/googlepay-form";
import BitcoinDepositForm from "./deposit-forms/bitcoin-form";

const AddFunds = () => {
  const [promoCode, setPromoCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const t = useTranslations("AddFunds");
  // Use the array provided in your prompt
  const paymentMethods = [
    {
      id: "mastercard",
      name: "Mastercard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
      min: "5 CAD",
    },
    {
      id: "visa",
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
      min: "5 CAD",
    },
    {
      id: "gpay",
      name: "G Pay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
      min: "5 CAD",
    },
    {
      id: "applepay",
      name: "Apple Pay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
      min: "5 CAD",
    },
    { id: "bitcoin", name: "BTC", logo: "₿", color: "#F7931A", min: "5 CAD" },
    { id: "ethereum", name: "ETH", logo: "◆", color: "#627EEA", min: "5 CAD" },
    { id: "doge", name: "DOGE", logo: "Ð", color: "#C2A633", min: "5 CAD" },
    { id: "binance", name: "BNB", logo: "B", color: "#F3BA2F", min: "0 CAD" },
    { id: "litecoin", name: "LTC", logo: "Ł", color: "#345D9D", min: "5 CAD" },
    {
      id: "bitcoin-cash",
      name: "BCH",
      logo: "₿",
      color: "#8DC351",
      min: "5 CAD",
    },
    { id: "usdcoin", name: "USDC", logo: "U", color: "#2775CA", min: "0 CAD" },
    { id: "xrp", name: "XRP", logo: "X", color: "#23292F", min: "" },
    { id: "tron", name: "TRX", logo: "▲", color: "#EF0027", min: "5 CAD" },
    { id: "tether", name: "USDT", logo: "₮", color: "#26A17B", min: "" },
    { id: "flexepin", name: "flexepin", logo: "F", min: "5 CAD" },
  ];
  const handleAddPromo = () => {
    console.log("Adding promo code:", promoCode);
  };

  const handlePaymentSelect = (id: string) => {
    setSelectedPayment(id);
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
                  <div className="flex items-center justify-center h-12 mb-3">
                    {method.id === "card" && <div className="text-4xl">💳</div>}
                    {method.id === "mastercard" && (
                      <div className="flex gap-1">
                        <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
                        <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-4"></div>
                      </div>
                    )}
                    {method.id === "visa" && (
                      <div className="text-3xl font-bold text-blue-500">
                        VISA
                      </div>
                    )}
                    {method.id === "gpay" && (
                      <div className="flex items-center gap-1">
                        <span className="text-blue-500 text-2xl font-bold">
                          G
                        </span>
                        <span className="text-white text-lg">Pay</span>
                      </div>
                    )}
                    {method.id === "applepay" && (
                      <div className="flex items-center gap-1">
                        <span className="text-2xl"></span>
                        <span className="text-white text-sm font-medium">
                          Pay
                        </span>
                      </div>
                    )}
                    {method.id === "visa-mastercard" && (
                      <div className="flex items-center gap-1">
                        <div className="text-lg font-bold text-blue-500">
                          VISA
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        </div>
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
                    {method.id === "bitcoin" && (
                      <div className="text-orange-500 text-3xl font-bold">
                        ₿
                      </div>
                    )}
                    {method.id === "ethereum" && (
                      <div className="text-blue-400 text-3xl">◆</div>
                    )}
                    {method.id === "litecoin" && (
                      <div className="text-slate-300 text-3xl font-bold">Ł</div>
                    )}
                    {method.id === "tron" && (
                      <div className="text-red-500 text-2xl">▲</div>
                    )}
                    {method.id === "binance" && (
                      <div className="text-yellow-400 text-2xl font-bold">
                        <div className="flex items-center">
                          <span className="bg-yellow-400 text-slate-900 px-2 py-1 rounded">
                            B
                          </span>
                        </div>
                      </div>
                    )}
                    {method.id === "xrp" && (
                      <div className="text-slate-300 text-3xl font-bold">
                        XRP
                      </div>
                    )}
                    {method.id === "usdcoin" && (
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          $
                        </div>
                      </div>
                    )}
                    {method.id === "tether" && (
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          ₮
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Method Name */}
                  <div className="text-white text-xs font-medium text-center mb-1">
                    {method.name}
                  </div>

                  {/* Min Amount */}
                  {method.min && (
                    <div className="text-slate-400 text-xs text-center">
                      Min: {method.min}
                    </div>
                  )}

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
      {/* <VisaDepositForm /> */}
      {/* <MasterCardDepositForm /> */}
      {/* <FlexepinDepositForm /> */}
      {/* <ApplepayDepositForm /> */}
      {/* <GooglepayDepositForm /> */}
      <BitcoinDepositForm />
    </div>
  );
};

export default AddFunds;
