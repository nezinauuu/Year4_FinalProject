import { Forum } from "@/components/forum";

import { CreateForum } from "@/components/ui/modals/add-forum";

import { Nav } from "@/components/navbars/nav";

const ForumPage = () => {
  return (
    <div className="min-h-screen ">
      <title>Forums</title>
      <Nav />

      <CreateForum />
      <div className="flex justify-center">
        <div
          className="overflow-y-auto max-h-screen min-w-full"
          style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
        >
          <Forum />
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
