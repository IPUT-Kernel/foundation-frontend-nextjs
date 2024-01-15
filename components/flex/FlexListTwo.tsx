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
const list = Array.from({ length: 40 }).map((_, i) => {
  return {
    id: i + 1,
    industry: faker.helpers.arrayElement([
      "Gaming",
      "Health",
      "Pharma",
      "Business",
      "Agriculture",
      "Automotive",
    ]),
    name: faker.person.firstName(),
    img: `/images/user-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])}.png`,
    country: faker.location.country(),
    designation: faker.person.jobTitle(),
    status: faker.helpers.arrayElement([
      "Online",
      "Working",
      "Offline",
      "Suspended",
    ]),
    relations: faker.helpers.arrayElements(
      [
        "/images/user.png",
        "/images/user-2.png",
        "/images/user-3.png",
        "/images/user-4.png",
        "/images/user-5.png",
      ],
      { min: 2, max: 5 }
    ),
  };
});

const FlexListTwo = () => {
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
  } = useTable(list, 10);

  return (
    <div className="box">
      <div className="flex flex-wrap gap-3 justify-between items-center bb-dashed mb-6 pb-6">
        <p className="font-medium">Flex List View</p>
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <SearchBar handleSearch={search} />
          <div className="flex items-center gap-2">
            <p className="whitespace-nowrap">Sort By : </p>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              items={options}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto p-4 lg:p-6 rounded-2xl bg-primary/5 dark:bg-bg3 mb-6">
        <div className="bg-n0 dark:bg-bg4 rounded-xl px-3 min-w-min">
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            style={{ borderSpacing: "0 12px" }}
            className="w-full whitespace-nowrap p-0 border-none border-separate">
            <thead>
              <tr className="font-semibold">
                <td onClick={() => sortData("id")} className="w-14">
                  <div className="px-3 py-5 pl-6 bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer rounded-s-xl">
                    Serial No <IconSelector size={18} />
                  </div>
                </td>
                <td onClick={() => sortData("name")}>
                  <div className="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5">
                    User <IconSelector size={18} />
                  </div>
                </td>
                <td onClick={() => sortData("country")}>
                  <div className="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5">
                    Location <IconSelector size={18} />
                  </div>
                </td>
                <td onClick={() => sortData("industry")}>
                  <div className="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5">
                    Industry <IconSelector size={18} />
                  </div>
                </td>
                <td onClick={() => sortData("status")}>
                  <div className="bg-primary/5 dark:bg-bg3 flex items-center gap-1 select-none cursor-pointer px-3 py-5">
                    Status <IconSelector size={18} />
                  </div>
                </td>
                <td>
                  <div className="bg-primary/5 dark:bg-bg3 px-3 py-5">
                    Relations
                  </div>
                </td>
                <td>
                  <div className="bg-primary/5 dark:bg-bg3 px-3 py-5 text-center rounded-e-xl">
                    Action
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {tableData.map(
                (
                  {
                    country,
                    id,
                    img,
                    name,
                    industry,
                    status,
                    designation,
                    relations,
                  },
                  index
                ) => (
                  <tr key={id}>
                    <td>
                      <div className="py-5 pl-6 px-3 bg-primary/5 dark:bg-bg3 rounded-s-lg">
                        {id < 10 ? "0" + id : id}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center py-2.5 gap-3 pr-6 px-3 bg-primary/5 dark:bg-bg3">
                        <Image
                          width={32}
                          height={32}
                          className="rounded-full shrink-0"
                          src={img}
                          alt="img"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium inline-block mb-1">
                            {name}
                          </span>
                          <span className="text-xs">{designation}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="bg-primary/5 dark:bg-bg3 py-5 px-3">
                        {country.slice(0, 14)}
                      </div>
                    </td>
                    <td>
                      <div className="bg-primary/5 dark:bg-bg3 py-5 px-3">
                        {industry}
                      </div>
                    </td>
                    <td>
                      <div className="bg-primary/5 dark:bg-bg3 px-3 py-[13px]">
                        <span
                          className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2.5 ${
                            status == "Online" &&
                            "bg-primary/10 dark:bg-bg3 text-primary"
                          } ${
                            status == "Offline" &&
                            "bg-secondary1/10 dark:bg-bg3 text-secondary1"
                          } ${
                            status == "Suspended" &&
                            "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                          }  ${
                            status == "Working" &&
                            "bg-secondary3dark/10 dark:bg-bg3 text-secondary3dark"
                          }`}>
                          {status}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex py-[17px] px-3 bg-primary/5 dark:bg-bg3">
                        {relations.map((item, i) => (
                          <Image
                            key={i}
                            src={item}
                            width={32}
                            height={32}
                            className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                            alt="img"
                          />
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center items-center py-[21px] px-3 bg-primary/5 dark:bg-bg3 rounded-e-xl">
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

export default FlexListTwo;
