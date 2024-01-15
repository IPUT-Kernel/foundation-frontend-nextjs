"use client";
import {
  IconCalendarEvent,
  IconCirclePlus,
  IconCloudDownload,
  IconMapPin,
  IconPlus,
  IconPointFilled,
  IconVideo,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FocusEvent, useState } from "react";
import CheckboxCustom from "../shared/Checkbox";
const users = [
  "/images/user-2.png",
  "/images/user-3.png",
  "/images/user-4.png",
  "/images/user-5.png",
  "/images/user-6.png",
  "/images/user-7.png",
  "/images/user-8.png",
  "/images/user-9.png",
  "/images/user-10.png",
  "/images/user-11.png",
  "/images/user-12.png",
];
const colors = [
  {
    title: "1",
    text: "text-primary",
    border: "border-primary",
  },
  {
    title: "2",
    text: "text-secondary1",
    border: "border-secondary1",
  },
  {
    title: "3",
    text: "text-secondary2",
    border: "border-secondary2",
  },
  {
    title: "4",
    text: "text-secondary3",
    border: "border-secondary3",
  },
  {
    title: "5",
    text: "text-secondary3dark",
    border: "border-secondary3dark",
  },
];
const Meeting = () => {
  const [currentColor, setCurrentColor] = useState(colors[0].text);
  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    try {
      e.currentTarget.showPicker();
    } catch (error) {}
  };
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 lg:col-span-6">
        <form className="box">
          <div className="flex flex-wrap gap-3 justify-between items-center bb-dashed mb-6 pb-6">
            <div>
              <p className="font-medium mb-2">Meeting details</p>
              <span className="text-sm">Add some meeting details</span>
            </div>
            <Link href="#" className="btn lg:px-6">
              <IconCirclePlus />
              <span>Add People</span>
            </Link>
          </div>
          <p className="text-lg font-medium mb-3">Participants</p>
          <div className="flex">
            {users.map((user) => (
              <Image
                key={user}
                src={user}
                width={32}
                height={32}
                className="border border-n0 dark:border-n500 -mr-3 rounded-full"
                alt="img"
              />
            ))}
            <div className="border flex items-center justify-center text-n0 border-n0 dark:border-n500 rounded-full bg-primary w-8 h-8">
              <IconPlus size={22} />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 mt-6">
            <div>
              <label
                htmlFor="location"
                className="md:text-lg font-medium block mb-3">
                Meeting Location
              </label>
              <div className="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-4 gap-1">
                <IconMapPin className="text-n100" size={18} />
                <input
                  type="text"
                  className="w-full text-sm focus:outline-none bg-transparent py-3"
                  placeholder="Enter Location"
                  id="location"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="url"
                className="md:text-lg font-medium block mb-3">
                Meeting URL
              </label>
              <div className="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-4 gap-1">
                <IconVideo className="text-n100" size={18} />
                <input
                  type="text"
                  className="w-full text-sm focus:outline-none bg-transparent py-3"
                  placeholder="Ex: https://zoom.us/m/55626526554"
                  id="url"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="calender"
                className="md:text-lg font-medium block mb-3">
                Calender
              </label>
              <div className="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-4 gap-1">
                <IconCalendarEvent className="text-n100" size={18} />
                <input
                  type="date"
                  onFocus={handleFocus}
                  className="w-full text-sm focus:outline-none bg-transparent py-3 appearance-none"
                  id="calender"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="desc"
                className="md:text-lg font-medium block mb-3">
                Description
              </label>
              <textarea
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Write description..."
                id="desc"
                rows={5}
                required></textarea>
            </div>
            <div>
              <label
                htmlFor="attachment"
                className="md:text-lg font-medium block mb-3">
                Attachments
              </label>
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
            </div>
            <div>
              <label
                htmlFor="color"
                className="md:text-lg font-medium block mb-3">
                Color code
              </label>
              <div className="flex gap-6">
                {colors.map(({ title, border, text }) => (
                  <span
                    onClick={() => setCurrentColor(text)}
                    key={title}
                    className={`border-2 cursor-pointer rounded-full ${border} ${text}`}>
                    <IconPointFilled
                      className={`${
                        text == currentColor ? text : "text-n0 dark:text-bg4"
                      }`}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="notification"
                className="md:text-lg font-medium block mb-3">
                Notifications
              </label>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <CheckboxCustom label="General Notifications" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <CheckboxCustom label="Tem Notifications" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <CheckboxCustom label="Auto Reminders" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <CheckboxCustom label="Modifications" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 mt-10">
            <button className="btn">Save</button>
            <button className="btn-outline">Reset</button>
          </div>
        </form>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <form className="box">
          <div className="bb-dashed mb-6 pb-6">
            <p className="font-medium mb-2">Meeting details</p>
            <span className="text-sm">Add some meeting details</span>
          </div>
          <label htmlFor="about" className="md:text-lg font-medium block mb-4">
            What is this meeting about?
          </label>
          <input
            type="text"
            className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 mb-6"
            placeholder="Short desc..."
            id="about"
            required
          />
          <div className="grid grid-cols-4 gap-3 xxl:gap-4">
            <div className="col-span-4 lg:col-span-2 xxl:col-span-1">
              <label
                htmlFor="startDate"
                className="md:text-lg font-medium block mb-3">
                Start Date
              </label>
              <div className="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
                <IconCalendarEvent className="text-n100 shrink-0" size={22} />
                <input
                  type="date"
                  onFocus={handleFocus}
                  className="w-full appearance-none text-sm focus:outline-none bg-transparent py-3"
                  id="startDate"
                  required
                />
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2 xxl:col-span-1">
              <label
                htmlFor="endDate"
                className="md:text-lg font-medium block mb-3">
                End Date
              </label>
              <div className="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
                <IconCalendarEvent className="text-n100 shrink-0" size={22} />
                <input
                  type="date"
                  onFocus={handleFocus}
                  className="w-full appearance-none text-sm focus:outline-none bg-transparent py-3"
                  id="endDate"
                  required
                />
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2 xxl:col-span-1">
              <label
                htmlFor="startTime"
                className="md:text-lg font-medium block mb-3">
                Start Time
              </label>
              <div className="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
                <IconCalendarEvent className="text-n100 shrink-0" size={22} />
                <input
                  type="time"
                  onFocus={handleFocus}
                  className="w-full appearance-none text-sm focus:outline-none bg-transparent py-3"
                  id="startTime"
                  required
                />
              </div>
            </div>
            <div className="col-span-4 lg:col-span-2 xxl:col-span-1">
              <label
                htmlFor="endTime"
                className="md:text-lg font-medium block mb-3">
                End Time
              </label>
              <div className="bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl flex items-center px-3 gap-1">
                <IconCalendarEvent className="text-n100 shrink-0" size={22} />
                <input
                  type="time"
                  onFocus={handleFocus}
                  className="w-full appearance-none text-sm focus:outline-none bg-transparent py-3"
                  id="endTime"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="freq" className="md:text-lg font-medium block mb-4">
              Meeting frequency
            </label>
            <div className="flex gap-4">
              <label
                htmlFor="all"
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  id="all"
                  defaultChecked={true}
                  name="freq"
                  className="accent-primary scale-125"
                />{" "}
                All Day
              </label>
              <label
                htmlFor="week"
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  id="week"
                  name="freq"
                  className="accent-primary scale-125"
                />{" "}
                Repeat every week
              </label>
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 mt-10">
            <button className="btn">Save</button>
            <button className="btn-outline">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Meeting;
