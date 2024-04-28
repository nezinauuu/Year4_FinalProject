"use client";
import dynamic from "next/dynamic";


const Carousel = dynamic(() => import("./carousel"), { ssr: false });

const DynamicCarousel = () => {
  return <Carousel />;
};

export default DynamicCarousel;
