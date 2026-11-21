import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import FilmOverlay from "@/components/FilmOverlay";

import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--f-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--f-mono",
});

export const metadata: Metadata = {
  title: "Adamya Mehta | Full-Stack Engineer",
  description:
    "Portfolio of Adamya Mehta. AI products, MERN stack, shipped solo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
         <SmoothScroll />
          {children}
          <FilmOverlay />
      </body>
    </html>
  );
}