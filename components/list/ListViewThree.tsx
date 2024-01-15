"use client";
import { faker } from "@faker-js/faker";
import {
  IconBookmark,
  IconCircleCheck,
  IconClockHour4,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import useTable from "../../utils/useTable";
import Dropdown from "../shared/Dropdown";
import Pagination from "../shared/Pagination";
import SearchBar from "../shared/SearchBar";
const options = ["Name", "Price", "Rating"];

const tooltipStyle = {
  backgroundColor: "#3539E9",
  color: "#fff",
  borderRadius: "10px",
};

const jobs = Array.from({ length: 48 }).map((_, i) => {
  return {
    id: i + 1,
    title: faker.person.jobTitle(),
    icon: `/images/list-3/${faker.helpers.arrayElement([
      "github",
      "ux",
      "html",
      "react-native",
      "react",
      "fullstack",
      "digital",
      "figma",
      "linkedin",
      "nodejs",
    ])}.png`,
    location: faker.location.country(),
    time: faker.helpers.arrayElement([
      "Full Time",
      "Part Time",
      "Freelance",
      "Contract",
    ]),
    experience: `${faker.number.int({ max: 10, min: 2 })} Years`,
  };
});

const ListViewThree = () => {
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
  } = useTable(jobs, 10);

  return (
    <div className="box xxxl:p-8">
      <div className="flex flex-wrap  gap-3 justify-between items-center bb-dashed mb-6 pb-6">
        <p className="font-medium">List View</p>
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
      <div className="flex flex-col max-md:gap-10 md:gap-6 lg:gap-8 mb-6 pb-6 bb-dashed">
        {tableData.map(({ id, experience, icon, location, time, title }) => (
          <div
            key={id}
            className="flex justify-between md:items-center gap-4 flex-col md:flex-row">
            <Link
              href="#"
              className="flex items-start md:items-center gap-3 sm:gap-4 lg:gap-6">
              <Image
                src={icon}
                width={54}
                height={54}
                className="rounded-full"
                alt="icon"
              />
              <div>
                <p className="text-base sm:text-lg xl:text-xl font-medium mb-2">
                  {title}
                </p>
                <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm">
                  <span className="flex items-center gap-2">
                    <IconMapPin size={18} /> {location}
                  </span>
                  <span className="flex items-center gap-2">
                    <IconClockHour4 size={18} /> {time}
                  </span>
                  <span className="flex items-center gap-2">
                    <IconCircleCheck size={18} /> {experience}
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex items-center max-md:justify-end gap-3 sm:gap-4">
              <Link href="#" className="btn lg:py-3 lg:px-6">
                Apply Now
              </Link>
              <button
                data-tooltip-id="bookmark"
                className="md:w-12 md:h-12 focus:outline-primary focus:outline-dashed focus:outline-1 focus:outline-offset-4 sm:w-10 sm:h-10 w-9 h-9 border border-n30 dark:border-n500 flex justify-center items-center text-primary rounded-full bg-primary/5 dark:bg-bg3">
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
      <Tooltip
        id="bookmark"
        style={tooltipStyle}
        offset={10}
        content="Save bookmark"
      />
    </div>
  );
};

export default ListViewThree;
