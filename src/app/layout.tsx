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
        <div className="min-h-screen bg-red flex flex-col">
          <Header />
          <div className="flex flex-1">
            <main className="flex-1 p-4 lg:p-8 ml-0 lg:ml-64 transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
