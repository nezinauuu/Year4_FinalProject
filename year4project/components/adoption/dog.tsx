"use client";
import { useEffect, useRef, useState } from "react";

export const Dog = () => {
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex justify-center flex-col">
      <div>
        <div className="text-red-400 flex-col min-h-screen border py-4 px-4">
          <div className="text-7xl font-extrabold w-full border justify-center flex">Dog</div>
          <div className="flex gap-2 font-extrabold py-4">
            <button className="btn btn-outline btn-warning text-3xl">
              Dog
            </button>
            <button className="btn btn-outline btn-info text-3xl">Cat</button>
          </div>
        </div>
      </div>
    </div>
  );
};
