"use client";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";
const tickets = [
  {
    id: "556261",
    date: "22/07/23",
    status: "Inprogress",
  },
  {
    id: "123456",
    date: "15/09/23",
    status: "Complete",
  },
  {
    id: "789012",
    date: "30/05/23",
    status: "Pending",
  },
  {
    id: "345678",
    date: "18/12/23",
    status: "Inprogress",
  },
  {
    id: "987654",
    date: "05/11/23",
    status: "Complete",
  },
  {
    id: "654321",
    date: "08/08/23",
    status: "Pending",
  },
  {
    id: "210987",
    date: "12/04/23",
    status: "Inprogress",
  },
  {
    id: "543210",
    date: "25/02/23",
    status: "Complete",
  },
  {
    id: "543219",
    date: "20/02/23",
    status: "Inprogress",
  },
];
const RecentTickets = () => {
  const { tableData, sortData } = useTable(tickets);
  return (
    <div className="col-span-12 lg:col-span-6 box mb-4 xxxl:mb-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Recent Tickets</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th
                onClick={() => sortData("id")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  ID <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("date")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Date <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Status <IconSelector size={18} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ id, date, status }) => (
              <tr key={id} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="px-4 py-2">{id}</td>
                <td className="px-4 py-2">{date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] border border-n30 dark:border-n500 py-2 ${
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="#" className="btn-outline mt-7 lg:mt-10">
        View All
      </Link>
    </div>
  );
};

export default RecentTickets;
