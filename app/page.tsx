"use client";
import { useState } from "react";
import Page from "./dashboard/page";
import { Server } from "miragejs";
import { mockEmployees } from "./mocks/mock-employees";

export default function Home() {
  const [theme, setTheme] = useState("black");
  return (
    <>
      <main className={`h-screen bg-bgprimary p-6 theme-${theme}`}></main>
    </>
  );
}
