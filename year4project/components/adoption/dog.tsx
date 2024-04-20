"use client";
import { useEffect, useRef, useState } from "react";

export const Dog = () => {
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex justify-center flex-col bg-red-400 px-4 py-4 md:m-16 rounded-3xl">
      <div className="bg-gray-100 rounded-3xl">
        <div className="text-red-400 flex-col min-h-screen  py-4 px-4">
          <div className="lg:text-7xl text-3xl font-extrabold w-full justify-center flex">
            10 Popular Dog Choices
          </div>

          <div className="flex font-extrabold py-4 justify-center text-gray-950 flex-wrap min-w-fit  ">
            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center text-4xl font-extrabold px-4">
                    <h1 className="px-10">1. French Bulldogs</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg"
                      alt="Golden Retriever"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      © Kavita/stock.adobe.com
                    </span>
                  </div>
                </div>
              </summary>
              <div className="collapse-content bg-red-400/90 rounded-xl flex flex-col ">
                <div className="flex-row flex">
                  <div className="w-1/2">
                    <p className="text-yellow-400 decoration-2 underline decoration-dotted justify-center flex">
                      Features
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Small-sized breed.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Muscular build.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Moderate exercise needs.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Low-maintenance grooming.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-blue-600 flex justify-center">Cons</p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Prone to respiratory issues.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Potential health problems.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Moderate shedding.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Stubborn and challenging to train.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  French Bulldogs can be great pets, as they can be low
                  maintenance, affectionate and a good choice for a family home.
                  However, they are often prone to respiratory problems can be
                  difficult to train due to their stubborness.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center text-4xl font-extrabold px-4">
                    <h1 className="px-10">2. Golden Retriever</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://c1.peakpx.com/wallpaper/1019/843/819/dog-puppy-golden-retriever-wallpaper-preview.jpg"
                      alt="Golden Retriever"
                    ></img>
                    <span className="text-[12px] text-gray-600"></span>
                  </div>
                </div>
              </summary>
              <div className="collapse-content bg-red-400/90 rounded-xl flex flex-col ">
                <div className="flex-row flex">
                  <div className="w-1/2">
                    <p className="text-yellow-400 decoration-2 underline decoration-dotted text-lg justify-center flex">
                      Features
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Friendly and gentle temperament.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Healthy breed with a long lifespan</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Highly trainable and intelligent.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Very active.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Lots of shedding.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Occasional Heart problems.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Requires lots of attention.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li className="">Strong prey drive.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Golden Retrievers are great family dogs. They are extremely
                  friendly and can be great for therapy. But it is important to
                  remember that they are still big dogs and require plenty
                  amounts of exercise.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center text-4xl font-extrabold px-4">
                    <h1 className="px-10">3. Labrador Retriever</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://www.dailypaws.com/thmb/kg_CFzpaSrapkge3e-5lqWzgSGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/labrador-retriever-water-black-1241266847-2000-cd9fa6ddff914a8eb30325696d0b9583.jpg"
                      alt="Labrador Retriever"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      Tom Meaker / EyeEm / Getty
                    </span>
                  </div>
                </div>
              </summary>
              <div className="collapse-content bg-red-400/90 rounded-xl flex flex-col ">
                <div className="flex-row flex">
                  <div className="w-1/2">
                    <p className="text-yellow-400 decoration-2 underline decoration-dotted text-lg justify-center flex">
                      Features
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Very Intelligent and trainable.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Good with other pets and animals</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Generally healthy breed.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Does well in various living spaces.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Highly energetic.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Requires plenty of daily exercise.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Lots of shedding.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Occasional joint issues.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Despite being large dogs, Labradors do decently well in
                  various living spaces such as family homes or even
                  appartments. They are extremely intelligent and are amazing
                  with children and other household pets. However, a labrador is
                  only suitable for very active families who are ready to go for
                  multiple walks a day. Looking into dog events is also
                  advisable.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center text-4xl font-extrabold px-4">
                    <h1 className="px-10">4.Dachshund</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://images.pexels.com/photos/4148014/pexels-photo-4148014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Dachshund"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      Photo by Dominika Roseclay
                    </span>
                  </div>
                </div>
              </summary>
              <div className="collapse-content bg-red-400/90 rounded-xl flex flex-col ">
                <div className="flex-row flex">
                  <div className="w-1/2">
                    <p className="text-yellow-400 decoration-2 underline decoration-dotted text-lg justify-center flex">
                      Features
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Very affectionate and loyal.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Small size.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Easy to train.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Can be versatile in activities.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Prone to obesity & back problems.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Can be quiet stubborn.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Requires extra care when training.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>May have separation anxiety.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Dachshunds need a bit of extra patience, they are pretty
                  stubborn and you may find difficulties when attempting to
                  train them. Also, due to their somewhat fragile nature it is
                  also not very advisable to adopt a dachshund with other small
                  children who may accidently cause injuries. That being said,
                  they are still wonderful dogs, and with a bit of extra care,
                  can be very entertaining and playful companions. Ontop of
                  this, they are also known to be decent guard dogs who will
                  alert you of any possible intruders.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center text-4xl font-extrabold px-4">
                    <h1 className="px-10">5. Bichon Frise</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://cdn.discordapp.com/attachments/647530722789425193/1231262115369844756/tempFileForShare_20240420-161555.jpg?ex=66365134&is=6623dc34&hm=87d85d43e85bec68d036572f04a70adab41d2bf29b222f8be2aa84240af19673&"
                      alt="Dachshund"
                    ></img>
                    {/* <span className="text-[12px] text-gray-600">
                      Photo by Dominika Roseclay
                    </span> */}
                  </div>
                </div>
              </summary>
              <div className="collapse-content bg-red-400/90 rounded-xl flex flex-col ">
                <div className="flex-row flex">
                  <div className="w-1/2">
                    <p className="text-yellow-400 decoration-2 underline decoration-dotted text-lg justify-center flex">
                      Features
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Very affectionate and friendly.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Hypoallergenic coat.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Small size.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Generally Healthy.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Plenty of grooming necessary.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Prone to separation anxiety.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Requires mental stimulation.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Occasionally stubborn.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Bichon Frise are amazing family dogs, they are very playful
                  and have outgoing personalities. They are also good with
                  children along with other pets and are generally a healthy and
                  long living breed. Although a nice long walk and a bit of play
                  time is enough to keep them happy, more care and patience is
                  needed when grooming them. Regular brushing and occasional
                  professional grooming is necessary to prevent matting. They
                  can also be allergic to certain foods, which in most cases are
                  chicken or eggs.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
