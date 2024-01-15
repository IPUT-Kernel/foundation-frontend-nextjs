"use client";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
import TableActions from "../shared/TableActions";
const projects = [
  {
    id: 1,
    bank: "Banorte",
    name: "Arlene McCoy",
    date: "22/07/23",
    payouts: "$475.22",
    status: "Inprogress",
  },
  {
    id: 2,
    bank: "UBS Bank",
    name: "John Doe",
    date: "15/09/23",
    payouts: "$350.50",
    status: "Complete",
  },
  {
    id: 3,
    bank: "Banco J.P. Morgan",
    name: "Jane Smith",
    date: "30/05/23",
    payouts: "$620.75",
    status: "Pending",
  },
  {
    id: 4,
    bank: "Volkswagen Bank",
    name: "Robert Johnson",
    date: "18/12/23",
    payouts: "$280.90",
    status: "Inprogress",
  },
  {
    id: 5,
    bank: "Autofin",
    name: "Emily White",
    date: "05/11/23",
    payouts: "$510.30",
    status: "Complete",
  },
  {
    id: 6,
    bank: "Bank of America",
    name: "Michael Brown",
    date: "08/08/23",
    payouts: "$420.10",
    status: "Pending",
  },
];
const TransactionHistory = () => {
  const { tableData, sortData, deleteItem } = useTable(projects);
  return (
    <div className="col-span-12 lg:col-span-8 xxl:col-span-9 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Transaction History</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th
                onClick={() => sortData("name")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Name <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("bank")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Bank <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("payouts")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Payouts <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("date")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
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
              <th className="py-3 font-semibold px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              ({ bank, date, name, payouts, status, id }, index) => (
                <tr key={name} className="even:bg-primary/5 dark:even:bg-bg3">
                  <td className="px-4 py-2">{name}</td>
                  <td className="px-4 py-2">{bank}</td>
                  <td className="px-4 py-2"> {payouts}</td>
                  <td className="px-4 py-2">{date}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`block w-36 xxl:w-48 text-center text-xs rounded-[30px] border border-n30 dark:border-n500 py-2 ${
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
                    <div className="flex justify-center">
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
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
