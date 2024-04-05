import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";



const ForumTitle = async () => {



  const chatlog = await db.chatLog.findMany({
    where: {
      forum: {
        title:"TitleTest"
      },
    },
  });

  return (
    <div className="py-10 px-10">
        EEEEE
      {chatlog &&
        chatlog.map((chatLog) => (
          <div className="px-2  py-2 min-w-screen" key={chatLog.id}>
            <Link href={`/forums/${chatLog.senderId}`}>
              <div className=" bg-gray-900 px-3 py-3 ">
                <div className="border-red-500 btn btn-ghost text-xl bg-gray-300 min-w-full h-64">
                  <div className="flex flex-col  justify-start items-start">
                    <h2 className="text-left  text-red-400">
                      {chatLog.message}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};
export default ForumTitle