"use client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import generator from "generate-password";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckboxCustom from "../shared/Checkbox";
import OptionsVertical from "../shared/OptionsVertical";

const PasswordGen = () => {
  const [length, setLength] = useState(10);
  const [value, setValue] = useState([10, 50]);
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(false);
  const { theme } = useTheme();

  const handleChangeLower = () => {
    setLowercase(!lowercase);
  };
  const handleChangeUpper = () => {
    setUppercase(!uppercase);
  };
  const handleChangeNumber = () => {
    setNumber(!number);
  };
  const handleChangeSymbol = () => {
    setSymbol(!symbol);
  };
  const generatePwd = () => {
    const pwd = generator.generate({
      length,
      lowercase,
      uppercase,
      numbers: number,
      symbols: symbol,
    });
    setPassword(pwd);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast.success("Copied To Clipboard", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleChange = (event: any) => {
    setValue(event);
    setLength(value[1]);
  };
  const isAnyTrue = lowercase || uppercase || number || symbol;
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6 items-center">
      <div className="col-span-12 lg:col-span-6">
        <div className="box">
          <div className="flex justify-between items-center mb-6 pb-6 bb-dashed">
            <p className="font-medium">Generate Password</p>
            <OptionsVertical />
          </div>
          <div className="box bg-primary/5 lg:p-6">
            <p className="text-xl font-medium mb-3">New Password</p>
            <p className="mb-6 pb-6 bb-dashed">
              Change the length value to generate a new random password. You can
              also change the character types.
            </p>
            <label
              htmlFor="password"
              className="md:text-lg font-medium block mb-4">
              Password
            </label>
            <div className=" bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 mb-6 relative">
              <input
                type={showPass ? "text" : "password"}
                className="w-11/12 text-sm focus:outline-none bg-transparent"
                placeholder="Password"
                id="password"
                min={6}
                max={50}
                value={password}
                required
                readOnly
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2">
                {showPass ? <IconEye /> : <IconEyeOff />}
              </button>
            </div>
            <label
              htmlFor="length"
              className="md:text-lg font-medium block mb-4">
              Password length
            </label>
            <input
              type="number"
              className="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
              placeholder="Password Length"
              id="length"
              onChange={(e) => setLength(Number(e.target.value))}
              value={length}
              required
            />
            <div id="range" className="py-6">
              <label
                htmlFor="character"
                className="md:text-lg font-medium block mb-4">
                Character Scale
              </label>
              <RangeSlider
                className="single-thumb"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                defaultValue={[0, 10]}
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
                min={6}
                max={50}
              />
            </div>
            <p className="mb-5 font-medium mt-6">Character Types</p>
            <div className="grid grid-cols-2 gap-4 pb-6 bb-dashed">
              <div className="col-span-1">
                <CheckboxCustom
                  checked={lowercase}
                  label="Lowercase"
                  onChange={handleChangeLower}
                />
              </div>
              <div className="col-span-1">
                <CheckboxCustom
                  checked={uppercase}
                  label="Uppercase"
                  onChange={handleChangeUpper}
                />
              </div>
              <div className="col-span-1">
                <CheckboxCustom
                  checked={number}
                  label="Numbers"
                  onChange={handleChangeNumber}
                />
              </div>
              <div className="col-span-1">
                <CheckboxCustom
                  checked={symbol}
                  label="Symbols"
                  onChange={handleChangeSymbol}
                />
              </div>
            </div>
            <div className="mt-10 flex-wrap flex gap-6">
              <button
                className="btn disabled:cursor-not-allowed"
                disabled={!isAnyTrue}
                onClick={generatePwd}>
                Generate New
              </button>
              <button
                className="btn-outline disabled:cursor-not-allowed"
                onClick={handleCopy}
                disabled={!password}>
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <Image
          src="/images/password-gen.png"
          width={756}
          height={705}
          alt="illustration password gen"
        />
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        toastClassName="bg-n0 dark:bg-bg3 dark:text-n20"
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme == "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default PasswordGen;
