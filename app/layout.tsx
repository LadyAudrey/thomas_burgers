import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas Burger",
  description: "Homepage for Thomas Burger of LA",
};

import Header from "./components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-screen bg-white">
      <body className="max-w-[1280px] mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
