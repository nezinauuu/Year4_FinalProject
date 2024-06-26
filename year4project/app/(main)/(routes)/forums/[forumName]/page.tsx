import { CreateMessage } from "@/components/ui/modals/add-chat";
import { db } from "@/lib/db";
import { format } from "date-fns";
import { IoIosChatboxes } from "react-icons/io";
import Image from "next/image";
import { Nav } from "@/components/navbars/nav";
export default async function ForumTitle({
  params,
}: {
  params: { forumName: string };
}) {
  const forum = await db.forum.findFirst({
    where: { title: params.forumName.replace(/-/g, " ") },
    include: {
      creator: true,
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

  if (
    forum.chatLogs.every((chatLog) => chatLog.message == null) &&
    forum.content == null
  ) {
    return (
      <div>
        <title>Forum</title>
        <div className="absolute w-full">
          <Nav />
        </div>
        <div className="py-10 px-10 bg-gray-200 min-h-screen flex justify-center items-center flex-col">
          <div className="justify-center flex">
            <h2 className="text-left text-7xl font-extrabold text-red-400">
              {forum.title}
            </h2>
          </div>
          <div className="text-3xl text-gray-400 py-32">
            There are currently no messages in this forum :(
          </div>
          <CreateMessage forumId={forum.id} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <title>Forum</title>
      <Nav />
      <div className="py-10 px-10 min-h-screen bg-gray-200">
        <div className="justify-center flex">
          <h2 className="text-left text-7xl font-extrabold text-red-400">
            {forum.title}
          </h2>
        </div>

        <div className="bg-gray-100 rounded-md p-8 mt-8">
          <div className="py-4 " key={forum.id}>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gray-100  flex items-center justify-center mr-4">
                <img className="rounded-lg" src={forum.creator.imageUrl}></img>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="text-xl font-bold text-red-400 mr-2">
                    {forum.creator.name.split(" ")[0]}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {format(new Date(forum.createdAt), "yyyy-MM-dd HH:mm:ss")}
                  </p>
                </div>
                <p className="text-gray-600">{forum.content}</p>
              </div>
            </div>
          </div>
        </div>
        {forum.chatLogs && forum.chatLogs.length > 0 && (
          <div className="bg-gray-100 rounded-md p-8 mt-8">
            {forum.chatLogs.map((chatLog) => (
              <div className="py-4 " key={chatLog.id}>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gray-100  flex items-center justify-center mr-4">
                    <img
                      className="rounded-lg"
                      src={chatLog.sender.imageUrl}
                    ></img>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <div className="text-xl font-bold text-red-400 mr-2">
                        {chatLog.sender.name.split(" ")[0]}
                      </div>
                      <p className="text-gray-500 text-sm">
                        {format(
                          new Date(chatLog.sentAt),
                          "yyyy-MM-dd HH:mm:ss"
                        )}
                      </p>
                    </div>
                    <p className="text-gray-600">{chatLog.message}</p>
                    {chatLog.imageUrl && (
                      <div className="relative h-20 w-20">
                        <Image fill alt="" src={chatLog.imageUrl} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="fixed bottom-10 right-10">
          <CreateMessage forumId={forum.id} />
        </div>
      </div>
    </div>
  );
}
