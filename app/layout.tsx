import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import useAos from "@/components/useAos";
import AnimeGirl from "@/components/AnimeGirl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atqiya's Portfolio",
  description: "Create with Next JS and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center w-full`}>
        <Header />
        {children}
        <AnimeGirl />
      </body>
    </html>
  );
}
