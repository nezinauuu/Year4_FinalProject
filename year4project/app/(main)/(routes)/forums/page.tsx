
import { UserButton } from "@clerk/nextjs";
import { Forum } from "@/components/forum";
import { IoIosArrowForward } from "react-icons/io";
import { currentProfile } from "@/lib/current-profile";
import { CreateForum } from "@/components/ui/modals/add-forum";
import { PiDogFill } from "react-icons/pi";
import Link from "next/link";
import { GiDogHouse } from "react-icons/gi";

const forums = async () => {
  const profile = await currentProfile();
  return (
    <div className="min-h-screen ">
      <div>
        <div className="right-10 fixed top-5">
          <UserButton />
        </div>
      </div>
      <div className="flex py-4 px-4 flex-row">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold bg-gray-900 text-red-400 hover:text-emerald-400 duration-700">
            WoofWoofWorld
          </h1>
        </Link>
        <div className="text-red-400 text-lg">
          <GiDogHouse />
        </div>

        <h1 className="text-3xl font-bold bg-gray-900 text-red-400">Forums</h1>
      </div>
      {profile && <CreateForum />}
      <div className="flex justify-center">
        <div
          className="overflow-y-auto max-h-screen min-w-full"
          style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
        >
        
          <Forum />
        </div>
      </div>
      
      {!profile && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Login to create a forum!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default forums;
