import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag's Portfolio",
  description:
    "Anurag Sahu's portfolio website, Anurag Sahu is a fullstack web-developer, engineer, frontend developer, backend developer, React, Next Js, Mongo DB, Firebase, VS code, Freelance, Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
