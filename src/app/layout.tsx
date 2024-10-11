import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "PrimeVault",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.className} overflow-x-hidden antialiased`}
      >
        <Navbar/>
        {children}
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}
