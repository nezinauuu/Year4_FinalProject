import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({

  publicRoutes: ["/", "/statistics", "/page", "/forums", "/forums/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
