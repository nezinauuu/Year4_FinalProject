
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

const Home = async () => {


    const profile = await initialProfile();
    const pet = await db.pet.findFirst({
        where: {
            animalKeepers: {
                some: {
                    id: profile.id,
                },
            },
        }
    })

    

    if (pet) {
        return redirect(`/pets/${pet.id}`);
    }

    return (
      <main>
        <title>Pets</title>
        <div className="flex flex-col p-12 bg-[url('../images/background-top.svg')] bg-cover min-h-screen">
          <div className="fixed top-10 right-10 flex hover:-translate-y-0 hover:scale-90 duration-100"></div>
          <div className="fixed top-10 right-10 flex hover:-translate-y-0 hover:scale-90 duration-100">
            <UserButton />
          </div>

          <div className="flex justify-center py-4">
            <h1 className=" backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 max-w-4xl text-white">
              Welcome to Pets App
            </h1>
          </div>
          {/* <AddPet /> */}

          <div className="flex justify-center flex-row py-9 gap-16 m-w-64">
            <img
              src={luckyImage.src}
              alt="Lucky"
              className="object-cover w-full h-full rounded-xl max-w-md min-w-[200px] border-red-300 border-4"
            />

            <div className="flex flex-col justify-center max-w-2xl gap-5">
              <div className="backdrop-blur-md bg-white/10 border-4 transition ease-in-out hover:-translate-y-0 hover:scale-95 duration-100">
                <h1 className="text-4xl font-bold text-white m-3">Your Pets</h1>
                <p className="text-white m-3">
                  Review your pets and share your experience with others.
                </p>
              </div>

              <ScrollToTop />
              <h1 className="text-4xl font-bold text-white m-3">
                Looking for a new animal?
              </h1>
              <p className="text-white m-3">
                Check out important information about the animal you want to
                adopt.
              </p>
            </div>
          </div>
        </div>

        <div
          id="new-animal-section"
          className="flex flex-col p-12 bg-[url('../images/background-bot.svg')] bg-cover min-h-screen "
        >
          <h1 className="text-4xl font-bold text-white m-3 flex justify-end">
            Looking for a new animal?
          </h1>
          <p className="text-white m-3 flex justify-end">
            Check out important information about the animal you want to adopt.
          </p>

          <div className="flex justify-center flex-col gap-32">
            <div className="backdrop-blur-md bg-white/10 border-4 transition ease-in-out hover:-translate-y-0 hover:scale-95 duration-100"></div>

            <div>
              <img
                src={Bulldog.src}
                className="object-cover w-full h-full rounded-xl max-w-md min-w-[200px] border-red-300 border-4 "
              ></img>
            </div>
          </div>
        </div>
      </main>
    );

    

}
export default Home