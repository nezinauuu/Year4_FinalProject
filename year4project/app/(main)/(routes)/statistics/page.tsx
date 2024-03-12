"use client";

import { useEffect, useState } from "react";
import { TwoPieChart } from "@/components/charts/pieChart";
import { StackedChart } from "@/components/charts/stackedChart";
import axios from "axios";
import { nullable } from "zod";

interface AnimalDataEntry {
  animal_name: string;
  intake_date: string; // Adjust the type as necessary
  intake_type: string;
  reason: string;
}

const Statistics = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [animalData, setAnimalData] = useState<AnimalDataEntry[]>([]);
  const [outcomeData, setOutcomeData] = useState([
    { name: "TRANSFER", value: 0 },
    { name: "EUTHANASIA", value: 0 },
    { name: "RESCUE", value: 0 },
    { name: "RETURN TO OWNER", value: 0 },
    { name: "RETURN TO WILD HABITAT", value: 0 },
    { name: "ADOPTION", value: 0 },
    { name: "DIED", value: 0 },
  ]);

  const [reason, setReason] = useState(""); // Add this line to define a new state variable for reason

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
        "https://data.longbeach.gov/api/explore/v2.1/catalog/datasets/animal-shelter-intakes-and-outcomes/records?select=animal_name%2C%20intake_date%2C%20intake_cond%2C%20intake_type%2C%20outcome_type%2Cdob%2C%20outcome_is_dead%2C%20reason&where=intake_type%20!%3D%20%22WILDLIFE%22&limit=50&exclude=intake_type%3ASTRAY"
      );

      for (let k = 0; k < response.data["results"].length; k++) {
        // console.log(response.data["results"][k].outcome_is_dead);

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

      const animalEntries = response.data.results.filter(
        (entry: { reason: null }) => entry.reason !== null
      );

      setAnimalData(animalEntries);

      setOutcomeData([
        { name: "TRANSFER", value: transfer },
        { name: "EUTHANASIA", value: euthanasia },
        { name: "RESCUE", value: rescue },
        { name: "RETURN TO OWNER", value: returnToOwner },
        { name: "RETURN TO WILD HABITAT", value: returnToWildHabitat },
        { name: "ADOPTION", value: adoption },
        { name: "DIED", value: died },
      ]);
    }

    fetchData();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      <title>Animal Statistics</title>
      <div className="flex min-h-screen justify-center flex-col bg-base-100">
        <div className="px-5">
          <h1 className="text-8xl font-mono font-semibold text-gray-600">
            Animal Statistics
          </h1>
        </div>
        <div className="bg-white dark:bg-red-800 px-10 py-10 flex justify-center items-center">
          <div className="flex bg-gray-100 px-10 py-10 rounded-md w-full justify-center gap-40">
            <div className="px-10">
              <h2 className="text-base-400 py-2 flex px-10">
                Dog, Cat & Rabbit Shelter Statistics.
              </h2>
              <StackedChart />

              {/* <div className="py-5 max-w-lg">{reason || 0}</div> */}
              <div>
                <h2>
                  Last 50 Shelter Animal Outcomes in Long Beach California
                </h2>

                <table className="flex flex-col gap-1 px- w-full">
                  <thead>
                    <tr className="grid grid-cols-4">
                      <th className="p-2 bg-cyan-700 text-gray-200">
                        Animal Name
                      </th>
                      <th className="p-2 bg-cyan-800 text-gray-100">
                        Intake Date
                      </th>
                      <th className="p-2 bg-cyan-700 text-gray-200">
                        Intake Type
                      </th>
                      <th className="p-2 bg-cyan-800 text-gray-100">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="table-container overflow-y-auto max-h-96">
                    {animalData.map((entry, index) => (
                      <tr key={index} className="grid grid-cols-4">
                        <td className="p-2 bg-blue-100">{entry.animal_name}</td>
                        <td className="p-2 bg-blue-200">{entry.intake_date}</td>
                        <td className="p-2 bg-blue-100">{entry.intake_type}</td>
                        <td className="p-2 bg-blue-200">{entry.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="px-10 bg-base-200 max-w-sm rounded-md ">
              <h2 className="text-error py-2 flex items-center ">
                Last 50 Shelter Animal Outcomes in Long Beach California
              </h2>

              <TwoPieChart data={outcomeData} />
              <div>
                <div className="py-5 text-gray-300">
                  <h1>
                    Transfer:{" "}
                    {outcomeData.find((item) => item.name === "TRANSFER")
                      ?.value || 0}
                  </h1>
                  <h1>
                    Euthanasia:{" "}
                    {outcomeData.find((item) => item.name === "EUTHANASIA")
                      ?.value || 0}
                  </h1>
                  <h1>
                    Rescue:{" "}
                    {outcomeData.find((item) => item.name === "RESCUE")
                      ?.value || 0}
                  </h1>
                  <h1>
                    Return to owner:{" "}
                    {outcomeData.find((item) => item.name === "RETURN TO OWNER")
                      ?.value || 0}
                  </h1>
                  <h1>
                    Return to wild habitat:{" "}
                    {outcomeData.find(
                      (item) => item.name === "RETURN TO WILD HABITAT"
                    )?.value || 0}
                  </h1>
                  <h1>
                    Adoption:{" "}
                    {outcomeData.find((item) => item.name === "ADOPTION")
                      ?.value || 0}
                  </h1>
                  <h1>
                    Died:{" "}
                    {outcomeData.find((item) => item.name === "DIED")?.value ||
                      0}
                  </h1>
                </div>
              </div>
            </div>

            <div className="px-10 bg-base-200 max-w-sm rounded-md">
              <h2 className="text-error py-2 flex items-center">
                Last 50 Shelter Animal Outcomes in Long Beach California
              </h2>
              <TwoPieChart data={outcomeData} />

              <div className="text-gray-300">help</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
