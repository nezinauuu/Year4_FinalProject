import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";

export const Forum = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const forums = await db.forum.findMany({
    where: {
      creator: {},
    },
  });

  return (
    <div className="py-10 px-10">
      {forums &&
        forums.map((forum) => (
          <div className="px-2  py-2 min-w-screen" key={forum.id}>
            <Link href={`/forums/${encodeURIComponent(forum.title)}`}>
              <div className=" bg-gray-900 px-3 py-3 ">
                <div className="border-red-500 btn btn-ghost text-xl bg-gray-300 min-w-full h-64">
                  <div className="flex flex-col  justify-start items-start">
                    <h2 className="text-left  text-red-400">{forum.title}</h2>
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
