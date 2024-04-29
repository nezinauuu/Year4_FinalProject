"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlineForum } from "react-icons/md";

import { SignInButton, useUser } from "@clerk/nextjs";
import { IoIosCloseCircle } from "react-icons/io";

const schema = Joi.object({
  message: Joi.string(),
  id: Joi.string(),
  imageUrl: Joi.string().allow("").optional(),
});

export const CreateMessage = ({ forumId }: { forumId: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { isLoaded, user } = useUser();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log("forum id = " + forumId);

  const form = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      message: "",
      id: forumId,
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: {
    message: string;
    id: string;
    imageUrl?: string;
  }) => {
    try {
      // If imageUrl is an empty string, set it to undefined to avoid sending it unnecessarily
      const dataToSend = {
        message: values.message,
        id: values.id,
        imageUrl: values.imageUrl || undefined,
      };
      await axios.post("/api/chat", dataToSend);
      form.reset();
      router.refresh();
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
              You must sign in to send a message.
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
        <div className="modal-box bg-gray-100 border text-gray-900 lg:w-1/3 ">
          <div className="items-center">
            <h3 className="font-bold text-lg">New message:</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
          </div>
          <div className="gap-3 flex flex-col">
            <Controller
              control={form.control}
              name="message"
              render={({ field }) => (
                <textarea
                  {...field}
                  maxLength={1000}
                  placeholder="Content"
                  className="input input-bordered input-error w-full max-w-xs bg-white text-gray-900 py-3 min-h-fit"
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
              <button
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_1"
                  ) as HTMLDialogElement;
                  if (modal !== null) {
                    modal.close(); // Close the modal when the "Close" button is clicked
                  }
                }}
                className="btn bg-emerald-400 text-white"
              >
                Save
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
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
