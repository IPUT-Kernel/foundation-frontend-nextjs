"use client";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
import TableActions from "../shared/TableActions";
const hobbies = [
  {
    code: 556261,
    Hobbies: "Vie nocturne",
    location: "Portland, Illinois",
    date: "22/07/23",
    cost: "$475.22",
    status: "Complete",
    fromBottom: false,
  },
  {
    code: 556262,
    Hobbies: "Theatre",
    location: "Corona, Michigan",
    date: "22/07/23",
    cost: "$475.22",
    status: "In Travels",
    fromBottom: false,
  },
  {
    code: 556263,
    Hobbies: "Lecture",
    location: "Lansing, Illinois",
    date: "22/07/23",
    cost: "$475.22",
    status: "Complete",
    fromBottom: false,
  },
  {
    code: 556264,
    Hobbies: "Voyages",
    location: "Syracuse, Connecticut",
    date: "22/07/23",
    cost: "$475.22",
    status: "Cancel",
    fromBottom: false,
  },
  {
    code: 556265,
    Hobbies: "Technologies",
    location: "Kent, Utah",
    date: "22/07/23",
    cost: "$475.22",
    status: "Complete",
    fromBottom: false,
  },
  {
    code: 556266,
    Hobbies: "Photography",
    location: "Pasadena, Oklahoma",
    date: "22/07/23",
    cost: "$475.22",
    status: "Cancel",
    fromBottom: false,
  },
  {
    code: 556267,
    Hobbies: "Cinema",
    location: "Stockton, New Hampshire",
    date: "22/07/23",
    cost: "$475.22",
    status: "Complete",
    fromBottom: true,
  },
  {
    code: 556268,
    Hobbies: "Cuisine",
    location: "Great Falls, Maryland",
    date: "22/07/23",
    cost: "$475.22",
    status: "In Travels",
    fromBottom: true,
  },
];
const HobbyList = () => {
  const { tableData, sortData, deleteItem } = useTable(hobbies);
  return (
    <div className="col-span-12 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Hobbies List</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th
                onClick={() => sortData("code")}
                className="py-3 font-semibold px-4 text-start w-[12%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Code <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("Hobbies")}
                className="py-3 font-semibold px-4 text-start w-[15%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Hobbies <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("location")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Location <IconSelector size={18} />
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
                onClick={() => sortData("cost")}
                className="py-3 font-semibold px-4 text-start w-[15%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Cost <IconSelector size={18} />
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
              ({ Hobbies, code, cost, date, location, status }, index) => (
                <tr key={code} className="even:bg-primary/5 dark:even:bg-bg3">
                  <td className="px-4 py-2 w-8">{code}</td>
                  <td className="px-4 py-2">{Hobbies}</td>
                  <td className="px-4 py-2">{location}</td>
                  <td className="px-4 py-2">{date}</td>
                  <td className="px-4 py-2"> {cost}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`block w-36 xxl:w-48 text-xs text-center rounded-[30px] border border-n30 dark:border-n500 py-2 ${
                        status == "Complete" &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        status == "In Travels" &&
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
                        onDelete={() => deleteItem(code)}
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

export default HobbyList;
