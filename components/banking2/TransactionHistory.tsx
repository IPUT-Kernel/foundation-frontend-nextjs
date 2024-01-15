"use client";
import { options } from "@/public/data/timesDropdown";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import TableActions from "../shared/TableActions";
const transactions = [
  {
    payouts: "$475.25",
    date: "22/07/23",
    name: "Maliha",
    img: "/images/user.png",
    status: "Complete",
    id: 1,
  },
  {
    payouts: "$475.25",
    date: "22/07/23",
    name: "Babul",
    img: "/images/user-2.png",
    status: "Inprogress",
    id: 2,
  },
  {
    payouts: "$475.25",
    date: "22/07/23",
    name: "Karim",
    img: "/images/user-3.png",
    status: "Complete",
    id: 3,
  },
  {
    payouts: "$475.25",
    date: "22/07/23",
    name: "Duke",
    img: "/images/user-6.png",
    status: "Inprogress",
    id: 4,
  },
  {
    payouts: "$475.25",
    date: "22/07/23",
    name: "Dustin",
    img: "/images/user-4.png",
    status: "Pending",
    id: 5,
  },
  {
    payouts: "$475.25",
    date: "22/07/23",
    name: "Danvar",
    img: "/images/user-5.png",
    status: "Complete",
    id: 6,
  },
  {
    payouts: "$475.25",
    date: "22/07/23",
    name: "Mahfuz",
    img: "/images/user-6.png",
    status: "Inprogress",
    id: 7,
  },
];
const TransactionHistory = () => {
  const [selected, setSelected] = useState(options[0]);
  const { tableData, sortData, deleteItem } = useTable(transactions);
  return (
    <div className="box col-span-12 xl:col-span-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Transactions History</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            items={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
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
              ({ date, img, name, payouts, id, status }, index) => (
                <tr key={name}>
                  <td className="px-4 py-2">
                    <span className="flex items-center gap-3">
                      <Image
                        className="rounded-full"
                        src={img}
                        width={32}
                        height={32}
                        alt="lead img"
                      />{" "}
                      {name}{" "}
                    </span>
                  </td>
                  <td className="px-4 py-2">{payouts}</td>
                  <td className="px-4 py-2">{date}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`block w-28 xxl:w-36 text-xs text-center rounded-[30px] border border-n30 dark:border-n500 py-2 ${
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
