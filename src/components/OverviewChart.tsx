"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

// Verileri sabitledik (Hydration hatasını önlemek için)
const data = [
  { name: "Jan", total: 4500 },
  { name: "Feb", total: 3200 },
  { name: "Mar", total: 2800 },
  { name: "Apr", total: 5100 },
  { name: "May", total: 4200 },
  { name: "Jun", total: 5800 },
  { name: "Jul", total: 4900 },
  { name: "Aug", total: 6100 },
  { name: "Sep", total: 3900 },
  { name: "Oct", total: 5400 },
  { name: "Nov", total: 4700 },
  { name: "Dec", total: 6300 },
];

export default function OverviewChart() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Overview</h3>
        <p className="text-sm text-gray-500">Monthly revenue overview</p>
      </div>
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              cursor={{ fill: 'transparent' }}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}