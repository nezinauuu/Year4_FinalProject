"use client";
import { TiDelete } from "react-icons/ti";
import { UploadDropzone } from "@/lib/uploadthing";
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
      <div className="flex  justify-center">
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
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
