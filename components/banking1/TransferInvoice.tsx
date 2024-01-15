"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import OptionsVertical from "../shared/OptionsVertical";
import Recipients from "./Recipients";
const banks = ["X Bank", "Y Bank", "Z Bank"];
const currencies = ["$", "€", "£", "¥"];
const TransferInvoice = () => {
  const [selected, setSelected] = useState(banks[0]);
  const [currency, setCurrency] = useState(currencies[0]);
  return (
    <div className="col-span-12 xl:col-span-4 xxxl:col-span-6 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Transfer & Send Invoice</p>
        <OptionsVertical />
      </div>
      <p className="text-xl mb-6 font-semibold">Recent Recipient</p>
      <Recipients />
      <form>
        <p className="mb-4">See All Contacts</p>
        <Dropdown
          width="w-full"
          selected={selected}
          setSelected={setSelected}
          items={banks}
        />
        <p className="mt-6 mb-4">Amount</p>
        <div className="flex gap-3 mb-6 lg:mb-8">
          <Dropdown
            selected={currency}
            setSelected={setCurrency}
            items={currencies}
            width="w-20"
          />
          <input
            type="number"
            className="border text-sm border-n40 dark:border-n500 w-full focus:outline-none flex gap-2 justify-between items-center rounded-[30px] bg-primary/5 dark:bg-bg3 px-4 py-2 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="0.00"
          />
        </div>
        <div className="flex items-center gap-3 mb-8 xl:mb-10">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="cursor-pointer">
            Funds will reach destination tomorrow.
          </label>
        </div>
        <div className="flex flex-wrap gap-6 ">
          <button className="btn">Transfer Funds</button>
          <div className="flex items-center flex-wrap gap-4">
            <p className="flex text-primary font-medium items-center gap-2">
              Apply More <IconArrowNarrowRight />
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900">
                <Image
                  width={38}
                  height={21}
                  src="/images/paypal.png"
                  alt="icon"
                />
              </Link>
              <Link
                href="#"
                className="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900">
                <Image
                  width={38}
                  height={21}
                  src="/images/visa.png"
                  alt="icon"
                />
              </Link>
              <Link
                href="#"
                className="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900">
                <Image
                  width={38}
                  height={21}
                  src="/images/payoneer.png"
                  alt="icon"
                />
              </Link>
              <Link
                href="#"
                className="inline-flex py-2 px-3 rounded-full border border-primary/20 dark:bg-n900">
                <Image
                  width={38}
                  height={21}
                  src="/images/mastercard.png"
                  alt="icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransferInvoice;
