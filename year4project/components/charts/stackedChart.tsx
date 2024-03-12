import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { csv } from "d3-fetch"; // Import the CSV parsing function from d3-fetch
import { DSVRowArray } from "d3-dsv";

interface AnimalData {
  "Intake Date": string;
  "Animal Type": string;
}

interface ChartData {
  name: string;
  DOG: number;
  CAT: number;
  RABBIT: number;
}

type CounterType = {
  DOG: number;
  CAT: number;
  RABBIT: number;
  [key: string]: number;
};

export const StackedChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Fetch and parse the CSV data
    csv("/animals.csv").then((data: DSVRowArray<string>) => {
      const animalData: AnimalData[] = data.map((row) => ({
        "Intake Date": row["Intake Date"],
        "Animal Type": row["Animal Type"],
      }));

      // Log the animalData to check if it's parsed correctly
      console.log("Animal Data:", animalData);

      // Initialize counters for each year
      const counters: { [year: string]: CounterType } = {};
      for (let year = 2017; year <= 2024; year++) {
        counters[year.toString()] = { DOG: 0, CAT: 0, RABBIT: 0 };
      }

      animalData.forEach((item) => {
        const intakeYear = new Date(item["Intake Date"]).getFullYear();
        if (intakeYear >= 2017 && intakeYear <= 2024) {
          const animalType = item["Animal Type"];
          // Check if the animal type is one of "DOG", "CAT", or "RABBIT"
          if (["DOG", "CAT", "RABBIT"].includes(animalType)) {
            counters[intakeYear.toString()][animalType] += 1;
          }
        }
      });

      // Log the counters to check if the counting logic is correct
      console.log("Counters:", counters);

      // Convert counters object to an array of objects for the chart
      const chartDataArray: ChartData[] = [];
      for (const year in counters) {
        chartDataArray.push({
          name: year,
          ...counters[year],
        });
      }

      // Log the chartDataArray to check if it's formed correctly
      console.log("Chart Data Array:", chartDataArray);

      setChartData(chartDataArray);
    });
  }, []);

  return (
    <AreaChart
      className="bg-blue-200/40 px-3 py-3 rounded-md border-2 border-gray-300"
      width={1000}
      height={400}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 3000]} />
      <Tooltip />

      <Area
        animationDuration={4000}
        type="monotone"
        dataKey="CAT"
        stackId="2"
        stroke="#82ca9d"
        fill="#089BCC"
        fillOpacity={"50%"}
        name="Cats"
      />
      <Area
        animationDuration={2000}
        type="monotone"
        dataKey="DOG"
        stackId="3"
        stroke="#8884d8"
        fill="#9bb9eb"
        fillOpacity={"50%"}
        name="Dogs"
      />
      <Area
        animationDuration={5500}
        type="monotone"
        dataKey="RABBIT"
        stackId="1"
        stroke="#ffc658"
        fill="#FF0000"
        name="Rabbits"
        fillOpacity={"50%"}
      />
    </AreaChart>
  );
};
