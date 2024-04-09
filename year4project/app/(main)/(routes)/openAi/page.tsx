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

interface ResponseData {
  role: string;
  content: string;
}

const askQuestion = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [responseData, setResponseData] = useState<ResponseData | null>(null);   useEffect(() => {
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
      setResponseData(response.data); // Update responseData using setState

      console.log(values);
      // Handle the response data here, you can log it or update the state as needed
      console.log(response.data);

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
    <div className="flex justify-center items-center min-h-screen gap-10 flex-col">
      <title>Pet Care Assistant</title>
      <div className="text-red-400 text-5xl px-10 py-10 font-extrabold top-10 absolute">
        <h1>Pet Care Ai Assistant</h1>
      </div>
      <div className="bg-gray-800 px-10 py-10 rounded min-w-screen">
        <div className="card card-compact w-96 bg-gray-700 shadow-xl h-96">
          <div className="h-96 py-3 px-3 text-red-400">
            {responseData && (
              <div>
                <h2>{responseData.role}</h2>
                <p>Content: {responseData.content}</p>
              </div>
            )}
          </div>

          <div className="card-body flex-row">
            <div className="gap-3 flex flex-col">
              <Controller
                control={form.control}
                name="content"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-error w-full  bg-red-100"
                  />
                )}
              />
            </div>
            <div className="flex ">
              <form
                method="dialog"
                className="flex gap-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-primary">Send</button>
              </form>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default askQuestion;
