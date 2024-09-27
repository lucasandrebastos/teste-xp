"use client";
import { useState } from "react";
import Page from "./pages/dashboard/page";
import { Server } from "miragejs";
import { mockEmployees } from "./mocks/mock-employees";

new Server({
  routes() {
    this.get("/api/employees", () => {
      return mockEmployees;
    });
    this.get("api/employees/2");
  },
});

export default function Home() {
  const [theme, setTheme] = useState("black");
  return (
    <main className={`h-screen bg-bgprimary p-6 theme-${theme}`}>
      <Page />
    </main>
  );
}
