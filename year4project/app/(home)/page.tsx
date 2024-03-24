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
        <div className="flex justify-between p-4 bg-[url('../images/background-top.svg')] bg-cover">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Pets App Dashboard
            </h1>
          </div>
          <div>
            <UserButton />
            <SignIn />
            <SignUp />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-orange-950 glass bg-blur flex-grow p-4">
          <h1 className="text-4xl font-bold  my-8">
            Welcome, {profile ? profile.name : "Guest"}
          </h1>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-64">
              <img
                src={luckyImage.src}
                alt="Lucky"
                className="w-full rounded-xl border-4 border-red-300"
              />
              {pet && (
                <Link href={`/pets/${pet.id}`}>
                  <button className="block mt-4 text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                    Your Pets
                  </button>
                </Link>
              )}
            </div>

              <DynamicCarousel/>



            <div className="w-64">
              <img
                src={Bulldog.src}
                alt="Bulldog"
                className="w-full rounded-xl border-4 border-red-300"
              />
              <Link href="/statistics">
                <button className="block mt-4 text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                  Pet Statistics
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-4 bg-[url('../images/background-bot.svg')] bg-cover">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Looking for a new animal?
            </h1>
            <p className="text-white mb-8">
              Check out important information about the animal you want to
              adopt.
            </p>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
