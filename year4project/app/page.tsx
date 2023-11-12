"use client";
import backgroundImage from "@/images/background-top.svg"; // import the SVG file
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [animalName, setAnimalName] = useState();
  const [litterSize, setLitterSize] = useState();
  var name = "bichon frise";
  //
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/animals?name=" + name,
        {
          headers: {
            "X-Api-Key": "BLt0cxhoWxPWMg/NpDDegQ==LRM1c7qtCj8n1DUA",
          },
        }
      );
      console.log(response.data);
      setAnimalName(response.data[0].name);
      setLitterSize(response.data[0].characteristics.average_litter_size);
    }
    fetchData();
  }, []);

  return (
    <main className="flex flex-col p-12 bg-[url('../images/background-top.svg')] bg-cover min-h-screen">
      <title>Pets</title>
      <div className="flex justify-center py-4">
        <h1 className=" backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 max-w-4xl text-white">
          Welcome to Pets App
          {animalName},{litterSize}
        </h1>
      </div>

      <div className="flex justify-center flex-row py-9  gap-32  m-w-64">
        <div className="flex bg-[url('../images/lucky.jpg')] bg-cover box-border w-96 h-96 p-4 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 border-4 border-gray-900"></div>
        <div className="flex flex-col justify-center max-w-2xl gap-5">
          <div className="backdrop-blur-md bg-white/10 border-4 ">
            <h1 className="text-4xl font-bold text-white m-3">Your Pets</h1>
            <p className="text-white m-3">
              Review your pets and share your experience with others.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border-4 ">
            <h1 className="text-4xl font-bold text-white m-3">
              Looking for a new animal?
            </h1>
            <p className="text-white m-3">
              Check out important information about the animal you want to
              adopt.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
