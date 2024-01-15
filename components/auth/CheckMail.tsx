"use client";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";

const CheckMail = () => {
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
          <div className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8">
            <h3 className="h3 mb-4">Hi, Check Your Mail</h3>
            <p className="mb-6 pb-6 bb-dashed">
              We have sent a password recover instructions to your email.
            </p>
            <div className="my-5 lg:my-8 ">
              <Link href="/login-1" className="btn px-5">
                Login
              </Link>
            </div>
            <p className="mb-6">Sign Up With</p>
            <SocialLinks />
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-1 mt-8 lg:mt-10">
              <IconArrowLeft size={20} /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
