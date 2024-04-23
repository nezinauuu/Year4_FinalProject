"use client";
import { useState, useEffect, useRef } from "react";
import { Dog } from "./dog";

export const PetAdoption = () => {
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false); // State variable to control visibility of content
  const [showDog, setShowDog] = useState(false); // State variable to control visibility of Dog component
  const contentRef = useRef<HTMLDivElement>(null); // Specify the type of the element

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const halfPageHeight = document.documentElement.scrollHeight / 2;
      setShowButton(scrollTop > halfPageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showDog && contentRef.current) {
      // Scroll to the content div when it becomes visible
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDog]);

  return (
    <div className="flex justify-center flex-col">
      <div
        onClick={() => {
          setShowDog(true); // Set showContent to true when clicked
        }}
      >
        <h1 className="text-4xl hover:text-red-400 font-bold justify-center flex text-white mb-4">
          Looking to adopt a companion?
        </h1>
      </div>
      {/* {showContent && (
        <div
          className={`duration-1000 transition-opacity ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
          ref={contentRef} // Assign the ref to the content div
        >
          <div className="text-red-400 flex-col items-center justify-center flex min-h-screen">
            <div className="text-4xl font-extrabold">
              What type of pet are you looking for?
            </div>
            <div className="flex gap-2 font-extrabold py-4">
              <button
                className="btn btn-outline btn-warning text-3xl"
                onClick={() => {
                  setShowDog(true);
                  setShowContent(false); 
                }}
              >
                Dog
              </button>
              <button className="btn btn-outline btn-info text-3xl">Cat</button>
            </div>
          </div>
        </div>
      )} */}
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
  );
};
