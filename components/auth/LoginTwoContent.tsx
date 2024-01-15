"use client";
import { IconArrowLeft, IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginTwoContent = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="min-h-screen grid grid-cols-2 gap-5 relative lg:after:absolute lg:after:w-1/2 py-10 lg:py-20 after:h-full lg:after:bg-primary/5 lg:dark:after:bg-bg3 ltr:after:left-0 rtl:after:right-0 after:top-0">
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
        <Image
          src="/images/login-2.png"
          className="relative z-[2] px-4"
          alt="img"
          width={696}
          height={547}
        />
      </div>
      <div className="col-span-2 lg:col-span-1 flex items-center justify-center px-5 md:px-10 xl:px-20 xxl:px-28">
        <div className="box w-full p-3 md:p-4 xl:p-6 items-center">
          <form className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8">
            <Link
              href="/dashboards/personal-1"
              className="flex items-center gap-2">
              <IconArrowLeft size={20} /> Back To Home
            </Link>
            <h3 className="h3 my-4">Welcome Back!</h3>
            <p className="md:mb-6 md:pb-6 mb-4 pb-4 bb-dashed text-sm md:text-base">
              Sign in to your account and join us
            </p>
            <label
              htmlFor="email"
              className="md:text-lg font-medium block mb-4">
              Enter Your Email ID
            </label>
            <input
              type="email"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-5"
              placeholder="Enter Your Email"
              id="email"
              required
            />
            <label
              htmlFor="password"
              className="md:text-lg font-medium block mb-4">
              Enter Your Password
            </label>
            <div className=" bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3 mb-4 relative">
              <input
                type={showPass ? "text" : "password"}
                className="w-11/12 text-sm focus:outline-none bg-transparent"
                placeholder="Enter Your Password"
                id="password"
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2 cursor-pointer">
                {showPass ? <IconEye /> : <IconEyeOff />}
              </span>
            </div>

            <Link href="#" className="flex justify-end text-primary text-sm">
              Forgot Password
            </Link>
            <p className="mt-3">
              Don&apos;t have an account?{" "}
              <Link className="text-primary" href="/signup-1">
                Signup
              </Link>
            </p>
            <div className="mt-8 flex gap-6">
              <button type="submit" className="btn px-5">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginTwoContent;
