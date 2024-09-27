import { useMemo, useState } from "react";
import { Employee } from "../../types/Employee";
import Filter from "../Filter";
import TableItem from "./TableItem";
import Pagination from "../Pagination";

interface TableProps {
  title: string;
  content: Employee[];
}

export default function Table({ title, content }: TableProps) {
  const [dataFiltered, setDataFiltered] = useState<Employee[]>([]);
  // console.log("content", content);
  const tableItems = useMemo(() => {
    return dataFiltered
      .map((employee, key) => {
        return <TableItem key={key} item={employee} />;
      })
      .slice(0, 80);
  }, [dataFiltered]);
  return (
    <div className="bg-bgsecondary w-2/3 rounded-md p-4 shadow-xl">
      <h2 className="mb-4 text-lg">{title}</h2>
      <Filter content={content} setDataFiltered={setDataFiltered} />
      <div className="border border-vgray rounded-md">
        <table className="text-xs w-full">
          <thead className="text-left">
            <tr className="">
              <th className="text-secondary font-semibold pl-3 pt-6 pb-3 ">
                Employee
              </th>
              <th className="text-secondary font-semibold pt-6 pb-3">
                Last login
              </th>
              <th className="text-secondary font-semibold pt-6 pb-3">
                Department
              </th>
              <th className="text-secondary font-semibold pt-6 pb-3">Status</th>
            </tr>
          </thead>
          <tbody>{tableItems}</tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
