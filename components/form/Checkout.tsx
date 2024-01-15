"use client";
import { FocusEvent, useState } from "react";
import Dropdown from "../shared/Dropdown";
const countries = ["USA", "UK", "PAK", "KSA"];
const Checkout = () => {
  const [selected, setSelected] = useState(countries[0]);
  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    try {
      e.currentTarget.showPicker();
    } catch (error) {}
  };
  return (
    <form className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 lg:col-span-8">
        <div className="box mb-4 xxxl:mb-6">
          <div className="mb-6 pb-6 bb-dashed">
            <p className="font-medium mb-3">Billing Address</p>
            <div className="flex text-sm md:text-base justify-between items-center">
              <p>
                Transaction ID: <span className="text-primary">25246584</span>
              </p>
              <p>
                Total Payable Amount:{" "}
                <span className="text-primary">$1115</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 xxxl:gap-6">
            <div className="col-span-2 md:col-span-1">
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter name"
                id="name"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                type="email"
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter email"
                id="email"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                type="number"
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Phone Number"
                id="number"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Dropdown
                items={countries}
                setSelected={setSelected}
                selected={selected}
                width="w-full !py-3"
              />
            </div>
            <div className="col-span-2">
              <textarea
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter Address"
                id="address"
                rows={5}
                required></textarea>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="mb-6 pb-6 bb-dashed">
            <p className="font-medium mb-6">Payment methods</p>
            <div className="flex gap-6 items-center flex-wrap">
              <label
                htmlFor="credit"
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  id="credit"
                  className="accent-primary scale-125"
                />
                Credit Card
              </label>
              <label
                htmlFor="debit"
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  id="debit"
                  className="accent-primary scale-125"
                />
                Debit Card
              </label>
              <label
                htmlFor="paypal"
                className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  id="paypal"
                  className="accent-primary scale-125"
                />
                Paypal
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 xxxl:gap-6">
            <div className="col-span-2">
              <label
                htmlFor="card"
                className="md:text-lg font-medium block mb-4">
                Card Number
              </label>
              <input
                type="number"
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Enter name"
                id="card"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="expiry"
                className="md:text-lg font-medium block mb-4">
                Expiry Date
              </label>

              <input
                type="date"
                className="w-full text-sm focus:outline-none appearance-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="DD/MM/YY"
                id="expiry"
                onFocus={handleFocus}
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="cvc"
                className="md:text-lg font-medium block mb-4">
                CVC/CVV
              </label>

              <input
                type="text"
                className="w-full text-sm focus:outline-none appearance-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="3 digits"
                id="cvc"
                required
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="nameoncard"
                className="md:text-lg font-medium block mb-4">
                Name on card
              </label>
              <input
                type="text"
                className="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
                placeholder="Jab Archur"
                id="nameoncard"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="box mb-4 xxxl:mb-6">
          <p className="font-medium mb-6">Enter promo code</p>
          <div className="w-full flex justify-between mb-4 bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-[30px] p-2">
            <input
              type="text"
              placeholder="Promo Code"
              className="bg-transparent text-sm w-full focus:outline-none px-4"
            />
            <button className="btn py-2 px-6">Apply</button>
          </div>
          <span className="text-sm md:text-base">20% Off Discount</span>
        </div>
        <div className="box mb-6">
          <p className="font-medium pb-6 mb-6 lg:pb-8 lg:mb-8 bb-dashed">
            Order Summery
          </p>
          <div className="pb-6 mb-6 lg:pb-8 lg:mb-8 bb-dashed flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>$110</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tax</span>
              <span>$15</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Promo Code</span>
              <span>20% OFF</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span>Payable Now</span>
            <span className="font-medium">$90</span>
          </div>
          <button className="btn w-full flex justify-center">Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
