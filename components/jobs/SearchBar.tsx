"use client";
import { IconMapPin, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const options = ["Full Time", "Part Time", "Remote"];
const SearchBar = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="box mb-4 xxxl:mb-6">
      <form className="grid grid-cols-10 gap-4">
        <div className="col-span-10 md:col-span-5 xl:col-span-2">
          <div className="py-3 px-6 flex gap-3 items-center justify-between rounded-[30px] bg-primary/5 dark:bg-bg3 border focus-within:border-primary focus:outline-none border-n40 dark:border-n500">
            <input
              type="text"
              placeholder="Job Keywords"
              className="w-full text-sm focus:outline-none bg-transparent"
            />
            <IconSearch size={20} />
          </div>
        </div>
        <div className="col-span-10 md:col-span-5 xl:col-span-2">
          <div className="py-3 px-6 flex gap-3 items-center justify-between rounded-[30px] bg-primary/5 dark:bg-bg3 border focus-within:border-primary focus:outline-none border-n40 dark:border-n500">
            <input
              type="text"
              placeholder="Location"
              className="w-full text-sm focus:outline-none bg-transparent"
            />
            <IconMapPin size={20} />
          </div>
        </div>
        <div className="col-span-10 md:col-span-5 xl:col-span-2">
          <Dropdown
            items={options}
            width="w-full !py-3"
            setSelected={setSelected}
            selected={selected}
          />
        </div>
        <div className="col-span-10 md:col-span-5 xl:col-span-2">
          <div className="py-3 px-6 flex items-center justify-between rounded-[30px] bg-primary/5 dark:bg-bg3 border focus-within:border-primary focus:outline-none border-n40 dark:border-n500">
            <input
              type="number"
              placeholder="Salary"
              className="w-full text-sm focus:outline-none bg-transparent [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>
        <div className="col-span-10 md:col-span-5 xl:col-span-2">
          <button className="btn w-full flex justify-center py-2.5">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
