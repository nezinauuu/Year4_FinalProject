import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    "https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    "https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
  ];

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
      <div className="w-64 carousel rounded-box">
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
