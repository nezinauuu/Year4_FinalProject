import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "@/components/ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PetConnect - Dashboard",
  description: "PetConnect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>

        <html lang="en">
          <link rel="icon" type="image/png" href="bone.png"></link>
          <body
            className={`bg-gradient-to-br from-gray-900 to-gray-800 ${inter.className}`}
          >
            <div className="">{children}</div>

            <Footer />
          </body>
        </html>

    </ClerkProvider>
  );
}
