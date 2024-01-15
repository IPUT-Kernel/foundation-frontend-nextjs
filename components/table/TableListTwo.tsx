"use client";
import { faker } from "@faker-js/faker";
import { IconSearch, IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import useTable from "../../utils/useTable";
import Dropdown from "../shared/Dropdown";
import Pagination from "../shared/Pagination";
import SearchBar from "../shared/SearchBar";
import TableActions from "../shared/TableActions";
const options = ["Name", "Price", "Rating"];

const products = Array.from({ length: 40 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.commerce.productName(),
    img: `/images/products/product-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])}.png`,
    sku: faker.string.alphanumeric({ length: 7 }),
    price: faker.number.int({ min: 200, max: 800 }),
    stock: faker.number.int({ min: 2, max: 20 }),
    category: faker.helpers.arrayElement([
      "Tuxedo Sofas",
      "Modular Sofas",
      "Lawson Sofas",
      "Camelback Sofas",
      "Convertible Sofas",
      "Reclining Sofas",
      "Loveseats",
      "Chesterfield Sofas",
      "Sleeper Sofas",
      "Sectional Sofas",
    ]),
  };
});

const TableListTwo = () => {
  const [selected, setSelected] = useState(options[0]);
  const {
    currentPage,
    deleteItem,
    paginate,
    search,
    sortData,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(products, 10);
  return (
    <div className="box">
      <div className="flex flex-wrap gap-3 justify-between items-center bb-dashed mb-6 pb-6">
        <p className="font-medium">Table List View</p>
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <SearchBar handleSearch={search} />
          <div className="flex items-center shrink-0 gap-2">
            <p className="text-xs sm:text-sm">Sort By : </p>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              items={options}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-6 pb-6 bb-dashed">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 font-semibold">
              <td
                onClick={() => sortData("id")}
                className="p-5 text-start w-10">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Serial <IconSelector size={18} />
                </div>
              </td>
              <td className="p-5 text-start">Products</td>
              <td onClick={() => sortData("name")} className="p-5 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Name <IconSelector size={18} />
                </div>
              </td>
              <td onClick={() => sortData("sku")} className="p-5 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  SKU <IconSelector size={18} />
                </div>
              </td>
              <td onClick={() => sortData("price")} className="p-5 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Price <IconSelector size={18} />
                </div>
              </td>
              <td onClick={() => sortData("stock")} className="p-5 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Stock <IconSelector size={18} />
                </div>
              </td>
              <td
                onClick={() => sortData("category")}
                className="p-5 text-start">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Category <IconSelector size={18} />
                </div>
              </td>
              <td className="p-5 text-center">Action</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              ({ id, category, price, sku, stock, img, name }, i) => (
                <tr key={id} className="even:bg-primary/5 dark:even:bg-bg3">
                  <td className="py-2 px-3 text-center">
                    {" "}
                    {id < 10 ? "0" + id : id}
                  </td>
                  <td className="py-2 px-3">
                    <div
                      className={`flex w-20 h-14 md:w-32 md:h-20 rounded-md border border-n30 dark:border-n500 items-center justify-center ${
                        i % 2 == 0
                          ? "bg-primary/5 dark:bg-bg3"
                          : "bg-secondary3/5"
                      }`}>
                      <Image
                        width={100}
                        height={70}
                        className="rounded-full w-auto"
                        src={img}
                        alt="img"
                      />
                    </div>
                  </td>
                  <td className="py-2 px-3">{name}</td>
                  <td className="py-2 px-3">{sku}</td>
                  <td className="py-2 px-3">{price}</td>
                  <td className="py-2 px-3">{stock}</td>
                  <td className="py-2 px-3">{category}</td>
                  <td className="py-3 px-3">
                    <div className="flex justify-center">
                      <TableActions
                        onDelete={() => deleteItem(id)}
                        fromBottom={
                          i == tableData.length - 1 || i == tableData.length - 2
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
      {tableData.length > 0 && (
        <Pagination
          endIndex={endIndex}
          total={totalData}
          totalPages={totalPages}
          currentPage={currentPage}
          goToPage={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          startIndex={startIndex}
        />
      )}
      {!tableData.length && (
        <div className="text-center py-10">
          <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
            <div className="flex justify-center mb-5">
              <IconSearch size={60} className="text-primary" />
            </div>
            <h3 className="h3 mb-3 lg:mb-6">No matching results</h3>
            <p>
              Looks like we couldn&nbsp;t find any matching results for your
              search terms. Try other search terms.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableListTwo;
