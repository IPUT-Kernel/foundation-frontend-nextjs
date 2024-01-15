"use client";

import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

const InputPassword = ({
  placeholder,
  defaultvalue,
}: {
  placeholder: string;
  defaultvalue?: string;
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className=" bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 relative">
      <input
        type={showPass ? "text" : "password"}
        className="w-11/12 text-sm focus:outline-none bg-transparent"
        placeholder={placeholder}
        id="password"
        defaultValue={defaultvalue ? defaultvalue : ""}
        required
      />
      <span
        onClick={() => setShowPass(!showPass)}
        className="absolute ltr:right-3 ltr:md:right-5 rtl:left-3 rtl:md:left-5 top-1/2 -translate-y-1/2 cursor-pointer">
        {showPass ? <IconEye size={20} /> : <IconEyeOff size={20} />}
      </span>
    </div>
  );
};

export default InputPassword;
