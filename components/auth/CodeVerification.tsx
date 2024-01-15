"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import OTPInput from "react-otp-input";

const CodeVerification = () => {
  const [otp, setOtp] = useState("");
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
          <div className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 max-w-[696px]">
            <h3 className="h3 mb-4">Verify Your Phone Number</h3>
            <p className="mb-6 pb-6 bb-dashed">
              A 6 digit One Time Password (OTP) has been sent to your given
              email address which will expire in 15 minutes, after which you
              will need to resend the code.
            </p>

            <label
              htmlFor="number"
              className="md:text-lg font-medium block mb-4">
              Enter OTP Here
            </label>
            <OTPInput
              value={otp}
              onChange={setOtp}
              containerStyle="flex gap-1 sm:gap-2 xl:gap-3 xxxl:gap-4"
              inputStyle="py-2 px-2 lg:px-5 rounded-lg lg:rounded-[30px] !w-8 xl:!w-12 sm:!w-16 xxl:!w-20 bg-n0 xxxl:!w-24 dark:bg-bg4 inline-block focus:outline-none"
              numInputs={6}
              inputType="number"
              renderInput={(props) => <input {...props} />}
            />
            <button className="mb-2 font-semibold mt-6 lg:mt-10">
              Resend Code
            </button>
            <div className="my-5 lg:my-8">
              <button className="btn">Submit Now</button>
            </div>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-1">
              <IconArrowLeft /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeVerification;
