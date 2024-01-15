"use client";
import {
  IconBuilding,
  IconBuildingSkyscraper,
  IconCloudDownload,
  IconHome,
} from "@tabler/icons-react";
import { useState } from "react";
import CheckboxCustom from "../shared/CheckBoxSquare";
import Dropdown from "../shared/Dropdown";
const types = [
  {
    icon: <IconHome />,
    type: "Solo",
    desc: "Small Company",
  },
  {
    icon: <IconBuilding />,
    type: "LLC",
    desc: "Medium Company",
  },
  {
    icon: <IconBuildingSkyscraper />,
    type: "Corp",
    desc: "Bigger Company",
  },
];
const statuslist = ["Select", "Employed", "Unemployed"];
const Company = () => {
  const [stype, setStype] = useState(types[0].type);
  const [selected, setSelected] = useState(statuslist[0]);
  return (
    <form className="grid grid-cols-12 box lg:divide-x rtl:lg:divide-x-reverse divide-dashed divide-primary/20 xxl:p-8">
      <div className="col-span-12 lg:col-span-6 ltr:lg:mr-10 rtl:lg:ml-10">
        <div className="box bg-primary/5 dark:bg-bg3 flex flex-col items-center py-10 lg:py-14">
          <IconCloudDownload size={50} />
          <p className="text-xl text-center font-medium my-4">
            Drop files here or click to upload
          </p>
          <input type="file" className="hidden" name="file" id="file" />
          <label
            htmlFor="file"
            className="text-center cursor-pointer text-primary">
            Browse
          </label>
        </div>
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="name" className="md:text-lg font-medium block mb-4">
              Company Name
            </label>
            <input
              type="text"
              className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Name"
              id="name"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="md:text-lg font-medium block mb-4">
              Company Email
            </label>
            <input
              type="email"
              className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Email"
              id="email"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="website"
              className="md:text-lg font-medium block mb-4">
              Company Website
            </label>
            <input
              type="text"
              className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Website"
              id="website"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="website"
              className="md:text-lg font-medium block mb-4">
              Choose Type
            </label>
            <div className="flex justify-between flex-wrap lg:flex-nowrap gap-4 xxxl:gap-6">
              {types.map(({ desc, icon, type }) => (
                <div
                  key={type}
                  onClick={() => setStype(type)}
                  className={`p-4 xxxl:p-6 w-full sm:w-[31%] cursor-pointer ${
                    type == stype
                      ? "border-primary"
                      : "border-n40 dark:border-n500"
                  } bg-primary/5 dark:bg-bg3 rounded-2xl  border flex flex-col items-center justify-center`}>
                  <div
                    className={`${
                      type == stype
                        ? "bg-primary text-n0"
                        : "bg-n0 dark:bg-bg4 text-primary"
                    } rounded-lg p-2 mb-4`}>
                    {icon}
                  </div>
                  <span>{type}</span>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ltr:lg:pl-10 rtl:lg:pr-10 col-span-12 lg:col-span-6">
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="income"
              className="md:text-lg font-medium block mb-4">
              Income
            </label>
            <input
              type="text"
              className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Income"
              id="income"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="employee"
              className="md:text-lg font-medium block mb-4">
              Employees
            </label>
            <input
              type="text"
              className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Employees"
              id="employee"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="manager"
              className="md:text-lg font-medium block mb-4">
              Manager
            </label>
            <input
              type="text"
              className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Enter Manager"
              id="manager"
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="employee"
              className="md:text-lg font-medium block mb-4">
              Employees
            </label>
            <Dropdown
              items={statuslist}
              setSelected={setSelected}
              selected={selected}
              width="w-full !py-3"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="notes"
              className="md:text-lg font-medium block mb-4">
              Company Notes
            </label>
            <textarea
              className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Write some notes..."
              id="notes"
              rows={5}
              required></textarea>
          </div>
          <div className="col-span-2 ">
            <CheckboxCustom label="This record is private" />
            <button className="btn mt-10">Create Company</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Company;
