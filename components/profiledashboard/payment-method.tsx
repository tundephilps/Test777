import {
  FaCreditCard,
  FaWallet,
  FaBitcoin,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

export default function PaymentMethods() {
  return (
    <div className="mx-auto bg-[#081a26] text-white lg:p-6 p-2 rounded-2xl space-y-6 shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">Payment Methods</h2>
          <p className="text-sm text-gray-400">3 saved methods</p>
        </div>
        <button className="flex items-center gap-2 bg-[#081f2d] border border-gray-700 hover:border-gray-500 transition lg:px-4 px-2 py-2 rounded-xl lg:text-sm text-[10px] font-medium">
          <FaPlus size={16} /> Add New
        </button>
      </div>

      {/* Credit Card */}
      <div className="p-4 rounded-xl border border-red-600 bg-[#081f2d] flex justify-between items-center cursor-pointer hover:bg-gray-800 transition">
        <div className="flex items-center gap-3">
          <FaCreditCard size={22} className="text-red-500" />
          <div>
            <p className="font-semibold">Credit Card</p>
            <p className="text-xs text-gray-400">Visa, Mastercard</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* <span className="text-red-400 text-xs font-semibold">Default</span> */}
          <FaTrash className="text-gray-500 hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* E-Wallet */}
      <div className="p-4 rounded-xl  bg-[#081f2d] flex justify-between items-center cursor-pointer hover:bg-gray-800 transition">
        <div className="flex items-center gap-3">
          <FaWallet size={22} className="text-gray-400" />
          <div>
            <p className="font-semibold">E-Wallet</p>
            <p className="text-xs text-gray-400">Skrill, Neteller</p>
          </div>
        </div>
        <FaTrash className="text-gray-500 hover:text-gray-400 cursor-pointer" />
      </div>

      {/* Crypto */}
      <div className="p-4 rounded-xl  bg-[#081f2d] flex justify-between items-center cursor-pointer hover:bg-gray-800 transition">
        <div className="flex items-center gap-3">
          <FaBitcoin size={22} className="text-gray-400" />
          <div>
            <p className="font-semibold">Crypto</p>
            <p className="text-xs text-gray-400">BTC, ETH, USDT</p>
          </div>
        </div>
        <FaTrash className="text-gray-500 hover:text-gray-400 cursor-pointer" />
      </div>

      {/* Add New Button */}
      <button className="w-full py-4  rounded-xl bg-[#081f2d] hover:bg-gray-800 text-gray-400 flex justify-center items-center gap-2 text-sm transition">
        <FaPlus size={16} /> Add a new payment method
      </button>
    </div>
  );
}
