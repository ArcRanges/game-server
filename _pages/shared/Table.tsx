import React from "react";

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

const Td = ({ children, className = "" }) => (
  <td className={`border p-3 bg-gray-100 opacity-80 ${className}`}>
    {children}
  </td>
);

export default function Table({ headers, children }: TableProps) {
  return (
    <table className="table-auto border-collapse h-full w-full">
      <thead className="bg-black text-gray-100">
        <tr>
          {headers.map((h: any, i: number) => (
            <th key={i} className="border p-3">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
}

Table.Td = Td;
