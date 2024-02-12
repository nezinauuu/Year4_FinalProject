"use client";

import { useEffect, useState } from "react";
import { TwoPieChart } from "@/components/charts/pieChart";
import { StackedChart } from "@/components/charts/stackedChart";
import axios from "axios";

const Statistics = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [data02, setData02] = useState([
    { name: "TRANSFER", value: 0 },
    { name: "EUTHANASIA", value: 0 },
    { name: "RESCUE", value: 0 },
    { name: "RETURN TO OWNER", value: 0 },
    { name: "RETURN TO WILD HABITAT", value: 0 },
    { name: "ADOPTION", value: 0 },
    { name: "DIED", value: 0 },
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    async function fetchData() {
      let transfer = 0;
      let euthanasia = 0;
      let rescue = 0;
      let returnToOwner = 0;
      let returnToWildHabitat = 0;
      let adoption = 0;
      let died = 0;

      const response = await axios.get(
        "https://data.longbeach.gov/api/explore/v2.1/catalog/datasets/animal-shelter-intakes-and-outcomes/records?select=animal_id%2C%20animal_name%2C%20intake_date%2C%20intake_cond%2C%20intake_type%2C%20outcome_type%2Cdob%2C%20outcome_is_dead&limit=50"
      );

      for (let k = 0; k < response.data["results"].length; k++) {
        console.log(response.data["results"][k].outcome_is_dead);

        switch (response.data["results"][k].outcome_type) {
          case "TRANSFER":
            transfer++;
            break;
          case "EUTHANASIA":
            euthanasia++;
            break;
          case "RESCUE":
            rescue++;
            break;
          case "RETURN TO OWNER":
            returnToOwner++;
            break;
          case "RETURN TO WILD HABITAT":
            returnToWildHabitat++;
            break;
          case "ADOPTION":
            adoption++;
            break;
          case "DIED":
            died++;
            break;
        }
      }

      setData02([
        { name: "TRANSFER", value: transfer },
        { name: "EUTHANASIA", value: euthanasia },
        { name: "RESCUE", value: rescue },
        { name: "RETURN TO OWNER", value: returnToOwner },
        { name: "RETURN TO WILD HABITAT", value: returnToWildHabitat },
        { name: "ADOPTION", value: adoption },
        { name: "DIED", value: died },
      ]);

      console.log("transfer = " + transfer);
      console.log("euthanasia = " + euthanasia);
    }

    fetchData();
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

        <div className="flex">
          <div className="px-10">
            <h2 className="text-error py-2 flex px-10">
              Dog, Cat & Rabbit Shelter Statistics.
            </h2>
            <StackedChart />
          </div>
          <div className="px-10">
            <h2 className="text-error py-2 flex px-10">
              Last 50 Shelter Animal Outcomes in Long Beach California
            </h2>
            <TwoPieChart data={data02} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
