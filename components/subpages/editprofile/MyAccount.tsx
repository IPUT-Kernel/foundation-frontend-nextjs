"use client";
import Dropdown from "@/components/shared/Dropdown";
import Switch from "@/components/shared/Switch";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
const languages = ["English US", "Spanish", "Arabic", "Hindi"];

const recognized = [
  {
    id: 1,
    title: "Celt Desktop",
    desc: "4351 Deans Lane",
    status: false,
  },
  {
    id: 2,
    title: "Imco Tablet",
    desc: "4185 Michigan Avenue",
    status: true,
  },
  {
    id: 3,
    title: "Albs Mobile",
    desc: "3462 Fairfax Drive",
    status: true,
  },
];
const advanceSettings = [
  {
    id: 1,
    title: "Secure Browsing",
    desc: "Browsing Securely ( https ) when it's necessary",
    status: true,
  },
  {
    id: 2,
    title: "Login Notifications",
    desc: "Notify when login attempted from other place",
    status: false,
  },
  {
    id: 3,
    title: "Login Approvals",
    desc: "Approvals is not required when login from unrecognized devices.",
    status: true,
  },
  {
    id: 4,
    title: "Job Notification",
    desc: "Approvals is not required when login from unrecognized devices.",
    status: false,
  },
  {
    id: 5,
    title: "Message",
    desc: "Approvals is not required when login from unrecognized devices.",
    status: true,
  },
];
const activeSesstions = [
  {
    id: 1,
    title: "Celt Desktop",
    desc: "4351 Deans Lane",
  },
  {
    id: 2,
    title: "Moon Tablet",
    desc: "4185 Michigan Avenue",
  },
  {
    id: 3,
    title: "Albs Mobile",
    desc: "3462 Fairfax Drive",
  },
];
const MyAccount = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 lg:col-span-6">
        <div className="box xl:p-8 xxl:p-10 mb-6">
          <p className="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
            General Settings
          </p>
          <form className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
            <div className="col-span-2">
              <label
                htmlFor="username"
                className="md:text-lg font-medium block mb-4">
                Username *
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter username"
                defaultValue="Derrel Steward"
                id="username"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="email"
                className="md:text-lg font-medium block mb-4">
                Account Email *
              </label>
              <input
                type="email"
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Email"
                defaultValue="example@mail.com"
                id="email"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="location"
                className="md:text-lg font-medium block mb-4">
                Location
              </label>
              <Dropdown
                items={languages}
                setSelected={setSelected}
                selected={selected}
                width="!py-3 w-full"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="password"
                className="md:text-lg font-medium block mb-4">
                Sign in using *
              </label>
              <div className=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 mb-4 relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="w-11/12 text-sm focus:outline-none bg-transparent"
                  placeholder="Enter Your Password"
                  id="password"
                  defaultValue="!fE#42@Rbb"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute ltr:right-4 rtl:left-4 top-1/2 -translate-y-1/2 cursor-pointer">
                  {showPass ? <IconEye size={20} /> : <IconEyeOff size={20} />}
                </span>
              </div>
            </div>
            <div className="col-span-2 flex gap-4">
              <button className="btn px-5">Save Changes</button>
              <button className="btn-outline px-5">Cancel</button>
            </div>
          </form>
        </div>
        <div className="box xl:p-8 xxl:p-10">
          <p className="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
            Advance Settings
          </p>
          <div className="flex flex-col gap-6">
            {recognized.map(({ id, desc, status, title }) => (
              <div key={id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-xl mb-2">{title}</p>
                  <span className="text-sm">{desc}</span>
                </div>
                <Switch label={title} isChecked={status} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="box xl:p-8 xxl:p-10 mb-6">
          <p className="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
            Recognized Devices
          </p>
          <div className="flex flex-col gap-6">
            {advanceSettings.map(({ id, desc, status, title }) => (
              <div key={id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-xl mb-2">{title}</p>
                  <span className="text-sm">{desc}</span>
                </div>
                <Switch label={title} isChecked={status} />
              </div>
            ))}
          </div>
        </div>
        <div className="box xl:p-8 xxl:p-10">
          <p className="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
            Active Sessions
          </p>
          <div className="flex flex-col gap-6">
            {activeSesstions.map(({ id, desc, title }) => (
              <div key={id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-xl mb-2">{title}</p>
                  <span className="text-sm">{desc}</span>
                </div>
                <Link href="/login-1" className="btn-outline">
                  Log Out
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
