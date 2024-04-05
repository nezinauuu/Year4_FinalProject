import { PetNav } from "@/components/navbars/petNav";
import { AddPetForm } from "@/components/ui/modals/add-pet";

const forumTitle = () => {
  return (
    <div>
      <PetNav />
      <AddPetForm />
    </div>
  );
};

export default forumTitle;
