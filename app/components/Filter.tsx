import { useEffect, useRef, useState } from "react";
import { Employee } from "../types/Employee";
import {
  ArrowLeft,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightToLine,
} from "lucide-react";

interface FilterProps {
  setDataFiltered: (employees: Employee[]) => void;
  content: Employee[];
}

export default function Filter({ setDataFiltered, content }: FilterProps) {
  const inputEmployee = useRef<HTMLInputElement>(null);
  const inputDepartment = useRef<HTMLInputElement>(null);
  const inputStartDate = useRef<HTMLInputElement>(null);
  const inputEndDate = useRef<HTMLInputElement>(null);
  const inputStatus = useRef<HTMLSelectElement>(null);
  useEffect(() => {
    setDataFiltered(content);
  }, [content]);

  function handleChange() {
    const filters = {
      employee: inputEmployee.current?.value,
      department: inputDepartment.current?.value,
      inputStartDate: inputStartDate.current?.value,
      inputEndDate: inputEndDate.current?.value,
      isActive: inputStatus.current?.value,
    };
    let dadosFiltrados: Employee[] = content;
    if (filters.employee) {
      dadosFiltrados = dadosFiltrados.filter(
        (e) =>
          filters.employee &&
          e.employee.toLowerCase().includes(filters.employee.toLowerCase())
      );
    }
    if (filters.department) {
      dadosFiltrados = dadosFiltrados.filter(
        (e) =>
          filters.department &&
          e.department.toLowerCase().includes(filters.department.toLowerCase())
      );
    }
    if (filters.inputStartDate) {
      dadosFiltrados = dadosFiltrados.filter(
        (e) =>
          filters.inputStartDate &&
          new Date(e.lastLogin).getTime() >
            new Date(filters.inputStartDate).getTime()
      );
    }
    if (filters.inputEndDate) {
      dadosFiltrados = dadosFiltrados.filter(
        (e) =>
          filters.inputEndDate &&
          new Date(e.lastLogin).getTime() <
            new Date(filters.inputEndDate).getTime()
      );
    }

    if (filters.isActive) {
      dadosFiltrados = dadosFiltrados.filter(
        (e) => filters.isActive == e.isActive.toString()
      );
    }
    setDataFiltered(dadosFiltrados);
    console.log(filters);
  }

  function clearForm() {
    console.log("chamou clearform", inputDepartment.current?.value);
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

    setDataFiltered(content);
  }

  return (
    <>
      <form className="grid grid-cols-3 grid-rows-3 gap-4 my-3">
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
        {/* <label className="flex flex-col text-xs font-semibold  ">
          Last Login
        </label> */}

        <div className="border rounded-md text-xs">
          <label>From: </label>

          <input
            className="font-normal"
            ref={inputStartDate}
            onChange={handleChange}
            type="date"
            name="From"
            id=""
          />
        </div>
        <div className="border rounded-md text-xs">
          <label>To: </label>
          <input
            className="  font-normal"
            ref={inputEndDate}
            onChange={handleChange}
            type="date"
            name="To"
            id=""
          />
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
        <button onClick={clearForm} type="button">
          Limpar
        </button>
      </form>
      <div className="flex justify-between">
        <div>
          <span>Rows per page</span>
          <select name="" id="">
            2
          </select>
        </div>
        <div>
          <span>1-5 of 13</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="border rounded-full p-1" type="button">
            <ArrowLeftToLine width={12} height={12} />
          </button>
          <button className="border rounded-full p-1" type="button">
            <ArrowLeft width={12} height={12} />
          </button>
          <button className="border rounded-full p-1" type="button">
            <ArrowRight width={12} height={12} />
          </button>
          <button className="border rounded-full p-1" type="button">
            <ArrowRightToLine width={12} height={12} />
          </button>
        </div>
      </div>
    </>
  );
}
