"use client";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import useTable from "../../utils/useTable";
import Pagination from "../shared/Pagination";
import ProgressBarSingle from "../shared/ProgressBarSingle";
import SocialLinks from "./SocialLinks";
const users = Array.from({ length: 48 }).map((_, i) => {
  return {
    id: i + 1,
    name: faker.person.firstName(),
    img: `/images/user-big-${faker.helpers.arrayElement([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])}.png`,
    percent: faker.helpers.rangeToNumber({ max: 99, min: 20 }),
    designation: faker.person.jobTitle(),
  };
});

const CardOne = () => {
  const {
    currentPage,
    paginate,
    tableData,
    totalPages,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalData,
  } = useTable(users, 10);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 xxxl:gap-6">
        {tableData.map(({ name, designation, img, percent }) => (
          <div key={name} className="col-span-2 lg:col-span-1 box xxl:p-8">
            <div className="bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6 flex justify-between flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 sm:gap-4">
                <Image
                  src={img}
                  width={60}
                  height={60}
                  className="rounded-full"
                  alt="user img"
                />
                <Link href="#">
                  <h6 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">
                    {name}
                  </h6>
                  <span className="text-sm">{designation}</span>
                </Link>
              </div>
              <Link
                href="#"
                className="btn-outline px-2 lg:py-3 lg:px-6 max-[356px]:ml-[70px]">
                View Profile
              </Link>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="w-full md:w-1/2">
                <div className="flex justify-between items-center mb-3 lg:mb-4">
                  <span>Progress</span>
                  <span className="text-primary">
                    <CountUp end={percent} enableScrollSpy={true} />%
                  </span>
                </div>
                <ProgressBarSingle bg="bg-primary" width={percent} />
              </div>
              <SocialLinks />
            </div>
          </div>
        ))}
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

export default CardOne;
