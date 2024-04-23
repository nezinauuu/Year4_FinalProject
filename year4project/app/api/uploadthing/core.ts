import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs";
const f = createUploadthing();

const authHandle = () => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");
  return { userId: userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const FileRoute = {
  forumImage: f({ image: { maxFileSize: "8MB", maxFileCount: 1 } })
    .middleware(() => authHandle())
    .onUploadComplete(() => {}),
  chatImage: f(["image", "image/gif", "video/mp4"])
    .middleware(() => authHandle())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof FileRoute;
