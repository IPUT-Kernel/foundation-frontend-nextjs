"use client";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";
import TableActions from "../shared/TableActions";
const history = [
  {
    rate: "$475.25",
    expertise: "Software Developer",
    name: "Dustin",
    img: "/images/user.png",
    status: "Complete",
    id: 1,
  },
  {
    rate: "$475.25",
    expertise: "Team Leader",
    name: "Jakir",
    img: "/images/user-2.png",
    status: "Inprogress",
    id: 2,
  },
  {
    rate: "$475.25",
    expertise: "Project Manager",
    name: "Ragib",
    img: "/images/user-3.png",
    status: "Complete",
    id: 3,
  },
  {
    rate: "$475.25",
    expertise: "Project Manager",
    name: "Badhan",
    img: "/images/user-6.png",
    status: "Complete",
    id: 4,
  },
  {
    rate: "$475.25",
    expertise: "Software Tester",
    name: "Kamal",
    img: "/images/user-4.png",
    status: "Pending",
    id: 5,
  },
  {
    rate: "$475.25",
    expertise: "UI/UX Designer",
    name: "Danvar",
    img: "/images/user-5.png",
    status: "Complete",
    id: 6,
  },
  {
    rate: "$475.25",
    expertise: "Scrum Master",
    name: "Mahfuz",
    img: "/images/user-6.png",
    status: "Pending",
    id: 7,
  },
  {
    rate: "$475.25",
    expertise: "Project Manager",
    name: "Salem",
    img: "/images/user-3.png",
    status: "Complete",
    id: 8,
  },
  {
    rate: "$475.25",
    expertise: "Ethical Hacker",
    name: "Mamun",
    img: "/images/user-4.png",
    status: "Inprogress",
    id: 9,
  },
];
const CompanyHistory = () => {
  const { tableData, sortData, deleteItem } = useTable(history);
  return (
    <div className="box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Company History</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th className="py-3 font-semibold px-4 text-start">Mark</th>
              <th
                onClick={() => sortData("name")}
                className="py-3 font-semibold px-4 text-start w-[22%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Associate <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("expertise")}
                className="py-3 font-semibold px-4 text-start w-[22%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Expertise <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("rate")}
                className="py-3 font-semibold px-4 text-start w-[22%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Rate <IconSelector size={18} />
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
              ({ expertise, img, name, rate, id, status }, index) => (
                <tr key={name} className="even:bg-primary/5 dark:even:bg-bg3">
                  <td className="px-4 py-2">
                    <div className="flex justify-center">
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
                  <td className="px-4 py-2">{expertise}</td>
                  <td className="px-4 py-2">{rate}</td>
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

export default CompanyHistory;
