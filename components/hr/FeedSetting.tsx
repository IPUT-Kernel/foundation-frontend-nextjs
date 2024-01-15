"use client";
import { options } from "@/public/data/timesDropdown";
import useTable from "@/utils/useTable";
import {
  IconArchive,
  IconBroadcast,
  IconChecklist,
  IconHourglassOff,
  IconMessage,
  IconRefresh,
  IconSelector,
  IconTimeline,
  IconTools,
} from "@tabler/icons-react";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import TableActions from "../shared/TableActions";
const projects = [
  {
    id: 1,
    type: "Messages",
    date: "23/08/23",
    time: "01:09 am",
    count: 883,
    status: "Complete",
    fromBottom: false,
    icon: <IconMessage size={20} />,
  },
  {
    id: 2,
    type: "Tasks",
    date: "23/08/23",
    time: "08:20 pm",
    count: 429,
    status: "Inprogress",
    fromBottom: false,
    icon: <IconChecklist size={20} />,
  },
  {
    id: 3,
    type: "Deadlines",
    date: "23/08/23",
    time: "07:38 am",
    count: 453,
    status: "Complete",
    fromBottom: false,
    icon: <IconTimeline size={20} />,
  },
  {
    id: 4,
    type: "Management Tools",
    date: "23/08/23",
    time: "10:41 pm",
    count: 922,
    status: "Cancel",
    fromBottom: false,
    icon: <IconTools size={20} />,
  },
  {
    id: 5,
    type: "Time Blocking",
    date: "23/08/23",
    time: "11:27 am",
    count: 196,
    status: "Inprogress",
    fromBottom: false,
    icon: <IconHourglassOff size={20} />,
  },
  {
    id: 6,
    type: "Review and Update",
    date: "23/08/23",
    time: "01:09 am",
    count: 583,
    status: "Complete",
    fromBottom: false,
    icon: <IconRefresh size={20} />,
  },
  {
    id: 7,
    type: "Communication",
    date: "23/08/23",
    time: "01:09 am",
    count: 130,
    status: "Cancel",
    fromBottom: true,
    icon: <IconBroadcast size={20} />,
  },
  {
    id: 8,
    type: "Archive or Delete",
    date: "23/08/23",
    time: "01:09 am",
    count: 426,
    status: "Complete",
    fromBottom: true,
    icon: <IconArchive size={20} />,
  },
];

const FeedSettings = () => {
  const [selected, setSelected] = useState(options[0]);
  const { tableData, sortData, deleteItem } = useTable(projects);

  return (
    <div className="box mt-4 xxxl:mt-6">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Feed Settings</p>
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
              <th className="py-3 font-semibold px-4 text-start">Mark</th>
              <th
                onClick={() => sortData("type")}
                className="py-3 font-semibold px-4 text-start w-[25%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Type <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("date")}
                className="py-3 font-semibold px-4 text-start w-[16%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Date <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("time")}
                className="py-3 font-semibold px-4 text-start w-[16%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Time <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("count")}
                className="py-3 font-semibold px-4 text-start w-[16%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Count <IconSelector size={18} />
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
              ({ count, date, icon, status, time, type, id }, index) => (
                <tr key={type} className="even:bg-primary/5 dark:even:bg-bg3">
                  <td className="py-2 pl-7">
                    <div className="flex ">
                      <input
                        type="checkbox"
                        className="scale-125 accent-primary"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/5 dark:bg-bg3 p-2 rounded-xl text-primary">
                        {icon}
                      </div>
                      <span>{type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{date}</td>
                  <td className="px-4 py-2"> {time}</td>
                  <td className="px-4 py-2">{count}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`block w-36 xxl:w-48 text-xs text-center rounded-[30px] border border-n30 py-2 dark:border-n500 ${
                        status == "Complete" &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status == "Inprogress" &&
                        "bg-secondary1/10 dark:bg-bg3 text-secondary1"
                      } ${
                        status == "Cancel" &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      }`}>
                      {status}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex justify-center ">
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

export default FeedSettings;
