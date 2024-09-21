"use client";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../app/styles/embla.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("loaded");
  }, []);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="bg-white flex flex-col text-black min-h-full">
          <Header />
          <div className="">
            <main className="">{children}</main>
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
