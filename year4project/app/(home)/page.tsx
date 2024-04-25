import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { UserButton } from "@clerk/nextjs";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SignIn, SignUp } from "@clerk/nextjs";
import Link from "next/link";
import React, { PureComponent } from "react";
import DynamicCarousel from "@/components/ui/dynamicCarousel";
import Greeting from "@/components/ui/greeting";
import { PiDogFill } from "react-icons/pi";
import { GiDogHouse } from "react-icons/gi";
import { Nav } from "@/components/navbars/nav";
import { PetAdoption } from "@/components/adoption/petAdoption";
import { Dog } from "@/components/adoption/dog";
import { VscArrowDown } from "react-icons/vsc";

const Home = async () => {
  const profile = await initialProfile();
  let pet;
  if (profile) {
    pet = await db.pet.findFirst({
      where: {
        animalKeepers: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });
  }

  //Automatically redirect user to the pets page if they already have pets
  // if (pet) {
  //   return redirect(`/pets/${pet.id}`);
  // }

  return (
    <main>
      <div className="flex flex-col min-h-[197vh] ">
        <Nav />

        <div className=" flex flex-col items-center  bg-[url('/background.jpg')]   bg-cover  flex-grow p-10 drop-shadow-2xl">
          <h1 className=" bg-white/10 rounded-full px-4 text-4xl font-bold my-8 flex flex-row">
            {/* {!profile && (
              <div className="flex flex-row drop-shadow-2xl">

              </div>
            )} */}
          </h1>

          <div className="flex items-center flex-wrap justify-center gap-8">
            <div className="flex-col w-96">
              <div className="w-full ">
                {/* {pet && (
                  <Link href={`/pets/${pet.id}`}>
                    <button className="w-full h-32 text-3xl font-bold block mt-4 text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                      Your Pets
                    </button>
                  </Link>
                )} */}
              </div>
              <div className="w-full ">
                {profile && (
                  <Link href={`/openAi`}>
                    <button className="w-full h-32 font-bold block border-2 border-gray-950 mt-4 text-center text-white  bg-red-400 hover:text-gray-950 px-4 py-2 rounded-lg shadow-lg">
                      <h1 className="text-3xl">Have a quick question?</h1>
                      <p className="text-md">
                        Talk to our virtual ai assistant!
                      </p>
                    </button>
                  </Link>
                )}
                {!profile && (
                  <Link href={`/sign-in`}>
                    <button className="w-full h-32 font-bold block border-2 border-gray-950 mt-4 text-center text-white  bg-red-400 hover:text-gray-950 px-4 py-2 rounded-lg shadow-lg">
                      <h1 className="text-3xl">Ai assistant</h1>
                      <p className="text-md">
                        You must login to use this feature.
                      </p>
                    </button>
                  </Link>
                )}
              </div>
              <div className="w-full">
                <Link href="/statistics">
                  <button className="w-full h-32 text-3xl font-bold block mt-4 text-center text-white bg-gray-900 hover:text-red-400 px-4 py-2 rounded-lg shadow-lg">
                    Research & Statistics
                  </button>
                </Link>
              </div>
              <div className="w-full">
                <Link href="/forums">
                  <button className="w-full h-32 text-3xl font-bold block mt-4 text-center text-white bg-gray-900 hover:text-red-400 px-4 py-2 rounded-lg">
                    Pet Forums
                  </button>
                </Link>
              </div>
            </div>
            <div className="shadow-xl">
              <DynamicCarousel />
            </div>
          </div>
        </div>

        <div className="justify-center py-10 bg-gray-900 bg-cover">
          <h1 className="text-4xl hover:text-red-400  font-bold justify-center flex text-white mb-4">
            Looking to adopt a pet?
          </h1>
          <div className="text-red-400 text-5xl py-2 flex justify-center">
            <VscArrowDown />
          </div>
          <Dog />
          {/* <div className="border flex w-full flex-wrap bg-slate-800">
              <div className="text-red-400 w-5/12 border-red-400 border-4  min-w-fit">
                <div className="text-4xl font-extrabold flex flex-row gap-2 justify-center">
                  Dogs <PiDogFill />
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold flex flex-row">
                    French Bulldog
                  </h1>
                  <p className="text-xl px-2">
                    Features: <p className="px-2">Friendly Tem</p>
                  </p>
                </div>
              </div>
              <div className="text-blue-400 w-2/12 border-blue-400 border-4 min-w-fit">
                dawd
              </div>
              <div className="text-orange-400 w-5/12 border-orange-400 border-4 min-w-fit">
                <div className="text-4xl font-extrabold flex flex-row gap-2">
                  Cats
                </div>
              </div>
            </div> */}

          {/* <ScrollToTop /> */}
        </div>
      </div>
    </main>
  );
};
export default Home;
