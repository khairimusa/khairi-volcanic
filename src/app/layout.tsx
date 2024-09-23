"use client";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../app/styles/embla.css";
import Header from "@/components/Header";
import { ContextWrapper } from "@/context";

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
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <ContextWrapper>
          <Header />
          <main>{children}</main>
        </ContextWrapper>
      </body>
    </html>
  );
}
