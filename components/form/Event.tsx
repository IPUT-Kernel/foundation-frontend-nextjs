"use client";
import { FocusEvent } from "react";
import CheckboxCustom from "../shared/CheckBoxSquare";
import OptionsVertical from "../shared/OptionsVertical";

const Event = () => {
  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    try {
      e.currentTarget.showPicker();
    } catch (error) {}
  };
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <form className="col-span-12">
        <div className="box xl:p-8">
          <div className="flex justify-between items-center bb-dashed pb-6 mb-6">
            <p className="font-medium">New Event</p>
            <OptionsVertical />
          </div>
          <div className="box bg-primary/5 dark:bg-bg3  md:p-4 grid grid-cols-2 gap-4 xl:p-6 xxxl:gap-6 mb-6">
            <div className="col-span-2 bb-dashed pb-6">
              <p className="font-medium mb-1">Create an Event</p>
              <span className="text-xs">Create a new upcoming event</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="title"
                className="md:text-lg font-medium block mb-4">
                Event Title
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Title"
                id="title"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="email"
                className="md:text-lg font-medium block mb-4">
                Email Address
              </label>
              <input
                type="email"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Email"
                id="email"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="shortd"
                className="md:text-lg font-medium block mb-4">
                Short Description
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Write short des..."
                id="shortd"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="participants"
                className="md:text-lg font-medium block mb-4">
                Participants
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Add Participants"
                id="participants"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="start"
                className="md:text-lg font-medium block mb-4">
                Start Date
              </label>

              <input
                type="date"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 appearance-none"
                placeholder="Select Date"
                id="start"
                onFocus={handleFocus}
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="end"
                className="md:text-lg font-medium block mb-4">
                End Date
              </label>

              <input
                type="date"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 appearance-none"
                placeholder="Select Date"
                id="end"
                onFocus={handleFocus}
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="address"
                className="md:text-lg font-medium block mb-4">
                Address/Street
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Address"
                id="address"
                required
              />
            </div>{" "}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="city"
                className="md:text-lg font-medium block mb-4">
                City
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter City"
                id="city"
                required
              />
            </div>{" "}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="category"
                className="md:text-lg font-medium block mb-4">
                Event category
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Ex: CA"
                id="category"
                required
              />
            </div>{" "}
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="colorcode"
                className="md:text-lg font-medium block mb-4">
                Event color code
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Ex: 95422"
                id="colorcode"
                required
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="longdesc"
                className="md:text-lg font-medium block mb-4">
                Long Description
              </label>
              <textarea
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Write description..."
                id="longdesc"
                rows={5}
                required></textarea>
            </div>
            <div className="col-span-2 ">
              <CheckboxCustom label="This record is private" />
              <div className="flex gap-4 mt-10">
                <button type="submit" className="btn hover:shadow-none">
                  Submit
                </button>
                <button type="reset" className="btn-outline shadow-none">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Event;
