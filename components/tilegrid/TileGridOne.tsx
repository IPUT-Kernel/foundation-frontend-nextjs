"use client";
import useTable from "@/utils/useTable";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Pagination from "../shared/Pagination";
import TableActions from "../shared/TableActions";

const users = Array.from({ length: 80 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.person.fullName(),
    img: `/images/user-big-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])}.png`,
    designation: faker.person.jobTitle(),
  };
});

const TileGridOne = () => {
  const {
    currentPage,
    deleteItem,
    paginate,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(users, 24);

  return (
    <>
      <div className="min-h-[60vh]">
        <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
          {tableData.map(({ id, designation, img, name }) => (
            <div
              key={id}
              className="col-span-12 md:col-span-6 xl:col-span-4 box xl:p-4 xxxl:p-6 flex justify-between items-center">
              <div className="flex gap-3 items-center xxxl:gap-5">
                <Image
                  src={img}
                  width={60}
                  height={60}
                  className="rounded-full w-11 md:w-14 h-11 md:h-14"
                  alt="img"
                />
                <div>
                  <p className="font-medium text-lg md:text-xl mb-2">{name}</p>
                  <span className="text-sm">{designation}</span>
                </div>
              </div>
              <button className="bg-primary/5 dark:bg-bg3 rounded-full text-start p-2 border border-n30 dark:border-n500">
                <TableActions onDelete={() => deleteItem(id)} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 xl:mt-8">
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
      </div>
    </>
  );
};

export default TileGridOne;
