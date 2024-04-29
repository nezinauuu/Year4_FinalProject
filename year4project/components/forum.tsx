import { db } from "@/lib/db";

import Link from "next/link";
import { IoIosChatboxes } from "react-icons/io";
import { MdPets } from "react-icons/md";
export const Forum = async () => {
  const forums = await db.forum.findMany({
    include: {
      creator: true,
      chatLogs: true,
    },
  });

  return (
    <div className="bg-gray-200 min-h-screen py-10">
      {forums &&
        forums.map((forum) => (
          <Link
            key={forum.id}
            href={`/forums/${forum.title.replace(/\s+/g, "-")}`}
          >
            <div className="text-red-300 flex flex-row items-center py-2 flex-wrap gap-3 border justify-center hover:bg-red-300/30 ">
              <div className="py-1.5 bg-gray-100  rounded-xl  px-1.5 ">
                {forum.creator.imageUrl && (
                  <img
                    className="h-14 w-14 rounded-xl hover:delay-500 hover:scale-[3.5]"
                    src={forum.creator.imageUrl}
                  ></img>
                )}
              </div>
              <div className="hidden sm:flex">
                <div className="px-1.5 py-1.5 bg-gray-100 rounded-xl">
                  <div className=" h-14 w-14 px-1.5 items-center justify-center flex flex-col bg-gray-100 text-gray-900">
                    <div className="text-3xl text-red-400">
                      <IoIosChatboxes />
                    </div>
                    {forum.chatLogs.length}
                  </div>
                </div>
              </div>
              <div className="sm:w-3/5 w-4/5">
                <div className="px-1.5 py-1.5 bg-gray-100 rounded-xl ">
                  <div className=" h-14 px-1.5 items-center  w-full flex bg-gray-100 text-gray-900 ">
                    <div className="md:w-3/5">{forum.title}</div>
                    <div className="w-1/5  hidden md:flex text-red-400 justify-end  ">
                      {forum.creator.name.split(" ")[0]}
                    </div>
                    <div className="w-1/5 justify-end   hidden md:flex">
                      {new Date(forum.createdAt).toLocaleString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true, // Use 12-hour format
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};
