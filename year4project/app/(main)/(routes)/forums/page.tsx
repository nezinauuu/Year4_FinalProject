"use client";
import { PetNav } from "@/components/navbars/petNav";
import { AddPetForm } from "@/components/ui/modals/add-pet";
import { UserButton } from "@clerk/nextjs";

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

      <div className="flex flex-col gap-3 px-5 py-5">
        <div
          className="items-center flex backdrop-blur-md bg-white/10 border-4 transition ease-in-out hover:-translate-y-0 hover:scale-95 duration-100"
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement;
            if (modal !== null) {
              modal.showModal();
            }
          }}
        >
          <h1 className="text-4xl font-bold text-white m-3 ">
            Are pets actually being abandonde?
          </h1>
          <p className="text-white ">
            Review your pets and share your experience with others.
          </p>

          <div className="flex-grow  flex justify-end items-center pr-3">
            <span className="text-white">Author: Ben</span>
          </div>
        </div>

        <div
          className="items-center flex backdrop-blur-md bg-white/10 border-4 transition ease-in-out hover:-translate-y-0 hover:scale-95 duration-100"
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement;
            if (modal !== null) {
              modal.showModal();
            }
          }}
        >
          <h1 className="text-4xl font-bold text-white m-3 ">What breed is the best for small homes?</h1>
          <p className="text-white ">
            Review your pets and share your experience with others.
          </p>

          <div className="flex-grow  flex justify-end items-center pr-3">
            <span className="text-white">Author: Ben</span>
          </div>
        </div>
        <div
          className="items-center flex backdrop-blur-md bg-white/10 border-4 transition ease-in-out hover:-translate-y-0 hover:scale-95 duration-100"
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement;
            if (modal !== null) {
              modal.showModal();
            }
          }}
        >
          <h1 className="text-4xl font-bold text-white m-3 ">
            Pet food containing radiation.
          </h1>
          <p className="text-white ">
            Review your pets and share your experience with others.
          </p>

          <div className="flex-grow  flex justify-end items-center pr-3">
            <span className="text-white">Author: Ben</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forums;
