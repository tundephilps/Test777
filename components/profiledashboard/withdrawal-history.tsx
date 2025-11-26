"use client";

import React from "react";

type WithdrawRecord = {
  id: number;
  status: string;
  amount: string;
  requested: string;
  updatedAt: string;
  adminMessage: string;
  method: string;
  details: string;
  action: string;
};

const data: WithdrawRecord[] = [
  {
    id: 1,
    status: "Cancelled",
    amount: "50.00 CAD",
    requested: "06-03-2024 · 06:53 PM",
    updatedAt: "06-03-2024 · 10:15 PM",
    adminMessage: "Thank you",
    method: "Bank",
    details: "Rasel, 12, Qweqwe, Bangladesh, Bosila West...",
    action: "cancelled",
  },
  {
    id: 2,
    status: "Cancelled",
    amount: "50.00 CAD",
    requested: "06-03-2024 · 06:53 PM",
    updatedAt: "06-03-2024 · 10:15 PM",
    adminMessage: "Thank you",
    method: "Bank",
    details: "Rasel, 12, Qweqwe, Bangladesh, Bosila West...",
    action: "cancelled",
  },
  {
    id: 3,
    status: "Cancelled",
    amount: "50.00 CAD",
    requested: "06-03-2024 · 06:53 PM",
    updatedAt: "06-03-2024 · 10:15 PM",
    adminMessage: "Thank you",
    method: "Bank",
    details: "Rasel, 12, Qweqwe, Bangladesh, Bosila West...",
    action: "cancelled",
  },
  {
    id: 4,
    status: "Cancelled",
    amount: "50.00 CAD",
    requested: "06-03-2024 · 06:53 PM",
    updatedAt: "06-03-2024 · 10:15 PM",
    adminMessage: "Thank you",
    method: "Bank",
    details: "Rasel, 12, Qweqwe, Bangladesh, Bosila West...",
    action: "cancelled",
  },
];

export default function WithdrawlHistory() {
  return (
    <div className="w-full bg-[#081a26] min-h-screen p-4 sm:p-6 text-white">
      <h1 className="text-center text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        WITHDRAWL HISTORY
      </h1>

      {/* Scroll container */}
      <div className="overflow-x-auto rounded-lg bg-[#0B2538] p-3 sm:p-4">
        <table className="w-full border-collapse text-xs sm:text-sm min-w-[900px]">
          {/* TABLE HEADER */}
          <thead>
            <tr className="text-gray-300 text-left border-b border-gray-700 bg-[#0B2538] sticky top-0">
              <th className="py-2 sm:py-3 px-2">No</th>
              <th className="py-2 sm:py-3 px-2">Status</th>
              <th className="py-2 sm:py-3 px-2">Amount</th>
              <th className="py-2 sm:py-3 px-2">Requested</th>
              <th className="py-2 sm:py-3 px-2">Updated At</th>
              <th className="py-2 sm:py-3 px-2">Message from Admin</th>
              <th className="py-2 sm:py-3 px-2">Method</th>
              <th className="py-2 sm:py-3 px-2">Details</th>
              <th className="py-2 sm:py-3 px-2">Action</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-800 hover:bg-[#102A3F] transition"
              >
                <td className="py-2 sm:py-3 px-2">{row.id}</td>
                <td className="py-2 sm:py-3 px-2">{row.status}</td>
                <td className="py-2 sm:py-3 px-2">{row.amount}</td>
                <td className="py-2 sm:py-3 px-2">{row.requested}</td>
                <td className="py-2 sm:py-3 px-2">{row.updatedAt}</td>
                <td className="py-2 sm:py-3 px-2">{row.adminMessage}</td>
                <td className="py-2 sm:py-3 px-2">{row.method}</td>
                <td className="py-2 sm:py-3 px-2 text-gray-300 truncate max-w-[180px]">
                  {row.details}
                </td>
                <td className="py-2 sm:py-3 px-2">
                  <span className="px-2 py-1 rounded-md text-[10px] sm:text-xs bg-red-700 text-white">
                    {row.action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
