import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { format } from "date-fns"; // Import the format function from date-fns

export default async function ForumTitle({
  params,
}: {
  params: { forumName: string };
}) {
  const forum = await db.forum.findFirst({
    where: { title: params.forumName.replace(/-/g, " ") },
    include: {
      chatLogs: {
        include: {
          sender: true,
        },
      },
    },
  });

  if (!forum) {
    return null;
  }

  return (
    <div className="py-10 px-10 bg-gray-900 min-h-screen">
      <div className="absolute right-10">
        <UserButton />
      </div>

      <div className="justify-center flex">
        <h2 className="text-left text-7xl font-extrabold text-red-400">
          {forum.title}
        </h2>
      </div>
      <div className=" bg-gray-800 rounded-md px-3 py-3  ">
        {forum.chatLogs.map((chatLog) => (
          <div className="py-2">
            <div className="border-red-500 text-xl rounded-md bg-gray-300 min-w-full h-64">
              <div className="flex flex-col text-left px-3 py-3">
                <div className="flex-row flex gap-2 justify-center">
                  <div>{chatLog.sender.name}</div>
                  <p className="text-gray-500 text-sm">
                    {format(new Date(chatLog.sentAt), "yyyy-MM-dd HH:mm:ss")}
                  </p>
                </div>
                <p className="text-gray-600">{chatLog.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
