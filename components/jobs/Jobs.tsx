"use client";
import useTable from "@/utils/useTable";
import { faker } from "@faker-js/faker";
import { IconRotate } from "@tabler/icons-react";
import Link from "next/link";
import CheckboxCustom from "../shared/Checkbox";
import Pagination from "../shared/Pagination";
import JobCard from "./JobCard";
const jobTypes = [
  {
    title: "Local Jobs",
    total: 365,
  },
  {
    title: "Featured Jobs",
    total: 4141,
  },
  {
    title: "Recruiter Jobs",
    total: 255,
  },
  {
    title: "Full Time Jobs",
    total: 857,
  },
  {
    title: "Half Time Jobs",
    total: 125,
  },
];
const jobCategories = [
  {
    title: "NLP Specialists",
    total: 1563,
  },
  {
    title: "Data Scientists",
    total: 1522,
  },
  {
    title: "Machine Learning",
    total: 2545,
  },
  {
    title: "Deep Learning",
    total: 5526,
  },
  {
    title: "Robotics Engineer",
    total: 1563,
  },
  {
    title: "AI Consultants",
    total: 1563,
  },
  {
    title: "Chatbot Developers",
    total: 1563,
  },
  {
    title: "Data Analysts",
    total: 1563,
  },
];
const skills = [
  "OpenAI",
  ".NET 5.0/6",
  ".NET",
  "PHP",
  "HTML",
  "Javascript",
  "Python",
];
const location = [
  {
    title: "Australia",
    total: 1546,
  },
  {
    title: "Delhi",
    total: 2546,
  },
  {
    title: "Germany",
    total: 4346,
  },
  {
    title: "Hamburg",
    total: 4006,
  },
  {
    title: "India",
    total: 4124,
  },
  {
    title: "Pakistan",
    total: 456,
  },
  {
    title: "UAE",
    total: 46,
  },
  {
    title: "Remote",
    total: 4522,
  },
];

const jobsData = Array.from({ length: 19 }).map((_, i) => {
  return {
    id: i + 1,
    title: faker.person.jobTitle(),
    salaryRange: `$${faker.number.int({
      max: 400,
      min: 300,
    })} - $${faker.number.int({ max: 900, min: 800 })}`,
    tags: faker.helpers.arrayElements(
      [
        "Python",
        "Software Architecture",
        "API Integration",
        "OpenAI",
        "Web Development",
        "Data Structure",
        "Algorithoms",
        "Design",
      ],
      { max: 4, min: 3 }
    ),
    desc: faker.word.words({ count: 60 }),
    expiry: `${faker.number.int({ max: 30, min: 4 })} Days Left`,
    location: faker.helpers.arrayElement([
      "Remote",
      "Onsite",
      "New York",
      "California",
      "San Francisco",
    ]),
    level: faker.helpers.arrayElement([
      "Junior",
      "Senior",
      "Expert",
      "Begginer",
    ]),
    proposals: faker.number.int({ max: 100, min: 10 }),
    company: {
      logo: `/images/company/company-${faker.helpers.arrayElement([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
      ])}.png`,
      name: faker.company.name(),
      verified: true,
    },
  };
});

const Jobs = () => {
  const {
    currentPage,
    deleteItem,
    endIndex,
    itemsPerPage,
    nextPage,
    paginate,
    prevPage,
    search,
    sortData,
    startIndex,
    tableData,
    totalData,
    totalPages,
  } = useTable(jobsData, 4);
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 md:col-span-4">
        <div className="box sticky top-24">
          <h4 className="h4 mb-6 pb-6 bb-dashed">Filter</h4>
          <p className="text-xl font-medium mb-4">Types of Jobs</p>
          <ul className="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
            {jobTypes.map(({ title, total }) => (
              <li key={title} className="flex items-center justify-between">
                <CheckboxCustom label={title} />
                <span>{total}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-medium mb-4">Types of Categories</p>
          <ul className="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
            {jobCategories.map(({ title, total }) => (
              <li key={title} className="flex items-center justify-between">
                <CheckboxCustom label={title} />
                <span>{total}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4">Budget</p>
          <div className="flex items-center gap-4  pb-6 mb-6 bb-dashed">
            <input
              type="number"
              placeholder="Min"
              className="w-full text-sm focus:outline-none border dark:border-n500 dark:bg-bg3 rounded-3xl py-2 px-3 xl:px-4"
            />
            <span>To</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full text-sm focus:outline-none border dark:border-n500 dark:bg-bg3 rounded-3xl py-2 px-3 xl:px-4"
            />
          </div>
          <p className="text-xl font-medium mb-4">Skills</p>
          <ul className="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
            {skills.map((item) => (
              <li key={item} className="flex items-center justify-between">
                <CheckboxCustom label={item} />
              </li>
            ))}
          </ul>
          <p className="text-xl font-medium mb-4">Location</p>
          <ul className="flex flex-col gap-2 mb-6 pb-6 bb-dashed">
            {location.map(({ title, total }) => (
              <li key={title} className="flex items-center justify-between">
                <CheckboxCustom label={title} />
                <span>{total}</span>
              </li>
            ))}
          </ul>
          <Link href="#" className="btn-outline w-full justify-center">
            {" "}
            <IconRotate /> Reset Filters
          </Link>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 flex flex-col gap-4 xxxl:gap-8">
        {tableData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <Pagination
          currentPage={currentPage}
          endIndex={endIndex}
          goToPage={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          startIndex={startIndex}
          total={totalData}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Jobs;
