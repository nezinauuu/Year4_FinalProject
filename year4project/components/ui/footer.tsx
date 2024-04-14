import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { AddPetForm } from "../ui/modals/add-pet";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaDog } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export const Footer = async () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-900 text-red-400">
      
        <aside>
          <FaDog className="text-4xl" />
          <p className="font-bold">
            SchlopSchlop Industries Ltd. <br />
            Providing woof woof since 2023
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://github.com/nezinauuu">
              <FaGithub className="text-2xl hover:text-slate-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/benas-bubulas-6a7861208/">
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </Link>
          </div>
        </nav>
      
    </footer>
  );
};
