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

const schema = Joi.object({
  message: Joi.string(),
  id: Joi.string(),
  imageUrl: Joi.string()
});

export const CreateMessage = ({ forumId }: { forumId: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log("forum id = "+ forumId)

  const form = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      message: "",
      id: forumId,
      imageUrl:"",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: { message: string; id: string }) => {


    try {
      await axios.post("/api/chat", values);
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
        <div className="modal-box bg-slate-700 border text-gray-300 ">
          <h3 className="font-bold text-lg">
            Enter your Forum information below:
          </h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>

          <div className="gap-3 flex flex-col">
            <Controller
              control={form.control}
              name="message"
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Content"
                  className="input input-bordered input-error w-full max-w-xs bg-red-100 text-gray-900 py-3 min-h-fit"
                />
              )}
            />

            <Controller
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <div className="border">
                  <ImageUpload
                    endpoint="forumImage"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </div>
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
