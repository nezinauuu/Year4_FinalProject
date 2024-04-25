"use client";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { PiDogFill } from "react-icons/pi";
import Link from "next/link";
import { GiDogHouse } from "react-icons/gi";
import { SiRobotframework } from "react-icons/si";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineForum } from "react-icons/md";

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
    return null;
  }

  if (!user) return null;

  const isLoading = form.formState.isSubmitting;

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
    <div className="bg-gray-900">
      <title>Woof Assistant</title>
      <div className="flex py-4 px-4  bg-gray-900">
        <div className=" w-4/12">
          <Link href={"/"}>
            <h1 className="flex text-3xl font-bold bg-gray-900 text-red-400 hover:text-emerald-400 duration-700">
              WoofWoofWorld
              <GiDogHouse />
            </h1>
          </Link>
        </div>
        <div className="gap-2 flex-row flex items-center text-red-400 text-lg font-extrabold  w-4/12 justify-center">
          <Link href={"/openAi"}>
            <div className="hover:text-emerald-400 duration-700 flex gap-2">
              <p>WoofAi</p> <SiRobotframework />
            </div>
          </Link>
          <div className="text-gray-600">/</div>
          <Link href={"/statistics"}>
            <div className="hover:text-emerald-400 duration-700 gap-2 flex">
              <p>Statistics</p> <ImStatsBars />
            </div>
          </Link>
          <div className="text-gray-600">/</div>
          <Link href={"/forums"}>
            <div className="hover:text-emerald-400 duration-700 gap-2 flex">
              <p>Forums</p>
              <MdOutlineForum />
            </div>
          </Link>
        </div>
        <div className="w-4/12  flex justify-end">
          <UserButton />
        </div>
      </div>
      <div className=" flex justify-center py-10 px-10 text-red-400 text-5xl font-bold">
        WoofWoofWorld Virtual Ai Assistant
      </div>
      <div className="flex  items-center  min-h-screen  flex-col">
        <div className="bg-gray-100 rounded-lg m-5 border border-red-100 shadow-xl lg:w-1/2">
          <div className="flex justify-center flex-col items-center gap-5 m-5">
            <div className="  text-red-400 text-xl font-bold">
              WoofWoofWorld Virtual Ai Assistant
            </div>
            <div className="card card-compact bg-gray-100  shadow-lg border-2  w-full">
              <div className="h-96 py-3 px-3  text-red-400 overflow-y-auto font-bold">
                {messages.map((message, index) => (
                  <div className="py-2" key={index}>
                    {message.role === "user" ? (
                      <div className="flex flex-col justify-center items-center  ">
                        <p className="font-extrabold text-xl">
                          {user.firstName}:{" "}
                        </p>{" "}
                        <p>{message.content}</p>
                      </div>
                    ) : (
                      <div className="text-blue-400 flex flex-col justify-center items-center ">
                        <p className="font-extrabold text-xl">Woof Ai:</p>{" "}
                        <p>{message.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-body flex-row border-t-2 border-t-red-400  w-full ">
              <div className="gap-3 flex flex-col  w-full">
                <Controller
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="What type of pet is suitable for me?"
                      className="input border-red-400  text-gray-400 bg-slate-100"
                    />
                  )}
                />
              </div>
              <div className="flex ">
                <form
                  method="dialog"
                  className="flex gap-2 "
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <button
                    className="btn hover:bg-red-500 bg-red-400 text-white text-lg "
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="loading loading-infinity loading-lg bg-red-400 "></span>
                    ) : (
                      "Send"
                    )}
                  </button>
                </form>
              </div>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareAssistant;
