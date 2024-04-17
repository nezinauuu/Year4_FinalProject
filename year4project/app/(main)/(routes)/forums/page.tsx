
import { UserButton } from "@clerk/nextjs";
import { Forum } from "@/components/forum";
import { IoIosArrowForward } from "react-icons/io";
import { currentProfile } from "@/lib/current-profile";
import { CreateForum } from "@/components/ui/modals/add-forum";
import { PiDogFill } from "react-icons/pi";
import Link from "next/link";
import { GiDogHouse } from "react-icons/gi";
import { Nav } from "@/components/navbars/nav";

const forums = async () => {
  const profile = await currentProfile();
  return (
    <div className="min-h-screen ">
<Nav/>
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
