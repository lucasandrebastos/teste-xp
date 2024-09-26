import { ChevronDown } from "lucide-react";
import dateFormatter from "../utils/dateFormatter";
import Image from "next/image";
import { Employee } from "../dashboard/page";

interface TableProps {
  title: string;
  content: Array<Employee>;
}

export default function Table({ title, content }: TableProps) {
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
                return (
                  <tr key={key} className="border-t border-vgray">
                    <th className="flex items-center p-3">
                      <div className="bg-slate-400 w-5 h-5 rounded-full">
                        <Image
                          className="rounded-full"
                          src={employee.avatar}
                          alt="avatar"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex flex-col m-2 font-normal text-left ">
                        <span className="text-primary">
                          {employee.employee}
                        </span>
                        <span className="text-secondary">{employee.mail}</span>
                      </div>
                    </th>
                    <td>
                      <span>{dateFormatter(employee.lastLogin)}</span>
                    </td>
                    <td>{employee.department}</td>
                    <td className="flex justify-between pr-4 items-center">
                      {employee.isActive ? (
                        <span className="font-semibold text-vgreen">
                          Active
                        </span>
                      ) : (
                        <span className="font-semibold text-vred">
                          Inactive
                        </span>
                      )}

                      <button type="button">
                        <ChevronDown />
                      </button>
                    </td>
                  </tr>
                );
              })
              .slice(0, 6)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
