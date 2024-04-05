import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import backgroundImage from "@/images/background-top.svg"; // import the SVG file
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import luckyImage from "@/images/lucky.jpg";
import Bulldog from "@/images/Bulldog.jpg";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SignIn, SignUp } from "@clerk/nextjs";
import { AddPetForm } from "@/components/ui/modals/add-pet";
import Link from "next/link";

import React, { PureComponent } from "react";
import DynamicCarousel from "@/components/ui/dynamicCarousel";

const Home = async () => {
  const profile = await initialProfile();

  const pet = await db.pet.findFirst({
    where: {
      animalKeepers: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  //Automatically redirect user to the pets page if they already have pets
  // if (pet) {
  //   return redirect(`/pets/${pet.id}`);
  // }

  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-between p-4 bg-gray-900 bg-cover">
          <div>
            <h1 className="text-3xl font-bold bg-gray-900 text-red-400">
              Pets App Dashboard
            </h1>
          </div>
          <div>
            <UserButton />
            <SignIn />
            <SignUp />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-300 glass flex-grow p-4">
          <h1 className="text-4xl font-bold my-8">
            Welcome, {profile ? profile.name : "Guest"}
          </h1>

          <div className="flex items-center flex-wrap justify-center gap-8">
            <div className="flex-col w-96">
              <div className="w-full">
                {pet && (
                  <Link href={`/pets/${pet.id}`}>
                    <button className="w-full h-32 text-3xl font-bold block mt-4 text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                      Your Pets
                    </button>
                  </Link>
                )}
              </div>

              <div className="w-full">
                {pet && (
                  <Link href={`/pets/${pet.id}`}>
                    <button className="w-full h-32 text-3xl font-bold block mt-4 text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                      Looking for a pet?
                    </button>
                  </Link>
                )}
              </div>

              <div className="w-full">
                <Link href="/statistics">
                  <button className="w-full h-32 text-3xl font-bold block mt-4 text-center text-white bg-gray-900 hover:text-red-400 px-4 py-2 rounded-lg">
                    Pet Statistics
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
            <div className="">
              <DynamicCarousel />
            </div>
          </div>
        </div>

        <div className="flex justify-center p-4 bg-gray-900 bg-cover">
          <div className="max-w-2xl ">
            <Link href={`/pets}`}>
              <h1 className="text-4xl hover:text-red-400  font-bold justify-center flex text-white mb-4">
                First time using Pet App?
              </h1>
            </Link>{" "}
            <Link href={`/pets}`}>
              <p className="text-white hover:text-red-400  mb-8 justify-center flex">
                Click here to find out what you can do!
              </p>{" "}
            </Link> 
            <ScrollToTop />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
