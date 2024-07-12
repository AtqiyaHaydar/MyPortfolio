import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atqiya Haydar",
  description: "A software engineer and UI/UX designer with 2+ years of experience in both fields. Known for the ability to develop excellent websites with captivating designs. Adaptable and collaborative.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atqiya-portfolio.vercel.app/',
    title: "Atqiya Haydar",
    description: "A software engineer and UI/UX designer with 2+ years of experience in both fields. Known for the ability to develop excellent websites with captivating designs. Adaptable and collaborative.",
    siteName: 'AtqiyaHaydar'
  }
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
      </body>
    </html>
  );
}
