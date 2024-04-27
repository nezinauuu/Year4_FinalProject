"use client";
import { useEffect, useRef, useState } from "react";

export const Dog = () => {
  const [showButton, setShowButton] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex justify-center flex-col bg-red-400 px-4 py-4 md:m-16 rounded-3xl">
      <div className="bg-gray-100 rounded-3xl">
        <div className="text-red-400 flex-col   py-4 px-4">
          <div className="lg:text-7xl text-3xl font-extrabold w-full justify-center flex">
            Popular Dog Breeds
          </div>

          <div className="flex font-extrabold py-4 justify-center text-gray-950 flex-wrap min-w-fit  ">
            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">French Bulldogs</h1>
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
                    <p className="text-red-600 flex justify-center">Cons</p>
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
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Golden Retriever</h1>
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
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Labrador Retriever</h1>
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
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Dachshund</h1>
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
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Bichon Frise</h1>
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

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Beagle</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://storage.needpix.com/rsynced_images/beagle-4168817_1280.jpg"
                      alt="Beagle"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      Photo by christinescha
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
                      <li>Friendly and very sociable.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Strong sense of smell.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Minimal grooming.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Easy to train and eager to please.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Strong prey drive.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Needs plenty of regular exercise.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Tend to follow their nose.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Needs early socialisation.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Beagles are good for active families. They have an excellent
                  sense of smell, making them great dogs for tracking, but they
                  can occasionally wonder off and become distracted following
                  their nose. Digging is also a common behavior of beagles if
                  left alone, along with barking. Overall, they are a well
                  rounded breed that requirest minimal maintenance and they are
                  generally healthy dogs.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Border Collie</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://live.staticflickr.com/5333/17943979742_2e7ecb223e_b.jpg"
                      alt="Beagle"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      Photo by Corinne Benavides
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
                      <li>Highly intelligent and trainable.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Extremely loyal.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Great working dogs.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Great for very active families.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Requires consistent training.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Independent natured.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Needs plenty of exercise.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>May need early socialisation.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Despite their medium size, border collies are extremely active
                  dogs which require copious amounts of exercise and training in
                  order for them to not become bored and destructive. If
                  families are planning to adopt border collies and not use them
                  as farm dogs, it is highly recommended to look into dog
                  events.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Yorkshire Terrier</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://img.goodfon.com/original/1920x1440/9/83/yorkshirskiy-terer-york-2401.jpg"
                      alt="Beagle"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      Photo by Maxima
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
                      <li>Compact size.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Hypoallergenic coat.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Playful personalities.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Long life span.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Requires consistent grooming.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Fragile physical health.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>May need early socialisation.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Can be stubborn.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Yorkshire Terriers have a relatively long lifespan compared to
                  other small breeds. Having said that, their bones are more
                  fragile along with their health as they can develop various
                  genetic health issues such as luxating patella & collapse
                  trachea. But with a bit of extra care, they are great dogs for
                  families who may be allergic and overall they have great
                  personalities and even make decent watch dogs.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Australian Shephard</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://i1.pickpik.com/photos/598/992/29/australian-shepherd-blue-merle-dog-animal-preview.jpg"
                      alt="Beagle"
                    ></img>
                    {/* <span className="text-[12px] text-gray-600">
                      Photo by Maxima
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
                      <li>Highly intelligent & obedient.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Versatile working dog.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Very athletic & energetic.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Strong work ethic.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Requires lots of exercise.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Needs mental stimulation.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Strong herding instinct.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Can be stubborn.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Australian shepherds are amazing dogs that are very obedient
                  and eager to please. They are great for farmers who need to
                  herd their animals or for owners to attend plenty of dog
                  events. If you do not fit into this category, it is highly not
                  recommended to adopt this breed as they require copious
                  amounts of mental and physical exercise.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Siberian Husky</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://images.pexels.com/photos/12891903/pexels-photo-12891903.jpeg"
                      alt="Beagle"
                    ></img>
                    {/* <span className="text-[12px] text-gray-600">
                      Photo by Maxima
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
                      <li>Affectionate & loyal.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Intelligent & independant.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Very athletic & energetic.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Playful & mischevious.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Tendancy to howl.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Can be stubborn.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Shed twice a year.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>High energy.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Siberian Huskies have a beautiful appearance and a gentle
                  temperament. They have excellent stamina and do well in cold
                  climates. But they can also be quiet mischevious and very
                  vocal, which could become a nuisance in some cases. They are
                  also known to be quite difficult to train, requiring some
                  extra patience due to their independant nature.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Chihuahua</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://live.staticflickr.com/5266/5597083289_b330aa27b0_b.jpg"
                      alt="Chihuahua"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      Photo by Jean G
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
                      <li>Compact size, ideal for travel.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Long lifespan.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Good watchdogs</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Quick learners.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Fragile Health.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Tendancy to bark.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Not suitable with young children.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Requires extra patience.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Due to their small size, chihuahas are good at living in
                  moderately sized spaces, and are ideal for travelling.
                  However, despite having a long life span, chihuahas do
                  typically have some form of health complications, such as
                  broken bones as they are quiet fragile, dental problems and
                  various genetic health issues.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Pug</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://pd.w.org/2023/10/565652112c7432867.33501444.jpg"
                      alt="Pug"
                    ></img>
                    <span className="text-[12px] text-gray-600">
                      Photo by nxchikxt
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
                      <li>Affectionate & friendly.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Low exercise needs.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Portable size.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Low shedding.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Prone to serious health problems.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Prone to obesity.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Poor temperature regulation.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Pugs are extremely friendly and affectionate dogs. They have
                  entertaining and playful personalities and are good with
                  children and other pets. Unfortunately, this breed suffers
                  many health problems. Due to their flat face, they are
                  susceptible to many respiratory issues. They may also
                  experience eye problems such as corneal ulcers, have skin fold
                  infections and also struggle to regulate their body
                  temperatures.
                </p>
              </div>
            </details>

            <details className="collapse w-full max-w-2xl px-2 py-2 hover:bg-gray-200">
              <summary className=" text-xl font-medium  border-4 border-red-400 rounded-xl">
                <div className="flex w-full">
                  <div className="w-1/2 items-center flex justify-center sm:text-4xl text-3xl font-extrabold px-4">
                    <h1 className="px-10">Shih tzu</h1>
                  </div>
                  <div className="items-center flex w-1/2 flex-col py-2 h-[200px]">
                    <img
                      className="px-5 mask mask-squircle object-contain h-full"
                      src="https://askvet.app/wp-content/uploads/2022/05/Shih-Tzu.jpg"
                      alt="Shih tzu"
                    ></img>
                    {/* <span className="text-[12px] text-gray-600">
      
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
                      <li>Friendly & playful.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Beautiful coat.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Portable size.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Low exercise.</li>
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <p className="text-red-600 text-lg  decoration-2 underline decoration-dotted flex justify-center">
                      Cons
                    </p>
                    <ul className="list-disc px-5 flex justify-center">
                      <li>Prone to serious health problems.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Prone to obesity.</li>
                    </ul>

                    <ul className="list-disc px-5 flex justify-center">
                      <li>Poor temperature regulation.</li>
                    </ul>
                  </div>
                </div>
                <p className="py-4 font-medium">
                  Shih tzu are very similiar to pugs in terms of temperamant,
                  size and health. They are a very friendly and affectionate
                  breed however due to their brachycephalic (flat face), they
                  can often suffer from respitory problems along with poor body
                  temperature regulation. They may also suffer from obesity, may
                  encounter skin fold infections, and have dental issues.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
