"use client";
import { StackedChart } from "@/components/charts/stackedChart";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main>
      <title>Animal Statistics</title>
      <div
        data-theme="dark"
        className="flex justify-center min-h-screen flex-col"
      >
        <div className="flex justify-center fixed top-10 left-10">
          <h1 className="text-8xl font-mono font-semibold">
            Animal Statistics
          </h1>
        </div>

        <div className="px-10">
          <h2 className="text-error py-2 flex px-10">
            Dog, Cat & Rabbit Shelter Statistics.
          </h2>
          <StackedChart />
        </div>
      </div>
    </main>
  );
};

export default Statistics;
