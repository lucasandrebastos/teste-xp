"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

import Table from "../../components/Table/Table";
import getEmployees from "../../services/employees";
import { Employee } from "../../types/Employee";

export default function Page() {
  const [employees, setEmployees] = useState(Array<Employee>);
  useEffect(() => {
    getEmployees(setEmployees);
  }, []);

  return (
    <>
      <Header />
      <div className="text-secondary m-5">
        <a href="#" className="m-2">
          Home
        </a>
        /
        <a href="#" className=" m-2">
          Reports and Insights
        </a>
      </div>
      <div className="flex gap-8">
        <div className="bg-bgsecondary w-1/3 rounded-md p-4 shadow-xl">
          <h2>Employees by department</h2>
          <p className="text-secondary">Departments</p>
          <div id="CHART" className="flex flex-col items-center">
            <div className="h-56 w-56 my-12 rounded-full bg-purple-600" />
            <div id="legenda" className="grid grid-cols-3 gap-2 ">
              <div className="flex flex-col items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-purple-700" />
                <span className="text-sm text-primary mt-1 ">Finance</span>
              </div>
              <div className="flex flex-col items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-purple-700" />
                <span className="text-sm text-primary mt-1 ">
                  Human Resources
                </span>
              </div>
              <div className="flex flex-col items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-purple-700" />
                <span className="text-sm text-primary mt-1 xl text-center">
                  Research and Development
                </span>
              </div>
              <div className="flex flex-col items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-purple-700" />
                <span className="text-sm text-primary mt-1 ">Marketing</span>
              </div>
              <div className="flex flex-col items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-purple-700" />
                <span className="text-sm text-primary mt-1 ">Operations</span>
              </div>
              <div className="flex flex-col items-center mb-3">
                <div className="h-4 w-4 rounded-full bg-purple-700" />
                <span className="text-sm text-primary mt-1  text-center">
                  IT
                </span>
              </div>
              <div className="flex flex-col items-center mb-3 ">
                <div className="h-4 w-4 rounded-full bg-purple-700" />
                <span className="text-sm text-primary mt-1  ">Sales</span>
              </div>
            </div>
          </div>
        </div>

        <Table title="Employees" content={employees} />
      </div>
    </>
  );
}
