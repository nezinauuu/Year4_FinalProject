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
    name: "2017",
    Dogs: 2000,
    Cats: 9800,
    Rabbits: 2290,
  },
  {
    name: "2018",
    Dogs: 2780,
    Cats: 3908,
    Rabbits: 2000,
  },
  {
    name: "2019",
    Dogs: 1890,
    Cats: 4800,
    Rabbits: 2181,
  },
  {
    name: "2020",
    Dogs: 2390,
    Cats: 3800,
    Rabbits: 2500,
  },
  {
    name: "2021",
    Dogs: 3490,
    Cats: 4300,
    Rabbits: 2100,
  },

  {
    name: "2022",
    Dogs: 3600,
    Cats: 4400,
    Rabbits: 2300,
  },

  {
    name: "2023",
    Dogs: 3990,
    Cats: 4600,
    Rabbits: 2400,
  },

  {
    name: "2024",
    Dogs: 4090,
    Cats: 4700,
    Rabbits: 2300,
  },
];

export const StackedChart = () => {
  return (
    <AreaChart
      className="bg-neutral px-3 py-3 rounded-md"
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
  );
};
