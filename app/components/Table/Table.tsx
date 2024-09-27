import { Employee } from "../../types/Employee";
import Filter from "../Filter";
import TableItem from "./TableItem";

interface TableProps {
  title: string;
  content: Array<Employee>;
}

export default function Table({ title, content }: TableProps) {
  return (
    <div className="bg-bgsecondary w-2/3 rounded-md p-4 shadow-xl ">
      <h2 className="mb-4 text-lg">{title}</h2>
      <Filter />
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
          <tbody>
            {content
              .map((employee, key) => {
                return <TableItem key={key} item={employee} />;
              })
              .slice(0, 6)}
          </tbody>
        </table>
      </div>
      <div>
        Pagination<div></div>
      </div>
    </div>
  );
}
