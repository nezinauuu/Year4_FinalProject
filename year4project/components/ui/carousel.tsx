import { useEffect, useState } from "react";



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = ["/dog1.png", "/dog2.png", "/dog3.png"];

  const nextSlide = () => {
    console.log("Current index before update:", currentIndex);
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1;
      console.log("Next index:", nextIndex);
      return nextIndex;
    });
  };

  useEffect(() => {
    console.log("Setting up interval...");
    const interval = setInterval(nextSlide, 3000);
    return () => {
      console.log("Clearing interval...");
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
      <div className="carousel border-4 border-blue-950">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            <img
              src={item}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Carousel;
