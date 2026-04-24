"use client";

import { harvests } from "@/lib/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  // Count statuses
  const stats = [
    {
      name: "Approved",
      value: harvests.filter(h => h.approval_status === "APPROVED").length,
    },
    {
      name: "Pending",
      value: harvests.filter(h => h.approval_status === "PENDING").length,
    },
    {
      name: "Flagged",
      value: harvests.filter(h => h.approval_status === "FLAGGED").length,
    },
  ];

  return (
    <main className="min-h-screen bg-white p-8 text-black">
      <h1 className="text-3xl font-bold text-green-800">
        SmartFarmChain Dashboard
      </h1>

      <p className="mt-2 text-gray-600">
        Blockchain-enabled farm monitoring with AI risk detection
      </p>

      {/* Stats Cards */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="rounded-lg border p-4 text-center">
            <h2 className="text-lg font-bold">{s.name}</h2>
            <p className="text-2xl">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-10 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}