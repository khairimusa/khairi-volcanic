"use client";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

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
        <div className=" bg-white flex flex-col text-black">
          <Header />
          <div className="bg-white w-full">
            <main className="">{children}</main>
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
