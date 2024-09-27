import { Employee } from "@/app/types/Employee";
import { Chart as PieChart } from "react-google-charts";

interface ChartProps {
  content: Employee[];
}

export default function Chart({ content }: ChartProps) {
  const data = [
    ["Task", "Hours per Day"],
    ["Finance", 9],
    ["HR", 2],
    ["R&D", 2],
    ["Marketing", 2],
    ["Operations", 7],
    ["IT", 7],
    ["Sales", 7],
  ];

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
