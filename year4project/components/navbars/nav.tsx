"use client";
import { UserButton } from "@clerk/nextjs";
import { GiDogHouse } from "react-icons/gi";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { SiRobotframework } from "react-icons/si";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineForum } from "react-icons/md";
import { FaShieldDog } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export const Nav = () => {
  const { isLoaded, user } = useUser();

  return (
    <div className="navbar flex py-4 px-4  bg-gray-900 shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown text-red-400">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-gray-900 rounded-box w-52 text-red-400  font-extrabold flex"
          >
            <li className=" hover:text-blue-300 ">
              <Link href={"/"} className="flex">
                <div className=" py-2 text-xl flex ">
                  <p className="mr-2 items-center">Home</p> <FaHome />
                </div>
              </Link>
            </li>
            <li className=" hover:text-blue-300 ">
              <Link href={"/openAi"} className="flex">
                <div className=" py-2 text-xl flex ">
                  <p className="mr-2 ">WoofAi</p> <SiRobotframework />
                </div>
              </Link>
            </li>
            <li className=" hover:text-blue-300 ">
              <Link href={"/statistics"}>
                <div className="flex py-2 text-xl">
                  <p className="mr-2">Statistics</p> <ImStatsBars />
                </div>
              </Link>
            </li>
            <li className=" hover:text-blue-300 ">
              <Link href={"/forums"}>
                <div className="flex py-2 text-xl">
                  <p className="mr-2 ">Forums</p> <MdOutlineForum />
                </div>
              </Link>
            </li>
            <li className=" hover:text-blue-300 ">
              <Link href={"/PetPractices"}>
                <div className="flex py-2 text-xl">
                  <p className="mr-2">Pet Practices</p> <FaShieldDog />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={"/"}>
          <h1 className="flex text-3xl font-bold bg-gray-900 text-red-400 hover:text-blue-300 duration-700">
            WoofWoofWorld
            <img src="/bone.png" className="w-12 px-2"></img>
          </h1>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="w-4/12  flex justify-end">
          {user && (
            <div className="text-red-400 flex-row flex items-center">
              <p className="text-gray-500 italic hidden md:flex">
                Logged in as
              </p>
              <p className="px-2 hidden sm:flex">{user.username}</p>
            </div>
          )}
          {!user && (
            <div className="navbar text-neutral-content justify-end  ">
              <Link href={"/sign-in"}>
                <button className="btn btn-ghost text-xl hover:text-blue-300">
                  Sign in
                </button>
              </Link>
            </div>
          )}
          <UserButton />
        </div>
      </div>
    </div>
  );
};
