import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useRouter } from "next/navigation";

import { UserButton, useUser } from "@clerk/nextjs";
import { PiDogFill } from "react-icons/pi";
import Link from "next/link";
import { GiDogHouse } from "react-icons/gi";
import { SiRobotframework } from "react-icons/si";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineForum } from "react-icons/md";
import { Nav } from "@/components/navbars/nav";
import { TiTick } from "react-icons/ti";
const schema = Joi.object({
  content: Joi.string(),
});

interface Message {
  role: string;
  content: string;
}

const PetPractices = () => {
  return (
    <div>
      <Nav />

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center flex-col">
        {/* <Nav /> */}
        <div className="flex flex-row flex-wrap justify-center">
          <div className="lg:w-1/6 flex lg:items-center py-16 flex-col lg:gap-2 lg:border border-gray-800">
            <div className="lg:w-5/6 border rounded-3xl bg-gray-800 border-red-400 flex justify-start px-8 text-white lg:text-2xl text-2xl py-10">
              <div className="flex-col">
                <h1 className="text-orange-400 font-bold">
                  Pet Health Checklist
                </h1>
                <p className="lg:text-xl text-xl flex flex-row gap-2">
                  Annual Vaccinations <TiTick />
                </p>
                <p className="lg:text-xl text-xl flex flex-row gap-2">
                  Flea & Tick control <TiTick />
                </p>
                <p className="lg:text-xl text-xl flex flex-row gap-2">
                  Microchip <TiTick />
                </p>
                <p className="lg:text-xl text-xl flex flex-row gap-2">
                  Heartworm prevention <TiTick />
                </p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.msd-animal-health.com/about-us/features-stories/preventative-pet-health/"
                  }
                >
                  <span className="text-xs text-gray-500 hover:text-red-400">
                    MSD Animal Health
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="min-h-screen lg:w-4/6 flex items-center  flex-col gap-6 border-2 border-gray-800">
            <h1 className="text-7xl justify-center flex py-12 font-extrabold px-16 text-orange-400">
              Common Pet Questions
            </h1>

            <div className="w-5/6 border-2 rounded-3xl bg-gray-800 border-red-400 flex justify-start px-8 text-white lg:text-3xl text-2xl py-4">
              <div className="flex-col w-full">
                <h1 className="text-orange-400 font-bold mt-6">
                  How often should my pet be taken to the vet?
                </h1>

                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-300  text-xl mt-5"
                >
                  <li>
                    Puppies & kittens will require more frequent visits for
                    vaccinations, neutering, and weight checks.
                  </li>
                  <li>Adult dogs typically need a visit 1-2 times per year.</li>
                  <li>
                    Frequent check-ups with older animals will help detect and
                    prevent health conditions early.
                  </li>
                </ul>

                <div className="justify-end  flex">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://www.allpawsvets.ie/pet-care-faqs/"}
                  >
                    <span className="text-sm text-gray-500 hover:text-red-400">
                      allpawsvet.ie
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-5/6 border-2 rounded-3xl bg-gray-800 border-red-400 flex justify-start px-8 text-white lg:text-3xl text-2xl py-4">
              <div className="flex-col w-full">
                <h1 className="text-orange-400 font-bold mt-6">
                  How can I prevent fleas, ticks, and other parasites from
                  affecting my pet?
                </h1>

                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-300 text-xl mt-5"
                >
                  <li>
                    Dogs:
                    <p className="px-4">
                      There are various effective and simple treatments
                      available. You can use tablets which are effective for 3
                      months against fleas, ticks and mites. However, puppies
                      and kittens will require regular worming treatments.
                    </p>
                  </li>
                  <li>Cats:</li>
                  <p className="px-4">
                    For cats there is a &quot;spot-on&quot; option available
                    which will work against fleas & ticks for about 1-3 months.
                    There are also tablet options available for cats to fight
                    tapeworms,roundworms & mites.
                  </p>
                  <p>
                    It is important however to check up with your local vet and
                    find the best prevention treatments for your pet as
                    different breeds & ages may vary.
                  </p>
                </ul>

                <div className="justify-end  flex">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.vets.ie/pet-advice/parasite-prevention#prevention-is-simple"
                    }
                  >
                    <span className="text-sm text-gray-500 hover:text-red-400">
                      vets.ie
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-5/6 border-2 rounded-3xl bg-gray-800 border-red-400 flex justify-start px-8 text-white lg:text-3xl text-2xl py-4">
              <div className="flex-col w-full">
                <h1 className="text-orange-400 font-bold mt-6">
                  How can I help my pet adjust to a new home or environment?
                </h1>

                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-300 text-xl mt-5"
                >
                  <li>
                    Setup a familiar environment:
                    <p className="px-4">
                      Your pet will find comfort in a space they know well, so a
                      good practice is to recreate their favourite spot with
                      items such as beds, blankets & toys.
                    </p>
                  </li>
                  <li>Maintain your old routines:</li>
                  <p className="px-4">
                    Pets will do exceptionally well on routines, so try to keep
                    your meal times, walk times and bedtimes consistant.
                  </p>
                  <li>Explore the new surroundings together:</li>
                  <p className="px-4">
                    Help your pet become familiar with their surroundings and
                    explore together. Go for walks and allow them to experience
                    the sights and smells of the area. However, be patient when
                    introducing your pet with your neighbours. Socializing them
                    is important but do so at a slow pace.
                  </p>
                </ul>

                <div className="justify-end  flex">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://petraveller.com.au/blog/how-to-help-your-pet-adjust-to-a-new-home"
                    }
                  >
                    <span className="text-sm text-gray-500 hover:text-red-400">
                      Petraveller
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-5/6 border-2 rounded-3xl bg-gray-800 border-red-400 flex justify-start px-8 text-white lg:text-3xl text-2xl py-4 mb-5">
              <div className="flex-col w-full">
                <h1 className="text-orange-400 font-bold mt-6">
                  How can I stop my dog from needlessly barking?
                </h1>

                <ul
                  role="list"
                  className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-300 text-xl mt-5"
                >
                  <li>
                    Make sure to exercise plenty and mentally stimulate your
                    dog.
                  </li>
                  <li>
                    Teach your pet the &quot;quiet&quot; command while
                    positively reinforcing good behaviour.
                  </li>
                  <li>
                    Socializing your dog well will greatly reduce barking at
                    people and other dogs.
                  </li>
                  <li>
                    If your dog is proving difficult to train, then training
                    programs may be a good idea to consider.
                  </li>
                </ul>

                <div className="justify-end  flex">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      "https://www.akc.org/expert-advice/training/how-to-stop-dog-barking/"
                    }
                  >
                    <span className="text-sm text-gray-500 hover:text-red-400">
                      American Kennel Club
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:w-1/6 flex items-center justify-center flex-col gap-2 border border-gray-800"></div>
        </div>
        <h1 className="lg:text-5xl justify-center flex  py-12 font-extrabold text-orange-400 flex-col text-wrap break-all text-4xl items-center">
          <p>Have more questions?</p> <p>Make a forum</p>
          <Link
            className="px-3 underline decoration-dotted hover:text-red-400"
            href={"/forums"}
          >
            here
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default PetPractices;
