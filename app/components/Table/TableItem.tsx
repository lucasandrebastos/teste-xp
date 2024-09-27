import { ChevronDown } from "lucide-react";
import Image from "next/image";
import dateFormatter from "../../utils/dateFormatter";
import { Employee } from "../../types/Employee";

interface TableItemProps {
  item: Employee;
}

export default function TableItem({ item }: TableItemProps) {
  return (
    <tr className="border-t border-vgray">
      <th className="flex items-center p-3">
        <div className="bg-slate-400 w-5 h-5 rounded-full">
          <Image
            className="rounded-full"
            src={item.avatar}
            alt="avatar"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col m-2 font-normal text-left ">
          <span className="text-primary">{item.employee}</span>
          <span className="text-secondary">{item.mail}</span>
        </div>
      </th>
      <td>
        <span>{dateFormatter(item.lastLogin)}</span>
      </td>
      <td>{item.department}</td>
      <td className="flex justify-between pr-4 items-center">
        {item.isActive ? (
          <span className="font-semibold text-vgreen">Active</span>
        ) : (
          <span className="font-semibold text-vred">Inactive</span>
        )}

        <button type="button">
          <ChevronDown />
        </button>
      </td>
    </tr>
  );
}
