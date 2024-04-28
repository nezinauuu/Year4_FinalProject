import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLoaded, user } = useUser();

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
      {!user && (
        <div className="carousel border-4 border-blue-950 relative">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item w-full ${
                index === currentIndex ? "" : "hidden"
              }`}
            >
              <img
                src={item}
                className="w-full "
                alt="Dog image carousel"
                style={{ position: "relative", zIndex: "-1" }}
              />
              <div className="absolute inset-0  justify-center  text-center ">
                <div className=" flex justify-center m-5 py-5 bg-black/70 rounded-lg ">
                  <p className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                    Roughly 1.3/10 dogs that enter shelters do not survive.
                  </p>
                </div>

                <div className=" flex justify-center m-5 py-5 bg-black/70 rounded-lg">
                  <p className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                    Our goal is to prevent animals from being sent to shelters
                    by informing potential owners the correct pet practices.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {user && (
        <div className="carousel border-4 border-blue-950 relative h-[65vh] w-[40vh]">
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
                alt="Dog image carousel"
                style={{ position: "relative", zIndex: "-1" }}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Carousel;
