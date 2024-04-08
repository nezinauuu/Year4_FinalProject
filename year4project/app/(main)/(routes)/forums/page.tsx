import { PetNav } from "@/components/navbars/petNav";
import { AddPetForm } from "@/components/ui/modals/add-pet";
import { UserButton } from "@clerk/nextjs";
import { Forum } from "@/components/forum";

const forums = () => {
  return (
    <div>
      <div>
        <h1 className="text-white bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] px-5">
          Pet Forums
        </h1>
        <div className="right-10 fixed top-5">
          <UserButton />
        </div>
      </div>
      <div className="overflow-y-auto h-80">
        <Forum />
      </div>
    </div>
  );
};

export default forums;
