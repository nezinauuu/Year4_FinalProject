"use client";
// DynamicCarousel.tsx
import dynamic from "next/dynamic";

// Dynamically import the Carousel component
const Carousel = dynamic(() => import("./carousel"), { ssr: false });

const DynamicCarousel = () => {
  return <Carousel />;
};

export default DynamicCarousel;
