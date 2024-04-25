"use client";
import { useState, useEffect, useRef } from "react";
import { Dog } from "./dog";

export const PetAdoption = () => {
  const [showButton, setShowButton] = useState(true);
  const [showDog, setShowDog] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const halfPageHeight = document.documentElement.scrollHeight / 2;
      setShowButton(scrollTop < halfPageHeight || showDog);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDog]);

  useEffect(() => {
    if (showDog && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDog]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        {showButton && (
          <button
            className="justify-center font-bold max-w-[100vh] border-2 border-gray-950 text-white bg-red-400 hover:text-gray-950 px-4 py-2 rounded-lg shadow-lg"
            onClick={() => {
              setShowDog(true);
              setShowButton(false);
            }}
          >
            <h1 className="text-4xl hover:text-red-400 font-bold justify-center flex text-white mb-4">
              Looking to adopt a Dog?
            </h1>
          </button>
        )}
        {showDog && (
          <div
            className={`duration-1000 transition-opacity ${
              showDog ? "opacity-100" : "opacity-0"
            }`}
            ref={contentRef}
          >
            <Dog />
          </div>
        )}
      </div>
    </div>
  );
};
