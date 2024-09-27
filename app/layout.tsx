import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import BreadCrumbs from "./components/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voyager",
  description: "Um teste para uma vaga frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`p-7 ${inter.className}`}>
        <Header />
        {/* {url_atual} */}
        <BreadCrumbs />
        {children}
      </body>
    </html>
  );
}
