"use client";
import { IconSearch } from "@tabler/icons-react";
import { FocusEvent, useState } from "react";
import Dropdown from "../shared/Dropdown";
import Location from "./Location";

const classes = ["class", "class 2", "class 3"];
const fromlocations = ["From", "New York", "London", "Paris", "Riyad", "Dubai"];
const tolocations = ["To", "Kabul", "Islamabad", "Dhaka", "Mumbai", "Bihar"];
const Hero = () => {
  const [selectedClass, setClass] = useState(classes[0]);
  const [from, setFrom] = useState(fromlocations[0]);
  const [to, setTo] = useState(tolocations[0]);

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    try {
      e.currentTarget.showPicker();
    } catch (error) {}
  };
  return (
    <div className="col-span-12 rounded-2xl p-4 sm:p-6 md:p-10 xxl:p-[72px] xxl:pb-[139px] relative after:absolute after:w-full after:h-[95%] after:inset-0 after:bg-no-repeat after:rounded-2xl rtl:after:scale-x-[-1] after:bg-[url('/images/flights-banner-bg.png')] bg-no-repeat bg-cover shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
      <div className="relative z-[2]">
        <h1 className="h1 text-n0 max-w-[752px] mb-10">
          Secure Your Journey with Hassle-free Air Ticket Booking
        </h1>
        <div className="bg-n0 dark:bg-bg4 max-w-[864px] rounded-2xl p-3 sm:p-4 lg:py-5 lg:px-6">
          <form>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 accent-primary">
                <input
                  type="radio"
                  id="one-way"
                  name="trip"
                  className="scale-125"
                  defaultChecked
                />
                <label className="cursor-pointer" htmlFor="one-way">
                  One Way
                </label>
              </div>
              <div className="flex items-center gap-2 accent-primary">
                <input
                  type="radio"
                  id="round-trip"
                  name="trip"
                  className="scale-125"
                />
                <label className="cursor-pointer" htmlFor="round-trip">
                  Round Trip
                </label>
              </div>
              <div className="flex items-center gap-2 accent-primary">
                <input
                  type="radio"
                  id="multi-city"
                  name="trip"
                  className="scale-125"
                />
                <label className="cursor-pointer" htmlFor="multi-city">
                  Multi City
                </label>
              </div>
            </div>
            <div className="grid grid-cols-12 lg:grid-cols-9 gap-4">
              <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                <Location
                  setSelected={setFrom}
                  selected={from}
                  width="w-full"
                  items={fromlocations}
                />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                <Location
                  width="w-full"
                  setSelected={setTo}
                  selected={to}
                  items={tolocations}
                />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="date"
                  className="border select-none cursor-pointer border-n40 dark:border-n500 flex gap-2 justify-between items-center rounded-[30px] bg-primary/5 dark:bg-bg3 px-6 py-2.5 w-full">
                  <input
                    type="date"
                    onFocus={handleFocus}
                    className="bg-transparent text-sm w-full focus:outline-none"
                  />
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                <Dropdown
                  setSelected={setClass}
                  items={classes}
                  selected={selectedClass}
                  width="w-full !py-3"
                />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-1">
                <button className="btn py-2.5 lg:py-3 px-5 max-[400px]:w-full flex justify-center max-lg:px-16">
                  <IconSearch />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
