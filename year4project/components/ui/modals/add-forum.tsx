"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlineForum } from "react-icons/md";
import { ImageUpload } from "@/components/imageUpload";
import { SignInButton, useUser } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";

import { IoIosCloseCircle } from "react-icons/io";
const schema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  imageUrl: Joi.string().allow("").optional(),
});

export const CreateForum = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isLoaded, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: {
    name: string;
    description: string;
    imageUrl?: string;
  }) => {
    console.log(values);

    try {
      const dataToSend = {
        name: values.name,
        description: values.description,
        imageUrl: values.imageUrl || undefined,
      };
      await axios.post("/api/forums", dataToSend);
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

  if (!user) {
    return (
      <>
        <div
          className="right-20 fixed bottom-20 "
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement;
            if (modal !== null) {
              modal.showModal();
            }
          }}
        >
          <button className="btn btn-circle btn-outline text-3xl h-20 w-20 hover:text-red-400 hover:bg-red-300">
            <MdOutlineForum />
          </button>
        </div>

        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box bg-slate-100 border text-gray-900 flex justify-center flex-col">
            <h3 className="font-bold text-lg justify-center flex">
              You must sign in to create a forum.
            </h3>

            <div className="flex py-2 modal-action justify-center">
              <SignInButton>
                <button className="btn bg-red-400 hover:bg-emerald-400 text-white w-1/2">
                  Sign in.
                </button>
              </SignInButton>

              <button
                className="text-red-400 text-3xl absolute top-2 right-2 z-10 hover:text-red-500 border rounded-full border-gray-500"
                type="button"
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_1"
                  ) as HTMLDialogElement;
                  if (modal !== null) {
                    modal.close(); // Close the modal when the "Close" button is clicked
                  }
                }}
              >
                <IoIosCloseCircle />
              </button>
            </div>
          </div>
        </dialog>
      </>
    );
  }

  return (
    <>
      <div
        className="right-20 fixed bottom-20 "
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement;
          if (modal !== null) {
            modal.showModal();
          }
        }}
      >
        <button className="btn btn-circle btn-outline text-3xl h-20 w-20 hover:text-red-400 hover:bg-red-300">
          <MdOutlineForum />
        </button>
      </div>

      <dialog id="my_modal_1" className="modal w-full ">
        <div className="lg:w-1/3 px-8 lg:px-10 py-10 rounded-xl bg-gray-100 text-gray-900 ">
          <h3 className="font-bold text-lg">
            Enter your Forum information below:
          </h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>

          <div className="gap-3 flex-col flex justify-center ">
            <div className="flex justify-center flex-col items-center gap-2">
              <Controller
                control={form.control}
                name="name"
                render={({ field }) => (
                  <input
                    {...field}
                    maxLength={80}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-error lg:w-2/3  bg-white"
                  />
                )}
              />

              <Controller
                control={form.control}
                name="description"
                render={({ field }) => (
                  <input
                    {...field}
                    maxLength={200}
                    type="text"
                    placeholder="Description"
                    className="input input-bordered input-error lg:w-2/3  bg-white"
                  />
                )}
              />
              <Controller
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <div className=" ">
                    <ImageUpload
                      endpoint="forumImage"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </div>
                )}
              />
            </div>
          </div>
          <div className="flex py-2 modal-action">
            <form
              method="dialog"
              className="flex gap-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-emerald-400 text-white">
                Create Forum
              </button>
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
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );

  if (!user) {
  }
};
