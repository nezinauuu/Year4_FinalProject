"use client";

import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const schema = Joi.object({
  content: Joi.string(),
});

const askQuestion = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      content: "",
    },
  });

 const onSubmit = async (values: { content: string }) => {
   try {
     const response = await axios.post("/api/openAi", values);
     const responseData = response.data; // Assuming your server returns some data

     console.log(values)
     // Handle the response data here, you can log it or update the state as needed
     console.log(responseData);

     form.reset();
     router.refresh();
   } catch (error) {
     console.log(error);
   }
 };


  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-red-500">AA</div>

      <div className="gap-3 flex flex-col">
        <Controller
          control={form.control}
          name="content"
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Name"
              className="input input-bordered input-error w-full max-w-xs bg-red-100"
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
  );
};

export default askQuestion;
