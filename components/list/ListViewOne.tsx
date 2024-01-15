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
    team: faker.helpers.arrayElements(
      [
        "/images/user.png",
        "/images/user-2.png",
        "/images/user-3.png",
        "/images/user-4.png",
        "/images/user-5.png",
      ],
      { min: 2, max: 5 }
    ),
    title: faker.person.firstName(),
    img: `/images/user-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])}.png`,
    country: faker.location.country(),
    projects: faker.number.int({ min: 50, max: 200 }),
    designation: faker.person.jobTitle(),
  };
});

const ListViewTest = () => {
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
      <div className="flex flex-wrap gap-4 justify-between items-center bb-dashed mb-6 pb-6">
        <p className="font-medium">List View</p>
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <SearchBar handleSearch={search} />
          <div className="flex items-center gap-2 shrink-0">
            <p className="text-xs sm:text-sm">Sort By : </p>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              items={options}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto pb-6 mb-6 bb-dashed">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3">
              <th
                onClick={() => sortData("title")}
                className="text-start p-3 ltr:pl-8 rtl:pr-8 w-[20%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  User <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("designation")}
                className="text-start p-3 w-[25%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Designation <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("projects")}
                className="text-start p-3 w-[25%]">
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  Info <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start p-3">Team</th>
              <th className="p-3 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(
              (
                { country, id, img, title, projects, designation, team },
                index
              ) => (
                <tr key={id} className="even:bg-primary/5 dark:even:bg-bg3">
                  <td className="py-2 pl-8 px-3">
                    <div className="flex items-center gap-3 pr-5">
                      <Image
                        width={32}
                        height={32}
                        className="rounded-full shrink-0"
                        src={img}
                        alt="img"
                      />
                      <div>
                        <p className="font-medium mb-1">{title}</p>
                        <span className="text-xs">{country}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-3 pr-7">
                    <div className="flex justify-start">
                      <span className="flex justify-center min-w-[200px] lg:min-w-[250px] text-xs rounded-3xl bg-primary/5 dark:bg-bg3 border border-n40 dark:border-n500 text-primary py-3">
                        {designation}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 px-3">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">{projects}</p>
                      <p className="text-xs">Projects</p>
                    </div>
                  </td>
                  <td className="py-2 px-5">
                    <div className="flex">
                      {team.map((item, i) => (
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
                  <td className="my-5 px-5 mx-3 flex justify-center">
                    <TableActions
                      onDelete={() => deleteItem(id)}
                      fromBottom={
                        index == tableData.length - 1 ||
                        index == tableData.length - 2
                      }
                    />
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

export default ListViewTest;
