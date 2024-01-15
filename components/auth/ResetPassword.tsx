"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";

const ResetPassword = () => {
  return (
    <div className="min-h-screen grid grid-cols-12 gap-5 relative xxl:after:absolute xxl:after:w-1/2 py-10 lg:py-20 after:h-full xxl:after:bg-primary/5 lg:dark:after:bg-bg3 ltr:after:left-0 rtl:after:right-0 after:top-0">
      <div className="col-span-12 lg:col-span-5 xxl:col-span-6 flex items-center justify-center">
        <Image
          src="/images/forgot-pass.png"
          className="relative z-[2] px-4"
          alt="img"
          width={696}
          height={648}
        />
      </div>
      <div className="col-span-12 lg:col-span-7 xxl:col-span-6  flex items-center justify-center px-5 md:px-10">
        <div className="box xl:p-4 mx-3">
          <form className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 max-w-[696px]">
            <h3 className="h3 mb-4">Set Up Your Password</h3>
            <p className="mb-6 pb-6 bb-dashed">
              Your security is our top priority. You&apos;ll need this to log
              into your account
            </p>
            <label
              htmlFor="password"
              className="md:text-lg font-medium block mb-4">
              Choose Password
            </label>
            <input
              type="password"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-2"
              placeholder="Enter Your Password"
              id="password"
              required
            />
            <label
              htmlFor="confirmpassword"
              className="md:text-lg font-medium block mb-4">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-2"
              placeholder="Confirm Password"
              id="confirmpassword"
              required
            />
            <div className="my-5 xl:my-8">
              <button className="btn px-5">Submit Now</button>
            </div>
            <span
              onClick={() => window.history.back()}
              className="flex items-center gap-1 cursor-pointer">
              <IconArrowLeft size={20} /> Back
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
