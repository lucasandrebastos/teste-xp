import Legend from "./Legend";

export default function Chart() {
  return (
    <div className="bg-bgsecondary w-1/3 rounded-md p-4 shadow-xl ">
      <h2 className="text-lg text-primary">Employees by department</h2>
      <p className="text-secondary">Departments</p>
      <div id="CHART" className="flex flex-col items-center">
        <div className="h-56 w-56 my-12 rounded-full bg-purple-600" />
        <Legend />
      </div>
    </div>
  );
}
