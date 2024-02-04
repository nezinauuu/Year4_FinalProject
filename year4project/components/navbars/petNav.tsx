import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { AddPetForm } from "../ui/modals/add-pet";

export const PetNav = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const pets = await db.pet.findMany({
    where: {
      animalKeepers: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="py-10 px-10">
      <div className="navbar bg-red-200 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-200 rounded-box w-52"
            >
              <li>
                <a>Other Pets</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          {pets &&
            pets.map((pet) => (
              <div className="px-2" key={pet.id}>
                <a className="border-red-500 btn btn-ghost text-xl bg-red-100">
                  {pet.name}
                </a>
              </div>
            ))}
        </div>

        <div className="navbar-end px-2">
          <UserButton />
        </div>
      </div>
     
    </div>
  );
};
