"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";

const ForgotPasswordContent = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-8 relative lg:after:absolute lg:after:w-1/2 py-10 lg:py-20 after:h-full lg:after:bg-primary/5 lg:dark:after:bg-bg3 ltr:after:left-0 rtl:after:right-0 after:top-0">
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
        <Image
          src="/images/forgot-pass.png"
          className="relative z-[2] px-4"
          alt="img"
          width={696}
          height={648}
        />
      </div>
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center px-5 md:px-10 xl:px-20 xxl:px-28">
        <div className="box xl:p-4">
          <form className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 max-w-[648px]">
            <h3 className="h3 mb-4">
              What&apos;s the best number to reach you on?
            </h3>
            <p className="mb-6 pb-6 bb-dashed">
              We don&apos;t send spam, just important information you must know
            </p>

            <label
              htmlFor="number"
              className="md:text-lg font-medium block mb-4">
              Mobile Number
            </label>
            <input
              type="number"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 lg:px-6 lg:py-3 mb-2"
              placeholder="Enter Number"
              id="number"
              required
            />
            <div className="xxl:my-8 my-4">
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

export default ForgotPasswordContent;
