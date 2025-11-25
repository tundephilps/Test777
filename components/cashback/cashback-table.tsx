import React from "react";

type StatusType = "Claimed" | "Pending" | "Canceled";

interface CashbackRow {
  id: number;
  totalDeposit: string;
  cashbackAmount: string;
  status: StatusType;
  expireOn: string;
}

const statusStyles: Record<StatusType, string> = {
  Claimed: "bg-green-600/20 text-green-400 border border-green-500/40",
  Pending: "bg-yellow-600/20 text-yellow-400 border border-yellow-500/40",
  Canceled: "bg-red-600/20 text-red-400 border border-red-500/40",
};

const CashbackTable = () => {
  const data: CashbackRow[] = [
    {
      id: 1,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Claimed",
      expireOn: "09-09-2024 11:59:59 PM",
    },
    {
      id: 2,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Pending",
      expireOn: "09-09-2024 11:59:59 PM",
    },
    {
      id: 3,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Claimed",
      expireOn: "09-09-2024 11:59:59 PM",
    },
    {
      id: 4,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Pending",
      expireOn: "09-09-2024 11:59:59 PM",
    },
    {
      id: 5,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Claimed",
      expireOn: "09-09-2024 11:59:59 PM",
    },
    {
      id: 6,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Claimed",
      expireOn: "09-09-2024 11:59:59 PM",
    },
    {
      id: 7,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Canceled",
      expireOn: "09-09-2024 11:59:59 PM",
    },
  ];

  return (
    <div className="w-full bg-[#081a26] mt-8 rounded-xl p-4">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table
          className="w-full text-left text-white"
          style={{ fontFamily: "var(--font-bounded)" }}
        >
          <thead className="bg-[#0a1f2d] rounded-3xl">
            <tr className="text-sm text-[#58658e]">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Total Deposit</th>
              <th className="py-3 px-4">Cashback Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Expire on</th>
            </tr>
          </thead>

          <tbody className="space-y-2 gap-2">
            {data.map((row) => (
              <tr
                key={row.id}
                className="gap-y-2 text-sm bg-[#0a1f2d] rounded-3xl"
              >
                <td className="py-3 px-4">{row.id}</td>
                <td className="py-3 px-4">{row.totalDeposit}</td>
                <td className="py-3 px-4">{row.cashbackAmount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${
                      statusStyles[row.status]
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-4">{row.expireOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div
        className="md:hidden space-y-4"
        style={{ fontFamily: "var(--font-bounded)" }}
      >
        {data.map((row) => (
          <div
            key={row.id}
            className="bg-[#0a1f2d] rounded-xl p-4 space-y-3 text-white"
          >
            {/* Row Number Badge */}
            <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
              <span className="text-[#58658e] text-xs font-semibold">
                TRANSACTION #{row.id}
              </span>
              <span
                className={`px-3 py-1 rounded-md text-xs font-semibold ${
                  statusStyles[row.status]
                }`}
              >
                {row.status}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#58658e]">Total Deposit:</span>
                <span className="font-semibold">{row.totalDeposit}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#58658e]">Cashback:</span>
                <span className="font-semibold">{row.cashbackAmount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#58658e]">Expires:</span>
                <span className="font-semibold text-xs">{row.expireOn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashbackTable;
