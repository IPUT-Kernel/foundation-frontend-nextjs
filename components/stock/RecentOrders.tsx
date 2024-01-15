"use client";
import useTable from "@/utils/useTable";
import { IconSelector } from "@tabler/icons-react";
import OptionsVertical from "../shared/OptionsVertical";
import TableActions from "../shared/TableActions";
const orders = [
  {
    id: "556261",
    product: "Easy Cheese",
    date: "22/07/23",
    amount: "$475.22",
    status: "Paid",
  },
  {
    id: "123456",
    product: "Nutella",
    date: "15/09/23",
    amount: "$350.50",
    status: "Pending",
  },
  {
    id: "789012",
    product: "Sesame Oil",
    date: "30/05/23",
    amount: "$620.75",
    status: "Paid",
  },
  {
    id: "345678",
    product: "Doritos",
    date: "18/12/23",
    amount: "$280.90",
    status: "Cancel",
  },
  {
    id: "987654",
    product: "Nutella",
    date: "05/11/23",
    amount: "$510.30",
    status: "Pending",
  },
  {
    id: "980154",
    product: "Nutella",
    date: "05/11/23",
    amount: "$510.30",
    status: "Pending",
  },
  {
    id: "654321",
    product: "White Paper",
    date: "08/08/23",
    amount: "$420.10",
    status: "Paid",
  },
  {
    id: "210987",
    product: "Ruffles",
    date: "12/04/23",
    amount: "$580.60",
    status: "Unpaid",
  },
  {
    id: "543210",
    product: "Easy Cheese",
    date: "25/02/23",
    amount: "$325.75",
    status: "Paid",
  },
];
const RecentOrders = () => {
  const { tableData, sortData, deleteItem } = useTable(orders);

  return (
    <div className="col-span-12 lg:col-span-7 xl:col-span-8 box">
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
                className="py-3 font-semibold px-4 text-start w-[16%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  ID <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("product")}
                className="py-3 font-semibold px-4 text-start w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Product <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="py-3 font-semibold px-4 text-start w-[18%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Amount <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("date")}
                className="py-3 font-semibold px-4 text-start w-[18%]">
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
            {tableData.map(({ id, amount, date, product, status }, index) => (
              <tr key={id} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="px-4 py-2">{id}</td>
                <td className="px-4 py-2">{product}</td>
                <td className="px-4 py-2"> {amount}</td>
                <td className="px-4 py-2">{date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] border dark:border-n500 border-n30 py-2 ${
                      status == "Paid" &&
                      "bg-primary/5 dark:bg-bg3 text-primary"
                    } ${
                      status == "Pending" && "bg-secondary1/5 text-secondary1"
                    } ${
                      status == "Cancel" && "bg-secondary2/5 text-secondary2"
                    } ${
                      status == "Unpaid" && "bg-secondary3/5 text-secondary3"
                    }`}>
                    {status}
                  </span>
                </td>
                <td>
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
