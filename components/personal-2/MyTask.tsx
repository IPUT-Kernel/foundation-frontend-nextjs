"use client";
import { options } from "@/public/data/timesDropdown";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import TableActions from "../shared/TableActions";

const tasks = [
  {
    id: 1,
    name: "Alice Johnson",
    deadline: "11/15/23",
    status: "Inprogress",
  },
  {
    id: 2,
    name: "Bob Smith",
    deadline: "01/20/24",
    status: "Pending",
  },
  {
    id: 3,
    name: "Eva Davis",
    deadline: "03/05/23",
    status: "Complete",
  },
  {
    id: 4,
    name: "Michael Lee",
    deadline: "09/12/23",
    status: "Pending",
  },
  {
    id: 1,
    name: "Sophia White",
    deadline: "07/30/24",
    status: "Pending",
  },
  {
    id: 1,
    name: "David Garcia",
    deadline: "02/18/23",
    status: "Complete",
  },
  {
    id: 1,
    name: "Olivia Brown",
    deadline: "06/09/24",
    status: "Complete",
  },
  {
    id: 1,
    name: "Samuel Wilson",
    deadline: "10/25/23",
    status: "Inprogress",
  },
];

const MyTask = () => {
  const [selected, setSelected] = useState(options[0]);
  const { tableData, sortData, deleteItem } = useTable(tasks, 8);
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="box">
        <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
          <p className="font-medium">My Tasks</p>
          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-sm">Sort By : </p>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              items={options}
            />
          </div>
        </div>
        <div>
          <div className="w-full overflow-x-auto relative">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
                  <th
                    onClick={() => sortData("name")}
                    className="py-3 font-semibold px-4 text-start w-[30%]">
                    <div className="flex items-center gap-1 cursor-pointer select-none">
                      Name <IconSelector size={18} />
                    </div>
                  </th>
                  <th
                    onClick={() => sortData("deadline")}
                    className="py-3 font-semibold px-4 text-start w-[30%]">
                    <div className="flex items-center gap-1 cursor-pointer select-none">
                      Deadline <IconSelector size={18} />
                    </div>
                  </th>
                  <th
                    onClick={() => sortData("status")}
                    className="py-3 font-semibold px-4 text-start">
                    <div className="flex items-center gap-1 cursor-pointer select-none">
                      Status <IconSelector size={18} />
                    </div>
                  </th>
                  <th className="py-3 font-semibold px-4 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(({ id, deadline, name, status }, index) => (
                  <tr key={id}>
                    <td className="px-4 py-2">{name}</td>
                    <td className="px-4 py-2"> {deadline}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] border dark:border-n500 border-n30 py-2 ${
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTask;
