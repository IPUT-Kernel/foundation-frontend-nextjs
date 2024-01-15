"use client";
import { IconCheck, IconCirclePlus, IconMessage } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CheckboxCustom from "../shared/CheckBoxSquare";
import Dropdown from "../shared/Dropdown";
import OptionsVertical from "../shared/OptionsVertical";
import SocialLinks from "../shared/SocialLinks";
import StarRating from "./StarRating";
const experiences = ["0-5 Years", "3-6 Years", "5-10 Years"];
const specialities = ["Surgery", "Orthopedix", "Guinocology"];
const allStatus = ["Intern", "Fresher", "Expert"];

const Doctor = () => {
  const [experience, setExperience] = useState(experiences[0]);
  const [speciality, setSpciality] = useState(specialities[0]);
  const [status, setStatus] = useState(allStatus[0]);

  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <form className="col-span-12 lg:col-span-7 xl:col-span-8">
        <div className="box xl:p-8">
          <div className="flex justify-between items-center bb-dashed pb-6 mb-6">
            <p className="font-medium">New Doctor</p>
            <OptionsVertical />
          </div>
          <div className="box bg-primary/5 dark:bg-bg3  md:p-4 grid grid-cols-2 gap-4 xl:p-6 xxxl:gap-6 mb-6">
            <div className="col-span-2 bb-dashed pb-6">
              <p className="font-medium mb-1">General Info</p>
              <span className="text-xs">Some general Information</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="name"
                className="md:text-lg font-medium block mb-4">
                Name
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Name"
                id="name"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="email"
                className="md:text-lg font-medium block mb-4">
                Email
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
                htmlFor="experience"
                className="md:text-lg font-medium block mb-4">
                Experience
              </label>
              <Dropdown
                items={experiences}
                setSelected={setExperience}
                selected={experience}
                width="w-full !py-3 "
                bg=" bg-n0 dark:bg-bg4"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="speciality"
                className="md:text-lg font-medium block mb-4">
                Speciality
              </label>
              <Dropdown
                items={specialities}
                setSelected={setSpciality}
                selected={speciality}
                width="w-full !py-3"
                bg=" bg-n0 dark:bg-bg4"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="status"
                className="md:text-lg font-medium block mb-4">
                Status
              </label>
              <Dropdown
                items={allStatus}
                setSelected={setStatus}
                selected={status}
                width="w-full !py-3"
                bg=" bg-n0 dark:bg-bg4"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="status"
                className="md:text-lg font-medium block mb-4">
                Status
              </label>
              <div className="w-full focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3">
                <StarRating />
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="comments"
                className="md:text-lg font-medium block mb-4">
                Comments
              </label>
              <textarea
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-xl md:rounded-3xl px-6 py-3"
                placeholder="Write something..."
                id="comments"
                rows={5}
                required></textarea>
            </div>
          </div>
          <div className="box bg-primary/5 dark:bg-bg3 md:p-4 grid grid-cols-2 gap-4 xl:p-6 xxxl:gap-6">
            <div className="col-span-2 bb-dashed pb-6">
              <p className="font-medium mb-1">Personal Info</p>
              <span className="text-xs">Some personal Information</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="street"
                className="md:text-lg font-medium block mb-4">
                Address / Street
              </label>
              <div>
                <input
                  type="text"
                  className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                  placeholder="Enter Address"
                  id="street"
                  required
                />
              </div>
            </div>
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
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="state"
                className="md:text-lg font-medium block mb-4">
                State/Province
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Ex: CA"
                id="state"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="zip"
                className="md:text-lg font-medium block mb-4">
                Zip Code
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Ex: 56251"
                id="zip"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <CheckboxCustom label="This record is private" />
            <div className="flex gap-4 mt-7 lg:mt-10">
              <button type="submit" className="btn px-4 hover:shadow-none">
                Submit
              </button>
              <button type="reset" className="btn-outline px-4 shadow-none">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="col-span-12 lg:col-span-5 xl:col-span-4">
        <div className="box xl:p-6">
          <div className="bg-primary/5 p-8 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full">
            <div className="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
              <Image
                width={120}
                height={120}
                className="rounded-full"
                src="/images/user-big-1.png"
                alt="img"
              />
              <div className="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
                <IconCheck size={18} />
              </div>
            </div>
            <h4 className="mt-6 lg:mt-8 h4 mb-3">Dr Jenny Wilson</h4>
            {/* Social icons */}
            <div className="flex justify-center bb-dashed pb-6 mb-6 w-full">
              <SocialLinks />
            </div>
            <div className="flex justify-center bb-dashed pb-6 mb-6 w-full">
              <div className="flex flex-wrap gap-3 justify-center text-center md:divide-x rtl:md:divide-x-reverse divide-primary/30">
                <div className="px-3">
                  <p className="text-lg text-primary font-semibold mb-1">N/A</p>
                  <p className="text-sm">Role Status</p>
                </div>
                <div className="px-3">
                  <p className="text-lg text-primary font-semibold mb-1">
                    0 - 5
                  </p>
                  <p className="text-sm">Years of exp.</p>
                </div>
                <div className="px-3">
                  <p className="text-lg text-primary font-semibold mb-1">
                    Lvl. n/a
                  </p>
                  <p className="text-sm">Global rating</p>
                </div>
              </div>
            </div>

            {/* follow buttons */}
            <div className="flex gap-3 justify-center">
              <Link href="#" className="btn">
                <IconCirclePlus />
                Follow
              </Link>
              <Link href="#" className="btn-outline ">
                <IconMessage />
                Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
