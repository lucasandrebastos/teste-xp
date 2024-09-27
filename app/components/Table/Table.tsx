import { useState } from "react";
import { Employee } from "../../types/Employee";
import Filter from "../Filter";

import CustomPaginationActionsTable from "./CustomPaginationActionsTable";

interface TableProps {
  title: string;
  content: Employee[];
}

export default function Table({ title, content }: TableProps) {
  const [dataFiltered, setDataFiltered] = useState<Employee[]>([]);

  return (
    <div className="bg-bgsecondary w-2/3 rounded-md p-4 shadow-xl">
      <h2 className="mb-4 text-lg">{title}</h2>
      <Filter rawData={content} setDataFiltered={setDataFiltered} />
      <div className="border border-vgray rounded-md">
        <CustomPaginationActionsTable content={dataFiltered} />
      </div>
    </div>
  );
}
