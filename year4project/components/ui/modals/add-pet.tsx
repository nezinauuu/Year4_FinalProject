"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = Joi.object({
  name: Joi.string(),
  breed: Joi.string(),
  description: Joi.string(),
});

export const AddPetForm = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      name: "",
      breed: "",
      description: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: {
    name: string;
    breed: string;
    description: string;
  }) => {
    console.log(values);

    try {
      await axios.post("/api/servers", values);
      form.reset();
      router.refresh();
      //window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div
        className="backdrop-blur-md bg-white/10 border-4 transition ease-in-out hover:-translate-y-0 hover:scale-95 duration-100"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement;
          if (modal !== null) {
            modal.showModal();
          }
        }}
      >
        <h1 className="text-4xl font-bold text-white m-3">Add your pet</h1>
        <p className="text-white m-3">
          Review your pets and share your experience with others.
        </p>
      </div>



      <dialog id="my_modal_1" className="modal ">
     
          <div className="modal-box bg-white ">
            <h3 className="font-bold text-lg">
              Hello! Enter your Pets information below:
            </h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>

            <div className="gap-3 flex flex-col">
              <Controller
                control={form.control}
                name="name"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-error w-full max-w-xs bg-red-100"
                  />
                )}
              />

              <Controller
                control={form.control}
                name="breed"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Breed"
                    className="input input-bordered input-error w-full max-w-xs bg-red-100"
                  />
                )}
              />

              <Controller
                control={form.control}
                name="description"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Description"
                    className="input input-bordered input-error w-full max-w-xs bg-white"
                  />
                )}
              />
            </div>
            <div className="flex py-2 modal-action">
              <form
                method="dialog"
                className="flex gap-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-lime-400 text-white">Save</button>
                <button
                  className="btn bg-red-400 text-white"
                  type="button" // Make sure it's not a submit button
                  onClick={() => {
                    const modal = document.getElementById(
                      "my_modal_1"
                    ) as HTMLDialogElement;
                    if (modal !== null) {
                      modal.close(); // Close the modal when the "Close" button is clicked
                    }
                  }}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
     
      </dialog>
    </>
  );
};
