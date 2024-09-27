import { Employee } from "@/app/types/Employee";
import { useMemo } from "react";
import { Chart as PieChart } from "react-google-charts";

interface ChartProps {
  content: Employee[];
}

interface DepartmentCount {
  [key: string]: number;
}
export default function Chart({ content }: ChartProps) {
  const data = useMemo(() => {
    const departmentCount = content.reduce<DepartmentCount>((acc, employee) => {
      const formattedDepartment = employee.department
        .toLowerCase()
        .replace(/\s+/g, "");

      if (acc[formattedDepartment]) {
        acc[formattedDepartment]++;
      } else {
        acc[formattedDepartment] = 1;
      }

      return acc;
    }, {});

    return [
      ["Departments", "Employees by department"],
      ["Finance", departmentCount.finance],
      ["HR", departmentCount.humanresources],
      ["R&D", departmentCount.researchanddevelopment],
      ["Marketing", departmentCount.marketing],
      ["Operations", departmentCount.operations],
      ["IT", departmentCount.it],
      ["Sales", departmentCount.sales],
    ];
  }, [content]);

  const options = {
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        color: "#263238",
        fontSize: 12,
      },
    },
  };
  return (
    <div className="bg-bgsecondary w-1/3 rounded-md p-4 shadow-xl h-2/4">
      <h2 className="text-lg text-primary">Employees by department</h2>
      <p className="text-secondary">Departments</p>
      <PieChart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={400}
      />
    </div>
  );
}
