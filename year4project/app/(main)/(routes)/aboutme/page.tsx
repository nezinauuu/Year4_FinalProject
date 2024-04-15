"use client";

import Link from "next/link";
import { PiDogFill } from "react-icons/pi";
import { UserButton } from "@clerk/nextjs";
import { GiDogHouse } from "react-icons/gi";
import { Footer } from "@/components/ui/footer";
const AboutMe = () => {
  return (
    <main>
      <title>About me</title>
      <div className="flex min-h-screen  flex-col bg-gray-900 ">
        <div>
          <div className="flex justify-center py-20  top-20  min-w-full">
            <ul className="steps ">
              <li className="step step-warning text-emerald-400">
                Create Web App
              </li>
              <li className="step step-warning text-emerald-400">Research</li>
              <li className="step step-warning text-emerald-400">Add Forums</li>
              <li className="step step-warning text-emerald-400">
                Implement Ai Assistance
              </li>
              <li className="step step-error text-red-400" data-content="5">
                Add your Pets
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-full flex justify-center">
          <div className="mockup-browser border bg-gray-300 w-3/5 ">
            <div className="mockup-browser-toolbar ">
              <div className="input text-red-400 bg-gray-400">
                https://woofwoofworld.net/pets
              </div>
            </div>
            <div className="flex py-4 px-4 flex-row bg-gray-900 border border-red-400">
              <Link href={"/"}>
                <h1 className="text-3xl font-bold bg-gray-900 text-red-400 hover:text-emerald-400 duration-700">
                  WoofWoofWorld
                </h1>
              </Link>

              <div className="text-red-400 text-lg">
                <GiDogHouse />
              </div>

              <h1 className="text-3xl font-bold bg-gray-900 text-red-400">
                Pets
              </h1>
              <div className="right-10 absolute">
                <UserButton />
              </div>
            </div>
            <div className="py-5 bg-red-200 flex justify-center flex-col items-center">
              <div className="gap-4 flex min-w-max items-center justify-center">
                <button className="btn bg-gray-950 hover:bg-gray-800 px-6 text-gray-200">
                  Mila
                </button>
                <button className="btn bg-red-400 hover:bg-gray-800 px-6 text-gray-200 right-10 absolute">
                  Add pet
                </button>
                <button className="btn bg-red-300 text-gray-950 border-4 hover:bg-red-400">
                  Lucky
                </button>
                <button className="btn bg-gray-100 hover:bg-gray-200 text-gray-950">
                  Mittens
                </button>
                <button className="btn bg-orange-400 hover:bg-orange-500 text-gray-950">
                  Sushi
                </button>
              </div>
              <div className="flex text-4xl font-extrabold justify-center px-4 py-16 bg-red-200">
                Lucky
              </div>
              <div className="flex max-w-sm flex-row   ">
                <div className=" bg-white/40 px-5 py-5 right-10 flex">
                  <img
                    src={
                      "https://cdn.discordapp.com/attachments/647530722789425193/1229496895039213650/20240307_140256.jpg?ex=662fe536&is=661d7036&hm=30008ea6404f368c498d0b73d1554eaf46b55388b393eccaf8b7484ec0547a89&"
                    }
                  />
                </div>
                <div className=" py-5 bg-white/40 flex px-5 flex-col min-w-fit ">
                  <div>Breed: Bischon Frise</div>
                  <div>Name: Lucky</div>
                  <div>Age: 2.5</div>
                  <div>Weight: 4kg</div>
                  <div>Description: smoll dog</div>
                  <div className="py-2">
                    <div className="flex flex-row gap-2">
                      Eaten: <div className="text-red-600">no</div>
                    </div>
                    <div className="flex flex-row gap-2">
                      Walked: <div className="text-green-600">yes</div>
                    </div>
                    <div className="flex flex-row gap-2">
                      Grumpy: <div className="text-orange-600">perhaps</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-32"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="text-gray-300 text-3xl flex justify-center py-5 max-w-5xl"> For the future I would like to add the ability for users to add their own pets and be able to track their information. I believe this would be quiet useful for cases where there is more than one person taking care of pets.</div>
       </div>
      </div>
    </main>
  );
};

export default AboutMe;
