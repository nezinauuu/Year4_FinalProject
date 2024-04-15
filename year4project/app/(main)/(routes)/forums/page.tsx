import { UserButton } from "@clerk/nextjs";
import { Forum } from "@/components/forum";
import { IoIosArrowForward } from "react-icons/io";
import { currentProfile } from "@/lib/current-profile";
import { CreateForum } from "@/components/ui/modals/add-forum";

const forums = async () => {
  const profile = await currentProfile();
  return (
    <div className="min-h-screen">
      {/* <div>
        <div className="right-10 fixed top-5">
          <UserButton />
        </div>
      </div> */}
      <div className="px-5 py-5">
        <div className=" text-xl flex-row flex  text-white py-5 bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] px-5 justify-center">
          <div className="py-3 ">Pet Forums</div>
        </div>
      </div>
      <CreateForum />

      <div
        className="overflow-y-auto max-h-screen px-64"
        style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
      >
        <Forum />
      </div>
    </div>
  );
};

export default forums;
