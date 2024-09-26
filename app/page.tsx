"use client";
import { useState } from "react";
import Page from "./dashboard/page";

export default function Home() {
  const [theme, setTheme] = useState("black");
  return (
    <main className={`bg-bgprimary p-6 theme-${theme}`}>
      <Page />
    </main>
  );
}
