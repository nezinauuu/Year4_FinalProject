import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { AddPetForm } from "../ui/modals/add-pet";
import { GiDogHouse } from "react-icons/gi";
import Link from "next/link";
import { SiRobotframework } from "react-icons/si";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineForum } from "react-icons/md";
export const Nav = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  return (
    <div className="flex py-4 px-4  bg-gray-900 shadow-2xl">
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
  );
};
