"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    Dogs: 4000,
    Cats: 2400,
    Rabbits: 2400,
  },
  {
    name: "Page B",
    Dogs: 3000,
    Cats: 1398,
    Rabbits: 2210,
  },
  {
    name: "Page C",
    Dogs: 2000,
    Cats: 9800,
    Rabbits: 2290,
  },
  {
    name: "Page D",
    Dogs: 2780,
    Cats: 3908,
    Rabbits: 2000,
  },
  {
    name: "Page E",
    Dogs: 1890,
    Cats: 4800,
    Rabbits: 2181,
  },
  {
    name: "Page F",
    Dogs: 2390,
    Cats: 3800,
    Rabbits: 2500,
  },
  {
    name: "Page G",
    Dogs: 3490,
    Cats: 4300,
    Rabbits: 2100,
  },

  {
    name: "Page H",
    Dogs: 3490,
    Cats: 4300,
    Rabbits: 2100,
  },

  {
    name: "Page I",
    Dogs: 3490,
    Cats: 4300,
    Rabbits: 2100,
  },

  {
    name: "Page J",
    Dogs: 3490,
    Cats: 4300,
    Rabbits: 2100,
  },
];

export const StackedChart = () => {
  return (
    <div className="flex justify-center">
      <AreaChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Dogs"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Cats"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="Rabbits"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
};
