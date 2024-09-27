import { useEffect, useRef, useState } from "react";
import { Employee } from "../types/Employee";
import {
  ArrowLeft,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightToLine,
} from "lucide-react";
import { Button } from "@mui/material";

interface FilterProps {
  setDataFiltered: (employees: Employee[]) => void;
  rawData: Employee[];
}

export default function Filter({ setDataFiltered, rawData }: FilterProps) {
  const inputEmployee = useRef<HTMLInputElement>(null);
  const inputDepartment = useRef<HTMLInputElement>(null);
  const inputStartDate = useRef<HTMLInputElement>(null);
  const inputEndDate = useRef<HTMLInputElement>(null);
  const inputStatus = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    setDataFiltered(rawData);
  }, [rawData]);

  function handleChange() {
    const filters = {
      employee: inputEmployee.current?.value,
      department: inputDepartment.current?.value,
      inputStartDate: inputStartDate.current?.value,
      inputEndDate: inputEndDate.current?.value,
      isActive: inputStatus.current?.value,
    };
    let dataFiltered: Employee[] = rawData;
    if (filters.employee) {
      dataFiltered = dataFiltered.filter(
        (e) =>
          filters.employee &&
          e.employee.toLowerCase().includes(filters.employee.toLowerCase())
      );
    }
    if (filters.department) {
      dataFiltered = dataFiltered.filter(
        (e) =>
          filters.department &&
          e.department.toLowerCase().includes(filters.department.toLowerCase())
      );
    }
    if (filters.inputStartDate) {
      dataFiltered = dataFiltered.filter(
        (e) =>
          filters.inputStartDate &&
          new Date(e.lastLogin).getTime() >
            new Date(filters.inputStartDate).getTime()
      );
    }
    if (filters.inputEndDate) {
      dataFiltered = dataFiltered.filter(
        (e) =>
          filters.inputEndDate &&
          new Date(e.lastLogin).getTime() <
            new Date(filters.inputEndDate).getTime()
      );
    }

    if (filters.isActive) {
      dataFiltered = dataFiltered.filter(
        (e) => filters.isActive == e.isActive.toString()
      );
    }
    setDataFiltered(dataFiltered);
  }

  function clearForm() {
    if (inputEmployee.current) {
      inputEmployee.current.value = "";
    }
    if (inputStartDate.current) {
      inputStartDate.current.value = "";
    }
    if (inputEndDate.current) {
      inputEndDate.current.value = "";
    }
    if (inputDepartment.current) {
      inputDepartment.current.value = "";
    }
    if (inputStatus.current) {
      inputStatus.current.value = "";
    }

    setDataFiltered(rawData);
  }

  return (
    <>
      <form className="grid grid-cols-3 grid-rows-2 gap-4 my-3">
        <label className="flex flex-col text-xs font-semibold gap-1">
          {" "}
          Employee
          <input
            ref={inputEmployee}
            onChange={handleChange}
            type="text"
            name="Employee"
            id="y"
            placeholder="Employee"
            className="border rounded-md text-xs p-1 font-normal"
          />
        </label>

        <div className=" text-xs h-6 ">
          <label className="flex flex-col text-xs font-semibold gap-1">
            From:{" "}
            <input
              className="border rounded-md text-xs p-1 font-normal"
              ref={inputStartDate}
              onChange={handleChange}
              type="date"
              name="From"
              id=""
            />
          </label>
        </div>
        <div className=" text-xs h-6">
          <label className="flex flex-col text-xs font-semibold gap-1">
            To:{" "}
            <input
              className="border rounded-md text-xs p-1 font-normal"
              ref={inputEndDate}
              onChange={handleChange}
              type="date"
              name="To"
              id=""
            />{" "}
          </label>
        </div>

        <label className="flex flex-col text-xs font-semibold gap-1">
          Department
          <input
            ref={inputDepartment}
            onChange={handleChange}
            type="text"
            name="Department"
            id=""
            placeholder="Department"
            className="border rounded-md text-xs p-1 font-normal"
          />
        </label>

        <label className="flex flex-col text-xs font-semibold gap-1 text-">
          Status
          <select
            className="border rounded-md text-xs p-1 font-normal"
            defaultValue=""
            ref={inputStatus}
            onChange={handleChange}
            name="Status"
            id=""
            aria-placeholder="hue"
          >
            <option disabled value="">
              Status
            </option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </label>

        <div className="flex justify-end items-end">
          <Button
            sx={{ height: 20 }}
            onClick={clearForm}
            variant="outlined"
            size="medium"
            color="success"
          >
            Limpar
          </Button>
        </div>
      </form>
    </>
  );
}
