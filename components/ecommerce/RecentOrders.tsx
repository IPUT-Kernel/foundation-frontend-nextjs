"use client";
import { faker } from "@faker-js/faker";
import { IconSelector } from "@tabler/icons-react";
import useTable from "../../utils/useTable";
import OptionsVertical from "../shared/OptionsVertical";
import TableActions from "../shared/TableActions";

const orders = Array.from({ length: 8 }).map((_, i) => {
  return {
    id: faker.number.int({ max: 999999, min: 111111 }),
    name: faker.helpers.arrayElement([
      "Easy Cheese",
      "Nutella",
      "Easy Cheese",
      "Sesame Oil",
      "Doritos",
      "Mashra",
      "Nutella",
      "White Pepper",
    ]),
    date: faker.date.recent(),
    amount: faker.number.float({ min: 200, max: 900, precision: 0.01 }),
    status: faker.helpers.arrayElement(["Paid", "Cancel", "Pending"]),
  };
});

const RecentOrders = () => {
  const { tableData, sortData, deleteItem } = useTable(orders, 8);
  return (
    <div className="col-span-12 lg:col-span-6 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Recent Orders</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th
                onClick={() => sortData("id")}
                className="py-3 font-semibold px-4 text-start w-[14]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  ID <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("name")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Product <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("payouts")}
                className="py-3 font-semibold px-4 text-start w-[16%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Amount <IconSelector size={18} />
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
            {tableData.map(({ date, id, name, amount, status }, index) => (
              <tr key={id} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="px-4 py-3">{id}</td>
                <td className="px-4 py-3">{name}</td>
                <td className="px-4 py-3"> ${amount}</td>
                <td className="px-4 py-3">{date.toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <span
                    className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] border border-n30 dark:border-n500 py-2 ${
                      status == "Paid" && "bg-primary/10 text-primary"
                    } ${
                      status == "Pending" && "bg-secondary1/10 text-secondary1"
                    } ${
                      status == "Cancel" && "bg-secondary2/10 text-secondary2"
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

export default RecentOrders;
