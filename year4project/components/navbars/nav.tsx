import { UserButton } from "@clerk/nextjs";
import { GiDogHouse } from "react-icons/gi";
import { initialProfile } from "@/lib/initial-profile";
import Link from "next/link";
import { SiRobotframework } from "react-icons/si";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineForum } from "react-icons/md";
export const Nav = async () => {
  const profile = await initialProfile();

  return (
    <div className="flex py-4 px-4  bg-gray-900 shadow-2xl">
      <div className=" w-4/12">
        <Link href={"/"}>
          <h1 className="flex text-3xl font-bold bg-gray-900 text-red-400 hover:text-blue-300 duration-700">
            WoofWoofWorld
            <GiDogHouse />
          </h1>
        </Link>
      </div>
      <div className="gap-2 flex-row flex items-center text-red-400 text-lg font-extrabold  w-4/12 justify-center">
        <Link href={"/openAi"}>
          <div className="hover:text-blue-300 duration-500 flex gap-2">
            <p>WoofAi</p> <SiRobotframework />
          </div>
        </Link>
        <div className="text-gray-600">/</div>
        <Link href={"/statistics"}>
          <div className="hover:text-blue-300 duration-500 gap-2 flex">
            <p>Statistics</p> <ImStatsBars />
          </div>
        </Link>
        <div className="text-gray-600">/</div>
        <Link href={"/forums"}>
          <div className="hover:text-blue-300 duration-500 gap-2 flex">
            <p>Forums</p>
            <MdOutlineForum />
          </div>
        </Link>
      </div>
      <div className="w-4/12  flex justify-end">
        {profile && (
          <div className="text-red-400 flex-row flex items-center">
            <p className="text-gray-500 italic truncate ">Logged in as</p>
            <p className="px-2">{profile.name.split(" ")[0]}</p>{" "}
          </div>
        )}
        {!profile && (
          <div className="text-gray-500 flex-row flex items-center">
            <Link href={`/sign-in`}>
              <p className="  hover:text-red-400">Login</p>
            </Link>
            <p className="px-2 text-lg font-extrabold">/</p>
            <Link href={`/sign-up`}>
              <p className=" hover:text-red-400">Register</p>
            </Link>
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};
