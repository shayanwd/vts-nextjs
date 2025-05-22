import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "NextWeb - Modern Web Applications",
  description: "Building modern web applications with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Header />
        <div className="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
