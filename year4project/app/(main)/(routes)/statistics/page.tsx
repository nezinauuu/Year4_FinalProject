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

import { GiSpanner } from "react-icons/gi";

interface AnimalDataEntry {
  animal_name: string;
  intake_date: string; // Adjust the type as necessary
  intake_type: string;
  reason: string;
}

const Statistics = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(true);
      try {
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

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
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
        <Nav />

        {isLoading ? (
          <div className="flex justify-center items-center ">
            <span className="loading loading-spinner text-red-400 loading-lg"></span>
            <span className="ml-2 text-gray-500 text-xl">Loading...</span>
          </div>
        ) : (
          <>
            {
              <div className="bg-white dark:bg-red-800  py-10 flex justify-center items-center flex-wrap border-4 lg:border-blue-300">
                <div className="flex bg-gradient-to-br gap-1 from-gray-200 to-gray-100 lg:px-10 py-10 rounded-md lg:flex-row flex-col justify-center">
                  <div className="bg-gray-900/90 rounded px-5 py-5 lg:w-[40vh] border-4 border-gray-600">
                    <div className="bg-white h-full px-5 py-5 ">
                      <div className="font-extrabold">Animals in shelters</div>
                      <p>
                        Fortunately, according to the datasets gathered by
                        numerous researchers, the amount of Animals in shelters
                        have thankfully been slightly reduced over the years.
                        However this should not be taken for granted as there
                        are still hundreds of thousands of pets being
                        surrendered.
                      </p>
                      <br></br>
                      <p>
                        Looking at the graphs, it is great to see that there has
                        actually been some decline in intakes in Animal
                        Shelters, atleast in Long Beach California. However, it
                        is nowhere near a healthy number with 1542 Cats being
                        brought in in 2023 alone. And this year, there have
                        already been 152 cats, 252 dogs and 14 rabbits brought
                        into the shelters of Long Beach California. This is data
                        from only one city in one state. The numbers for the
                        rest of the world must be in the millions.
                      </p>
                      <br></br>
                      <p>
                        Whats more important to notice however, is that the
                        majority of animal intake reasons are No Time or
                        Aggressive animal. Reasons such as these could have been
                        easily avoidable if proper research was done before
                        adopting.
                      </p>
                    </div>
                  </div>
                  <div className="lg:px-5 lg:w-6/12">
                    <h2 className="text-base-400 py-2 flex px-10">
                      Dog, Cat & Rabbit Shelter Statistics.
                    </h2>
                    <StackedChart />
                    {/* <div className="py-5 max-w-lg">{reason || 0}</div> */}
                    <div className="hidden lg:flex flex-col">
                      <h2>Animal Intakes in Long Beach California</h2>

                      <table className="flex flex-col gap-1 ">
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
                            <th className="p-2 bg-cyan-800 text-gray-100">
                              Reason
                            </th>
                          </tr>
                        </thead>
                        <tbody className="table-container overflow-y-auto max-h-96">
                          {animalData.map((entry, index) => (
                            <tr key={index} className="grid grid-cols-4">
                              <td className="p-2 bg-blue-100">
                                {entry.animal_name}
                              </td>
                              <td className="p-2 bg-blue-200">
                                {entry.intake_date}
                              </td>
                              <td className="p-2 bg-blue-100">
                                {entry.intake_type}
                              </td>
                              <td className="p-2 bg-blue-200">
                                {entry.reason}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="px-10 bg-base-200  rounded-md  border-4 border-gray-600">
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
                          {outcomeData.find(
                            (item) => item.name === "EUTHANASIA"
                          )?.value || 0}
                        </h1>
                        <h1>
                          Rescue:{" "}
                          {outcomeData.find((item) => item.name === "RESCUE")
                            ?.value || 0}
                        </h1>
                        <h1>
                          Return to owner:{" "}
                          {outcomeData.find(
                            (item) => item.name === "RETURN TO OWNER"
                          )?.value || 0}
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
                          {outcomeData.find((item) => item.name === "DIED")
                            ?.value || 0}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </>
        )}

        <div>
          <DogStats />
        </div>
      </div>

      <div className=" flex-col px-5 py-5 bg-gray-900 ">
        <div className="flex flex-row justify-center flex-wrap gap-10 lg:gap-20 ">
          <div className="text-emerald-400 lg:w-1/6 text-2xl px-5 py-5 border border-slate-400">
            Taking a look at the 2020-2023 canine intake count from The National
            Database, It is again good to see that although 3368639 dogs were
            brought into shelters, 29016929 (86.59%) found new homes and
            families.
          </div>

          <div className="text-red-400 lg:w-1/6 text-2xl px-5 py-5 border border-slate-400">
            However, this leaves a staggering 12.66% of dogs that have not been
            so fortunate. They did not find a home and eventually passed away.
          </div>

          <div className="text-gray-400 lg:w-1/6 text-2xl px-5 py-5 border border-slate-400">
            The remaining 0.75% are dogs who have escaped the shelters or their
            outcomes otherwise unknown.
          </div>
        </div>
        <div className="py-5">
          <div className=" border-t-2 border-gray-700  text-gray-200">
            <h1 className="text-4xl font-extrabold decoration-red-400 underline items-center flex justify-center py-8">
              Common reasons for pet abandonment.
            </h1>
            <div className="flex flex-row gap-10 justify-center py-10 flex-wrap">
              <div className="px-10 border border-red-400 rounded-xl lg:w-1/6 items-center flex py-5 flex-col ">
                <h1 className="text-3xl ">Aggression</h1>
                <p className="text-xl py-4">
                  They may show signs of aggression when they feel possessive
                  over certain items such as toys or food. However, they can
                  also act aggressively out of fear, as the pet may perceive
                  somebody as a threat.
                </p>
              </div>

              <div className="px-10 border border-red-400 rounded-xl lg:w-1/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">House Soiling</h1>
                <p className="text-xl py-4">
                  Urinating or defecating indoors. This can be caused due to
                  medical or behavioural reasons such as territorial marking.
                </p>
              </div>

              <div className="px-10 border border-red-400 rounded-xl lg:w-1/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl ">Barking</h1>
                <p className="text-xl py-4">
                  Needlessly barking, howling or overall being vocal to a
                  disruptive level.
                </p>
              </div>

              <div className="px-10 border border-red-400 rounded-xl lg:w-1/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">Attention-Seeking</h1>
                <p className="text-xl py-4">
                  Seeking attention in undesirable ways. This can be by barking,
                  meowing, or whining.
                </p>
              </div>

              <div className="px-10 border border-red-400 rounded-xl lg:w-1/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">Destructive Behaviour</h1>
                <p className="text-xl py-4">
                  Destroying furniture and biting or scratching chairs, sofas,
                  and belongings. There can be many underlying issues as the
                  root cause for this behaviour.
                </p>
              </div>

              <div className="px-10 border border-red-400 rounded-xl lg:w-1/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">Time Management</h1>
                <p className="text-xl py-4">
                  Many pets are being brought to shelters due to their owners
                  running out of time to properly take care of them. Although
                  with certain circumstances, this may be unavoidable, however
                  in many cases, pet owners simply misjudged the time and care
                  needed to have the desired pet.
                </p>
              </div>

              <div className="px-10 border border-red-400 rounded-xl lg:w-2/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">Health Complications.</h1>
                <p className="text-xl py-4">
                  Many pet owners can unfortunately misunderstand or ignore
                  signs of illness and therefore may not seek veterinary care.
                  As obvious as it sounds, pets cannot communicate verbally, so
                  it is extremely important to pay attention to your pets
                  signals such as their body language and behaviour.
                  Furthermore, going to the vet is not always the first choice
                  for many owners. Surgeries can become very expensive, and they
                  are not a procedure that everyone can afford.
                </p>
                <p className="text-xl py-4">
                  In some cases, pet owners may also have their own opinion on
                  health treatment. Studies by Ri Scarborough et al, found that
                  72% of owners thought that their vets should only administer
                  antibiotics when it was absolutely necessary.
                  <Link
                    className="text-blue-400 hover:text-red-400 px-1"
                    href="https://www.mdpi.com/2079-6382/10/11/1326"
                  >
                    [1]
                  </Link>
                </p>
              </div>

              <div className="px-10 border border-red-400 rounded-xl lg:w-1/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">Landlord</h1>
                <p className="text-xl py-4">
                  Many landlords disallow pets in their properties for various
                  reasons. It is extremely important to communicate with your
                  landlord before committing to pet adoption.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-col px-5 bg-gray-900">
          <div className=" text-gray-200">
            <h1 className="text-4xl font-extrabold decoration-emerald-400 underline items-center flex justify-center py-8">
              Possible solutions.
            </h1>
            <div className="flex flex-row gap-10 justify-center py-16 flex-wrap">
              <div className="px-10 border border-emerald-400 rounded-xl lg:w-2/6 items-center flex py-5 flex-col ">
                <h1 className="text-3xl ">Coping Strategies.</h1>
                <p className="text-xl py-4">
                  A study by Kristin Buller and Kelly C. Ballantyne stated that
                  pet owners found coping strategies that allowed them to
                  resolve their ill feelings towards their misbehaving pets and
                  work with them. The owners did this by doing further research
                  and looking deeper into additional education regarding animal
                  misbehaviour.
                  <Link
                    className="text-blue-400 hover:text-red-400 px-1"
                    href="https://www.sciencedirect.com/science/article/pii/
S1558787820300356?ref=pdf_download&fr=RR-2&rr=82edc03c0d0f888f"
                  >
                    [2]
                  </Link>
                </p>
              </div>

              <div className="px-10 border border-emerald-400 rounded-xl lg:w-2/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">Acknowledge Their Needs.</h1>
                <p className="text-xl py-4">
                  Accepting your pets behavioural issues and acknowledging their
                  needs will go a long way. It will help you to understand your
                  pet and work with them better. Many pet owners doing so have
                  expressed their thoughts with quotes such as &quot;His
                  reactivity and barking are part of who he is. We learn to
                  manage it and, in the meantime, consider him the smartest,
                  best, and handsomest dog in the world&quot;.
                  <Link
                    className="text-blue-400 hover:text-red-400 px-1"
                    href="https://www.sciencedirect.com/science/article/pii/
S1558787820300356?ref=pdf_download&fr=RR-2&rr=82edc03c0d0f888f"
                  >
                    [2]
                  </Link>
                </p>
              </div>

              <div className="px-10 border border-emerald-400 rounded-xl lg:w-2/6 items-center flex py-5 flex-col">
                <h1 className="text-3xl">Talk to professionals.</h1>
                <p className="text-xl py-4">
                  Having support from your family and talking to professionals
                  such as the local veterinarians & trainers can be a massive
                  help, allowing you and your pet to overcome unwanted
                  behaviours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Statistics;
