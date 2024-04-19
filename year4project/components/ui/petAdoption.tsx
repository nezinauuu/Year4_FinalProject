"use client"
import { useEffect, useRef, useState } from "react";

export const PetAdoption = () => {
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

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
    if (showContent && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContent]);

  return (
    <div className="flex justify-center flex-col">
      <div
        onClick={() => {
          setShowContent(true);
        }}
      >
        <h1 className="text-4xl hover:text-red-400 font-bold justify-center flex text-white mb-4">
          Looking to adopt a companion?
        </h1>
      </div>
      {showContent && (
        <div
          ref={contentRef}
          className={`duration-1000 transition-opacity ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-red-400 flex-col min-h-screen items-center justify-center flex">
            <div className="text-4xl font-extrabold">
              What type of pet are you looking for?
            </div>
            <div className="flex gap-2 font-extrabold py-4">
              <button className="btn btn-outline btn-warning text-3xl">
                Dog
              </button>
              <button className="btn btn-outline btn-info text-3xl">Cat</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
