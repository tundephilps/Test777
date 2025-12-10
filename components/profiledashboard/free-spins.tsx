import React from "react";
import { FaDice, FaPlay, FaClock } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import Spin from "../../public/Spin.png";
import Image from "next/image";

export default function FreeSpins() {
  const spins = [
    {
      id: 1,
      name: "Lucky Slots",
      campaign: "$0.20/spin",
      used: 7,
      remaining: 11,
      status: "active",
      daysLeft: 2,
    },
    {
      id: 2,
      name: "Mega Fortune",
      campaign: "$0.20/spin",
      used: 10,
      remaining: 11,
      status: "completed",
      daysLeft: 2,
    },
    {
      id: 3,
      name: "Lucky Slots",
      campaign: "$0.20/spin",
      used: 7,
      remaining: 11,
      status: "active",
      daysLeft: 2,
    },
  ];

  const totalSpins = 53;
  const usedSpins = 17;
  const remainingSpins = 36;

  return (
    <div className="min-h-screen bg-[#0a1f2d] mt-6 rounded-md lg:p-6 p-2">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10">
              <Image
                src={Spin}
                alt=""
                width={1000}
                height={1000}
                className="text-white text-xl"
              />
            </div>
            <h1 className="text-white text-2xl font-bold">Free Spins</h1>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
            36 Avaliable
          </button>
        </div>

        {/* Header Summary */}
        <div className="bg-[#ffffff]/10 backdrop-blur-3xl rounded-2xl max-w-md mx-auto mb-8 lg:p-6 p-2 flex justify-around text-center shadow-lg   ">
          <div>
            <p className="text-4xl font-bold text-white">53</p>
            <p className="text-sm text-gray-400">Total</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-400">17</p>
            <p className="text-sm text-gray-400">Used</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-700">36</p>
            <p className="text-sm text-gray-400">Remaining</p>
          </div>
        </div>

        {/* Spins List */}
        <div className="space-y-4">
          {spins.map((spin, index) => (
            <div
              key={spin.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:p-6 p-2 border border-slate-700/50 hover:border-slate-600/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 ${
                      index === 1 ? "bg-blue-600" : "bg-red-600"
                    } rounded-lg flex items-center justify-center`}
                  >
                    <GiTwoCoins className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {spin.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{spin.campaign}</p>
                  </div>
                </div>
                {spin.status === "active" ? (
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                    <FaPlay className="text-xs" />
                    Play
                  </button>
                ) : (
                  <span className="px-4 py-2 bg-slate-700 text-slate-400 rounded-lg text-sm font-medium">
                    Completed
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-slate-300 text-sm">
                  Used: <span className="font-semibold">{spin.used}</span>{" "}
                  Remaining:{" "}
                  <span className="font-semibold">{spin.remaining}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <FaClock className="text-xs" />
                  <span>{spin.daysLeft} days</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full ${
                    index === 1 ? "bg-blue-500" : "bg-red-500"
                  } rounded-full transition-all`}
                  style={{
                    width: `${
                      (spin.used / (spin.used + spin.remaining)) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
