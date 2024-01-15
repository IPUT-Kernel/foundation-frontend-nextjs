"use client";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";
import TableActions from "../shared/TableActions";
const studentsHistory = [
  {
    id: 1,
    location: "8558 Green Rd.",
    name: "Dustin",
    img: "/images/user-6.png",
    status: "Online",
  },
  {
    id: 2,
    location: "8080 Railroad Rd.",
    name: "Angel",
    img: "/images/user.png",
    status: "Offline",
  },
  {
    id: 3,
    location: "775 Rolling Green Rd.",
    name: "Shane",
    img: "/images/user-2.png",
    status: "Online",
  },
  {
    id: 4,
    location: "3605 Parker Rd.",
    name: "Max",
    img: "/images/user-3.png",
    status: "Offline",
  },
  {
    id: 5,
    location: "8558 E. Pecan St.",
    name: "Philip",
    img: "/images/user-4.png",
    status: "Online",
  },
  {
    id: 6,
    location: "3605 Parker Rd.",
    name: "Milan Hey",
    img: "/images/user-3.png",
    status: "Offline",
  },
  {
    id: 7,
    location: "8558 E. Pecan St.",
    name: "Rinald",
    img: "/images/user-4.png",
    status: "Online",
  },
  {
    id: 8,
    location: "8558 Poplar Rd.",
    name: "Gladys",
    img: "/images/user-5.png",
    status: "Offline",
  },
  {
    id: 9,
    location: "8558 Parker Rd.",
    name: "Victoria",
    img: "/images/user-6.png",
    status: "Online",
  },
  {
    id: 10,
    location: "8558 Green Rd.",
    name: "Greg",
    img: "/images/user-7.png",
    status: "Offline",
  },
];
const StudentHistory = () => {
  const { tableData, sortData, deleteItem } = useTable(studentsHistory);
  return (
    <div className="box mt-6 col-span-12 lg:col-span-7">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Student History</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th className="py-3 font-semibold px-4 text-start">Mark</th>
              <th
                onClick={() => sortData("associate")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Associate <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("location")}
                className="py-3 font-semibold px-4 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Location <IconSelector size={18} />
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
            {tableData.map(({ id, img, location, name, status }, index) => (
              <tr key={name} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="px-4 py-2">
                  <div className="flex pl-3">
                    <input
                      type="checkbox"
                      className="scale-125 accent-primary"
                    />
                  </div>
                </td>
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
                <td className="px-4 py-2">{location}</td>
                <td className="px-4 py-2">
                  <span
                    className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] border border-n30 dark:border-n500 py-2 ${
                      status == "Online" && "bg-primary/10 text-primary"
                    } ${
                      status == "Offline" && "bg-secondary1/10 text-secondary1"
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
  );
};

export default StudentHistory;
