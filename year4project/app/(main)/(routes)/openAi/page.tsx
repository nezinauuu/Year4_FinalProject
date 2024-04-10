"use client";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { PiDogFill } from "react-icons/pi";

const schema = Joi.object({
  content: Joi.string(),
});

interface Message {
  role: string;
  content: string;
}

const PetCareAssistant = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      content: "",
    },
  });

  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  if (!user) return null;

  const onSubmit = async (values: { content: string }) => {
    try {
      const response = await axios.post("/api/openAi", values);
      const responseData = response.data;

      // Ensure responseData is a string
      const responseDataString =
        typeof responseData === "object"
          ? JSON.stringify(responseData)
          : responseData;

      // Add user message and AI response to messages array
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: values.content },
        { role: "AI", content: responseDataString }, // Use the stringified responseData
      ]);

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
    <div className="flex justify-center items-center  min-h-screen gap-10 flex-col">
      <title>PetLink Assistant</title>
      <div className="text-red-400 text-5xl flex flex-row px-10 py-10 font-extrabold top-10 absolute">
        <h1>PetLink</h1>
        <div className="text-red-400 text-lg">
          <PiDogFill /> <h1 className="text-xl">Ai Assistant</h1>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg m-5 border border-red-100  ">
        <div className="flex justify-center flex-col items-center gap-5 m-5">
          <div className="flex justify-center text-red-400 text-xl font-bold">
            PetLink Virtual Ai Assistant
          </div>
          <div className="card card-compact w-96 bg-gray-700  shadow-xl h-96 border-2 border-blue-200 ">
            <div className="h-96 py-3 px-3  text-red-400 overflow-y-auto">
              {messages.map((message, index) => (
                <div className="py-2" key={index}>
                  {message.role === "user" ? (
                    <div className="flex flex-col justify-center items-center  ">
                      <p className="font-bold">{user.firstName}: </p>{" "}
                      <p>{message.content}</p>
                    </div>
                  ) : (
                    <div className="text-blue-200 flex flex-col justify-center items-center ">
                      <p className="font-bold ">PetLink:</p>{" "}
                      <p>{message.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="card-body flex-row border-t-2 border-t-red-400">
            <div className="gap-3 flex flex-col ">
              <Controller
                control={form.control}
                name="content"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Cats or dogs?"
                    className="input border-red-400 w-full text-gray-400"
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
                <button className="btn hover:bg-red-400">Send</button>
              </form>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareAssistant;
