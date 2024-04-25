import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { csv } from "d3-fetch"; // Import the CSV parsing function from d3-fetch
import { MdOutlinePets } from "react-icons/md";
import { GiTombstone } from "react-icons/gi";
import { FaHouseMedical } from "react-icons/fa6";
import Link from "next/link";

export const DogStats = () => {
  const [sum3To7, setSum3To7] = useState(0); // State to store the sum of columns 3 to 7
  const [sum8To12, setSum8To12] = useState(0); // State to store the sum of columns 8 to 12
  const [sum13To16, setSum13To16] = useState(0); // State to store the sum of columns 8 to 12
  useEffect(() => {
    // Function to fetch and process CSV data
    const fetchAndProcessData = async () => {
      try {
        const data = await csv("animalShelterGlobal.csv"); // Fetch CSV data
        let sum3To7 = 0;

        let sum8To12 = 0;
        let sum13To16 = 0;

        // Sum columns 3 to 7
        for (let i = 3; i <= 7; i++) {
          const column = data.columns[i];
          sum3To7 += data.reduce(
            (acc, row) => acc + parseFloat(row[column]),
            0
          );
        }

        // Sum columns 8 to 12
        for (let i = 8; i <= 12; i++) {
          const column = data.columns[i];
          sum8To12 += data.reduce(
            (acc, row) => acc + parseFloat(row[column]),
            0
          );
        }

        // Sum columns 13 to 16
        for (let i = 13; i <= 16; i++) {
          const column = data.columns[i];
          sum13To16 += data.reduce(
            (acc, row) => acc + parseFloat(row[column]),
            0
          );
        }

        setSum3To7(sum3To7); // Update the state with the sum of columns 3 to 7
        setSum8To12(sum8To12); // Update the state with the sum of columns 8 to 12
        setSum13To16(sum13To16); // Update the state with the sum of columns 13 to 16
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchAndProcessData(); // Call the function to fetch and process data
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="flex-col shadow justify-center items-center text-red-400">
      <div className="flex justify-center flex-wrap py-5">
        <div className="stat lg:w-1/6 border-slate-400 border">
          <div className="stat-figure text-secondary text-5xl">
            <MdOutlinePets />
          </div>
          <div className="stat-title">Canine intakes</div>
          <div className="stat-value text-blue-400">{sum3To7}</div>
          <div className="stat-desc">2020-2023</div>
        </div>

        <div className="stat lg:w-1/6 border-slate-400 border">
          <div className="stat-figure text-secondary text-5xl">
            <FaHouseMedical />
          </div>
          <div className="stat-title">Shelter Live Outcomes</div>
          <div className="stat-value text-green-400">{sum8To12}</div>
          <div className="stat-desc">↗︎(86.59%)</div>
        </div>

        <div className="stat lg:w-1/6 border-slate-400 border">
          <div className="stat-figure text-secondary text-5xl">
            <GiTombstone />
          </div>
          <div className="stat-title">Shelter Dead Outcomes</div>
          <div className="stat-value text-red-400">{sum13To16}</div>
          <div className="stat-desc">↘︎(12.66%)</div>
        </div>
      </div>
      <Link href="https://www.shelteranimalscount.org/">
        <div className="stat-desc flex justify-center items-center hover:text-red-400">
          Shelter Animal Count - The National Database
        </div>
      </Link>
    </div>
  );
};
