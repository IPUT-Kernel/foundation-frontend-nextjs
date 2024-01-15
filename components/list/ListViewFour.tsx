"use client";
import { faker } from "@faker-js/faker";
import {
  IconBookmark,
  IconClockHour4,
  IconInbox,
  IconLink,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useTable from "../../utils/useTable";
import Dropdown from "../shared/Dropdown";
import Pagination from "../shared/Pagination";
import SearchBar from "../shared/SearchBar";
const options = ["Name", "Price", "Rating"];

const foods = Array.from({ length: 48 }).map((_, i) => {
  return {
    id: i + 1,
    title: faker.commerce.productName(),
    icon: `/images/list-4/food-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])}.png`,
    location: faker.location.country(),
    type: faker.helpers.arrayElement([
      "Cake",
      "Chocolate",
      "Desert",
      "Vanilla",
    ]),
    time: faker.helpers.arrayElement(["1h 20m", "2h 20m", "1h 40m", "3h"]),
    links: faker.number.int({ max: 10, min: 2 }),
  };
});

const ListViewFour = () => {
  const [selected, setSelected] = useState(options[0]);
  const {
    currentPage,
    paginate,
    search,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(foods, 10);

  return (
    <div className="box xxxl:p-8">
      <div className="flex flex-wrap justify-between gap-3 items-center bb-dashed mb-6 pb-6">
        <p className="font-medium">Another List View</p>
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
      <div className="flex flex-col gap-7 lg:gap-8 mb-6 pb-6 bb-dashed overflow-x-auto">
        {tableData.map(({ id, icon, time, title, links, type }) => (
          <div
            key={id}
            className="flex justify-between items-center gap-3 min-w-max ">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-6">
              <Image
                src={icon}
                width={54}
                height={54}
                className="rounded-full"
                alt="icon"
              />
              <div>
                <p className="text-base sm:text-lg lg:text-xl font-medium mb-2">
                  {title}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs sm:text-sm">
                  <span className="flex items-center gap-2">
                    <IconInbox size={18} /> {type}
                  </span>
                  <span className="flex items-center gap-2">
                    <IconClockHour4 size={18} /> {time}
                  </span>
                  <span className="flex items-center gap-2">
                    <IconLink size={18} /> {links}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex">
                <Image
                  src="/images/user-2.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <Image
                  src="/images/user-3.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <Image
                  src="/images/user-4.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <Image
                  src="/images/user-5.png"
                  width={32}
                  height={32}
                  className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                  alt="img"
                />
                <div className="border flex items-center justify-center text-n0 border-n0 dark:border-n500 rounded-full bg-primary w-8 h-8">
                  <IconPlus size={22} />
                </div>
              </div>
              <Link href="#" className="btn lg:py-3 lg:px-6">
                Apply Now
              </Link>
              <button className="w-10 h-10 md:w-12 md:h-12 border border-n30 dark:border-n500 flex justify-center items-center text-primary rounded-full bg-primary/5 dark:bg-bg3">
                <IconBookmark />
              </button>
            </div>
          </div>
        ))}
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

export default ListViewFour;
