"use client";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


interface DataItem {
  name: string;
  value: number;
}

export const TwoPieChart = ({ data }: { data: DataItem[] }) => {
  const COLORS = [
    "#9bb9eb",
    "#8c1f0f",
    "#71a365",
    "#6db05d",
    "#a9ab67",
    "#68c953",
    "#eb4034",
  ]; // Define your colors here
  return (
    <PieChart
      className="bg-black/40 px-3 py-3 rounded-md"
      width={310}
      height={310}
    >
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {/* <Pie
          dataKey="value"
          data={data02}
          cx="50%" // Center horizontally
          cy="50%" // Center vertically
          innerRadius={60} // No inner radius, so it doesn't overlap with the first pie
          outerRadius={90} // Same outer radius as the first pie
          fill="#82ca9d"
        /> */}

      <Tooltip />
    </PieChart>
  );
};
