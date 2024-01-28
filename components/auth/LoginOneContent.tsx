"use client";
import { IconArrowLeft, IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";

import axios from 'axios';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from '@/store/authStore';

import Alert from '@mui/material/Alert';  

type Input = {
  email: string;
  password: string;
};

const LoginOneContent = () => {

  const [alert, setAlert] = useState<{ 
    open: boolean,
    message: string,
    severity?: 'error' | 'info' | 'success' | 'warning' 
  }>({ 
    open: false,
    message: '', 
    severity: 'success' });

  const [showPass, setShowPass] = useState(false);
  const {register, handleSubmit, formState: { errors } } = useForm<Input>();

  const login = useAuthStore((state) => state.login)

  const onSubmit = async (data: Input) => {
    try {
      const response = await axios.post('http://localhost:4000/v1/auth/login', data);
      if (response.data && response.data.user && response.data.token) {
        login(response.data.user, response.data.token);
        console.log(useAuthStore.getState());
        setAlert({ open: true, message: 'ログインに成功しました。', severity: 'success' });
      } else {
        setAlert({ open: true, message: 'ログインに失敗しました。', severity: 'error' });
      }
    } catch (error: any) {
      console.error(error);
      setAlert({ 
        open: true,
        message: error.response?.data || '不明なエラー',
        severity: 'error' 
      });
    }
  };


  return (
    <div>
      { alert.open && <Alert className="m-4 mx-5 md:mx-10 xl:mx-20 xxl:mx-28" severity={alert.severity}>{alert.message}</Alert> }
      <div className="min-h-screen relative lg:after:absolute py-10 lg:py-20 after:h-full lg:after:bg-primary/5 lg:dark:after:bg-bg3 ltr:after:right-0 rtl:after:left-0 after:top-0">
        <div className=" flex items-center justify-center px-5 md:px-10 xl:px-20 xxl:px-28">
          <div className="box w-full p-3 md:p-4 xl:p-6 items-center max-w-[805px]">
            <form className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8" onSubmit={handleSubmit(onSubmit)}>
              <Link
                href="/dashboards/personal-1"
                className="flex items-center gap-2">
                <IconArrowLeft size={20} /> ホームへ戻る
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
                {...register("email", { required: true })}
                type="email"
                className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
                placeholder="Enter Your Email"
                id="email"
              />
              <label
                htmlFor="password"
                className="md:text-lg font-medium block mb-4">
                Enter Your Password
              </label>
              <div className=" bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-4 relative">
                <input
                  {...register("password", { required: true })}
                  type={showPass ? "text" : "password"}
                  className="w-11/12 text-sm focus:outline-none bg-transparent"
                  placeholder="Enter Your Password"
                  id="password"
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
                <button className="btn px-5" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOneContent;
