"use client";
import { TiDelete } from "react-icons/ti";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import Image from "next/image";

interface ImageUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "forumImage" | "chatImage";
}
export const ImageUpload = ({
  onChange,
  value,
  endpoint,
}: ImageUploadProps) => {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className="flex justify-center">
        <div className="relative h-40 w-40">
          <Image fill src={value} alt="Upload" className="rounded-xl" />
          <button
            onClick={() => onChange("")}
            className=" right-2 text-4xl absolute"
          >
            <TiDelete />
          </button>
        </div>
      </div>
    );
  }

  return (
    <UploadButton
      className="mt-4 ut-button:bg-red-500 ut-button:ut-readying:bg-red-500/50"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};
