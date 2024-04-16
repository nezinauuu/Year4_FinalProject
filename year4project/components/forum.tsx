import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";

export const Forum = async () => {
  const profile = await currentProfile();

  // if (!profile) {
  //   return redirect("/");
  // }

  const forums = await db.forum.findMany({
    include: {
      creator: true,
    },
  });

  return (
    <div className="py-10 px-10 ">
      {forums &&
        forums.map((forum) => (
          <div className="px-2 py-2 min-w-screen " key={"forum.title"}>
            <Link href={`/forums/${forum.title.replace(/\s+/g, "-")}`}>
              <div className="px-3 py-1 ">
                <div className="border-red-500 text-xl bg-gray-300 hover:bg-gray-400 min-w-full h-48">
                  <div className="flex flex-row min-w-full">
                    <div className="flex justify-start items-center px-2 py-2 text-gray-600">
                      <img
                        className="h-12 w-12 rounded-xl"
                        src={forum.creator.imageUrl}
                      ></img>
                      <div className="px-2"> {forum.creator.name.split(" ")[0]}</div>
                     
                    </div>
                    <div className=" right-20 py-2 absolute text-gray-600 ">
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

                  <div className="flex flex-col  items-center">
                    <h2 className="text-left  text-red-400 font-extrabold">{forum.title}</h2>
                    <p className="text-gray-600 text-left">{forum.content}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};
