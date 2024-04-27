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
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Nav />
      <div className="flex flex-row flex-wrap">
        <div className="min-h-screen lg:w-1/6 flex lg:items-center py-16 flex-col lg:gap-2 border border-gray-800">
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
                href={
                  "https://www.msd-animal-health.com/about-us/features-stories/preventative-pet-health/"
                }
              >
                <span className="text-xs text-gray-500 hover:text-red-400">MSD Animal Health</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="min-h-screen lg:w-4/6 flex items-center  flex-col gap-2 border-2 border-gray-800">
          <h1 className="text-7xl justify-center flex  py-16 font-extrabold text-orange-400">
            Pet Practices
          </h1>

          <div className="lg:w-5/6 border-4 rounded-3xl bg-gray-800 border-red-400 flex justify-start px-8 text-white lg:text-3xl text-2xl py-10">
            <div className="flex-col">
              <h1 className="text-orange-400 font-bold">
                My pet is tugging on my leash, what should i do?
              </h1>
              <p className="lg:text-2xl text-xl">
                If your pet is tugging on your leash
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-screen lg:w-1/6 flex items-center justify-center flex-col gap-2 border border-gray-800"></div>
      </div>
    </div>
  );
};

export default PetPractices;
