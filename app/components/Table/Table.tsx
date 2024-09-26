import { Employee } from "../../types/Employee";
import TableItem from "./TableItem";

interface TableProps {
  title: string;
  content: Array<Employee>;
}

export default function Table({ title, content }: TableProps) {
  const currentPage = 1;
  const limit = 10;
  return (
    <div className="bg-bgsecondary w-2/3 rounded-md p-4 shadow-xl ">
      <h2 className="mb-4">{title}</h2>
      <div className="border border-vgray rounded-md ">
        <table className="text-xs w-full">
          <thead className="text-secondary text-left">
            <tr>
              <th className="pl-3 pt-6 pb-3 ">Employee</th>
              <th className="pt-6 pb-3">Last login</th>
              <th className="pt-6 pb-3">Department</th>
              <th className="pt-6 pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {content
              .map((employee, key) => {
                return <TableItem key={key} item={employee} />;
              })
              .slice(currentPage, limit)}
          </tbody>
        </table>
      </div>
      <div>
        Pagination<div></div>
      </div>
    </div>
  );
}
