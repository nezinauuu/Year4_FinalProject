"use client";

import { useEffect, useState } from "react";
import { TwoPieChart } from "@/components/charts/pieChart";
import { StackedChart } from "@/components/charts/stackedChart";
import axios from "axios";
import { nullable } from "zod";
import { SlArrowDown } from "react-icons/sl";
import { SignIn, SignUp, UserButton } from "@clerk/nextjs";
import { DogStats } from "@/components/charts/dogStats";
import { PiDogFill } from "react-icons/pi";
import Link from "next/link";
import { GiDogHouse } from "react-icons/gi";
import { Nav } from "@/components/navbars/nav";
import { SiRobotframework } from "react-icons/si";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineForum } from "react-icons/md";

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
      <div className=" min-h-screen justify-center flex-col bg-gray-900 ">
        <div className="flex py-4 px-4  bg-gray-900">
          <div className=" w-4/12">
            <Link href={"/"}>
              <h1 className="flex text-3xl font-bold bg-gray-900 text-red-400 hover:text-emerald-400 duration-700">
                WoofWoofWorld
                <GiDogHouse />
              </h1>
            </Link>
          </div>
          <div className="gap-2 flex-row flex items-center text-red-400 text-lg font-extrabold  w-4/12 justify-center">
            <Link href={"/openAi"}>
              <div className="hover:text-emerald-400 duration-700 flex gap-2">
                <p>WoofAi</p> <SiRobotframework />
              </div>
            </Link>
            <div className="text-gray-600">/</div>
            <Link href={"/statistics"}>
              <div className="hover:text-emerald-400 duration-700 gap-2 flex">
                <p>Statistics</p> <ImStatsBars />
              </div>
            </Link>
            <div className="text-gray-600">/</div>
            <Link href={"/forums"}>
              <div className="hover:text-emerald-400 duration-700 gap-2 flex">
                <p>Forums</p>
                <MdOutlineForum />
              </div>
            </Link>
          </div>
          <div className="w-4/12  flex justify-end">
            <UserButton />
          </div>
        </div>
        <div className="bg-white dark:bg-red-800 px-10 py-10 flex justify-center items-center">
          <div className="flex bg-gray-100 px-10 py-10 rounded-md w-full justify-center gap-40">
            <div className="bg-gray-900/90 rounded px-5 py-5">
              <div className="bg-white px-5 py-5 min-h-full">
                <div className="font-extrabold">Animals in shelters</div>
                <p>
                  Fortunately, according to the datasets gathered by numerous
                  researchers, the amount of Animals in shelters have thankfully
                  been slightly reduced over the years. However this should not
                  be taken for granted as there are still hundreds of thousands
                  of pets being surrendered.
                </p>
                <br></br>
                <p>
                  Looking at the graphs, it is great to see that there has
                  actually been some decline in intakes in Animal Shelters,
                  atleast in Long Beach California. However, it is nowhere near
                  a healthy number with 1542 Cats being brought in in 2023
                  alone. And this year, there have already been 152 cats, 252
                  dogs and 14 rabbits brought into the shelters of Long Beach
                  California. This is data from only one city in one state. The
                  numbers for the rest of the world must be in the millions.
                </p>
                <br></br>
                <p>
                  Whats more important to notice however, is that the majority
                  of animal intake reasons are No Time or Aggressive animal.
                  Reasons such as these could have been easily avoidable if
                  proper research was done before adopting.
                </p>
              </div>
            </div>
            <div className="px-10">
              <h2 className="text-base-400 py-2 flex px-10">
                Dog, Cat & Rabbit Shelter Statistics.
              </h2>
              <StackedChart />
              {/* <div className="py-5 max-w-lg">{reason || 0}</div> */}
              <div>
                <h2>
                  Last 50 Shelter Animal Intake Reasons in Long Beach California
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
          </div>
        </div>
        <div className="flex justify-center  text-blue-100 ">
          <DogStats />
        </div>
      </div>

      <div className=" flex-col px-5 py-5 bg-gray-900">
        <div className="flex flex-row justify-center gap-20">
          <div className="text-emerald-400 max-w-lg text-2xl px-5 py-5 border border-slate-400">
            Taking a look at the 2020-2023 canine intake count from The National
            Database, It is again good to see that although 3368639 dogs were
            brought into shelters, 29016929 (86.59%) found new homes and
            families.
          </div>

          <div className="text-red-400 max-w-lg text-2xl px-5 py-5 border border-slate-400">
            However, this leaves a staggering 12.66% of dogs that have not been
            so fortunate. They did not find a home and eventually passed away.
          </div>

          <div className="text-gray-400 max-w-lg text-2xl px-5 py-5 border border-slate-400">
            The remaining 0.75% are dogs who have escaped the shelters or their
            outcomes otherwise unknown.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
