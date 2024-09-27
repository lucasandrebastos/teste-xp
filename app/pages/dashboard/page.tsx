"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

import Table from "../../components/Table/Table";
import getEmployees from "../../services/getEmployees";
import { Employee } from "../../types/Employee";
import Chart from "@/app/components/Chart/Chart";
import BreadCrumbs from "@/app/components/Breadcrumbs";
import MainContentContainer from "../../components/MainContentContainer";

export default function Page() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployees(setEmployees);
  }, []);

  return (
    <>
      <Header />
      <BreadCrumbs />
      <MainContentContainer>
        <Chart content={employees} />
        <Table title="Employees" content={employees} />
      </MainContentContainer>
    </>
  );
}
