"use client";
import { useEffect, useRef, useState } from "react";

export const Dog = () => {
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex justify-center flex-col bg-red-400 px-4 py-4 md:m-16 rounded-3xl">
      <div className="bg-gray-200 rounded-3xl">
        <div className="text-red-400 flex-col min-h-screen  py-4 px-4">
          <div className="lg:text-7xl text-3xl font-extrabold w-full border justify-center flex">
            Top 10 Dog Choices
          </div>

          <div className="flex  font-extrabold py-4 text-gray-950 flex-wrap min-w-fit border-4 border-gray-950">
            <div className="w-full max-w-3xl   px-2 py-2 ">
              <div className="border-2  border-red-400 border-l-8 flex  ">
                <div className="w-2/3 border-4 border-red-400 ">
                  <h1 className="text-4xl">Dog1</h1>
                  <p className="text-red-400">Features</p>
                  <ul className="list-disc px-5 ">
                    <li className="">Mild-Tempered</li>
                  </ul>
                </div>
                <div className="items-center flex w-1/3 justify-end border-4 border-red-400">
                  <img src="https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg"></img>
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl   px-2 py-2 ">
              <div className="border-2  border-red-400 border-l-8 flex  ">
                <div className="w-2/3 border-4 border-red-400 ">
                  <h1 className="text-4xl">Dog1</h1>
                  <p className="text-red-400">Features</p>
                  <ul className="list-disc px-5 ">
                    <li className="">Mild-Tempered</li>
                  </ul>
                </div>
                <div className="items-center flex w-1/3 justify-end border-4 border-red-400">
                  <img src="https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg"></img>
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl    px-2 py-2 ">
              <div className="border-2  border-red-400 border-l-8 flex  ">
                <div className="w-2/3 border-4 border-red-400 ">
                  <h1 className="text-4xl">Dog1</h1>
                  <p className="text-red-400">Features</p>
                  <ul className="list-disc px-5 ">
                    <li className="">Mild-Tempered</li>
                  </ul>
                </div>
                <div className="items-center flex w-1/3 justify-end border-4 border-red-400">
                  <img src="https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
