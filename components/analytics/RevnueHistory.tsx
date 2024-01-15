"use client";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
import TableActions from "../shared/TableActions";
type ProjectType = {
  id: string;
  name: string;
  date: string;
  payouts: string;
  status: string;
};
const projects: ProjectType[] = [
  {
    id: "556261",
    name: "Arlene McCoy",
    date: "22/07/23",
    payouts: "$475.22",
    status: "Inprogress",
  },
  {
    id: "123456",
    name: "John Doe",
    date: "15/09/23",
    payouts: "$350.50",
    status: "Complete",
  },
  {
    id: "789012",
    name: "Jane Smith",
    date: "30/05/23",
    payouts: "$620.75",
    status: "Pending",
  },
  {
    id: "345678",
    name: "Robert Johnson",
    date: "18/12/23",
    payouts: "$280.90",
    status: "Inprogress",
  },
  {
    id: "345655",
    name: "Al amin",
    date: "18/12/23",
    payouts: "$200.90",
    status: "Pending",
  },
  {
    id: "987654",
    name: "Emily White",
    date: "05/11/23",
    payouts: "$510.30",
    status: "Complete",
  },
  {
    id: "654321",
    name: "Michael Brown",
    date: "08/08/23",
    payouts: "$420.10",
    status: "Pending",
  },
  {
    id: "210987",
    name: "Sarah Davis",
    date: "12/04/23",
    payouts: "$580.60",
    status: "Inprogress",
  },
  {
    id: "543210",
    name: "William Wilson",
    date: "25/02/23",
    payouts: "$325.75",
    status: "Complete",
  },
];

const RevenueHistory = () => {
  const { tableData, sortData, deleteItem } = useTable(projects);

  return (
    <div className="col-span-12 lg:col-span-6 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Revenue History</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th
                onClick={() => sortData("id")}
                className="py-3 font-semibold px-4 text-start w-[16%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  ID <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("name")}
                className="py-3 font-semibold px-4 text-start w-[25%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Name <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("date")}
                className="py-3 font-semibold px-4 text-start w-[15%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Date <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("payouts")}
                className="py-3 font-semibold px-4 text-start w-[15%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Payouts <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Status <IconSelector size={18} />
                </div>
              </th>
              <th className="py-3 font-semibold px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ id, date, name, payouts, status }, index) => (
              <tr key={id} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="px-4 py-2">{id}</td>
                <td className="px-4 py-2">{name}</td>
                <td className="px-4 py-2">{date}</td>
                <td className="px-4 py-2"> {payouts}</td>
                <td className="px-4 py-2">
                  <span
                    className={`block w-28 xxl:w-36 text-center rounded-[30px] text-xs border border-n30 dark:border-n500 py-2 ${
                      status == "Complete" &&
                      "bg-primary/10 dark:bg-bg3 text-primary"
                    } ${
                      status == "Inprogress" &&
                      "bg-secondary1/10 dark:bg-bg3 text-secondary1"
                    } ${
                      status == "Pending" &&
                      "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                    }`}>
                    {status}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex justify-center items-center">
                    <TableActions
                      onDelete={() => deleteItem(id)}
                      fromBottom={
                        index == tableData.length - 1 ||
                        index == tableData.length - 2
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueHistory;
