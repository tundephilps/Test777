"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaCreditCard, FaPlus, FaTrash } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { PiWalletBold } from "react-icons/pi";
import { SiBitcoinsv } from "react-icons/si";
import { IoChevronForward } from "react-icons/io5";

const PaymentSelector = () => {
  const t = useTranslations("payment");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "card",
      name: "Credit Card",
      subtitle: "Visa, Mastercard",
      icon: <FaCreditCard className="text-red-500 text-xl" />,
    },
    {
      id: "ewallet",
      name: "E-Wallet",
      subtitle: "Skrill, Neteller",
      icon: <PiWalletBold className="text-gray-400 text-xl" />,
    },
    {
      id: "crypto",
      name: "Crypto",
      subtitle: "BTC, ETH, USDT",
      icon: <SiBitcoinsv className="text-gray-400 text-xl" />,
    },
  ]);

  const amounts = [10, 25, 50, 100, 250, 500];

  const handleDelete = (id: string) => {
    // Remove the payment method
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));

    // If the deleted method was selected, select the first remaining method
    if (selectedMethod === id && paymentMethods.length > 1) {
      const remainingMethods = paymentMethods.filter(
        (method) => method.id !== id
      );
      setSelectedMethod(remainingMethods[0]?.id || "");
    }
  };

  return (
    <div className="w-full mx-auto bg-[#081a26] p-6 sm:p-8 rounded-2xl shadow-2xl text-white">
      {/* Header */}
      <div className="inline-flex items-center justify-between w-full pb-8">
        <div className="flex items-center gap-3">
          <FaCreditCard className="text-red-500 text-2xl" />
          <div>
            <h2 className="text-xl font-semibold">{t("header")}</h2>
            <p className="text-gray-400 text-sm">
              {paymentMethods.length}
              {t("savedMethods")}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 border border-gray-400 py-2 px-6 rounded-md cursor-pointer text-xs hover:bg-white/5 transition">
          <FaPlus /> {t("addNew")}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {paymentMethods.map((m) => (
          <div
            key={m.id}
            onClick={() => setSelectedMethod(m.id)}
            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer
              ${
                selectedMethod === m.id
                  ? "border-red-600 bg-red-900/20"
                  : "border-[#132534] bg-[#0c1d2a]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              {m.icon}
              <div className="text-left">
                <p className="font-medium">{m.name}</p>
                <p className="text-gray-400 text-sm">{m.subtitle}</p>
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(m.id);
              }}
              className="p-2 rounded-lg hover:bg-red-600/20 transition-colors group"
              aria-label="Delete payment method"
            >
              <FaTrash className="text-red-500 group-hover:text-red-500 transition-colors" />
            </button>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      {/* <button className="w-full mt-8 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 text-white py-3 text-center rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition">
        Deposit ${selectedAmount ?? (customAmount || "0")}
        <IoChevronForward className="text-lg" />
      </button> */}
    </div>
  );
};

export default PaymentSelector;
