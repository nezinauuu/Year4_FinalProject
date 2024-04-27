import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/statistics", "/forums", /^\/forums\/.*/, "/api/uploadthing","/PetPractices"], // Specify the homepage ("/") as a public route
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
