"use client";
import { IconDownload, IconMapPin, IconUpload } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";
import CartItem from "./CartItem";
const cartItems = [
  {
    id: 1,
    title: "Penne Arrabbiata",
    price: "$5.86",
    img: "/images/cart/item-1.png",
  },
  {
    id: 2,
    title: "Sushi Rolls",
    price: "$5.86",
    img: "/images/cart/item-2.png",
  },
  {
    id: 3,
    title: "Burger Deluxe",
    price: "$5.86",
    img: "/images/cart/item-3.png",
  },
  {
    id: 4,
    title: "Pad Thai",
    price: "$5.86",
    img: "/images/cart/item-4.png",
  },
  {
    id: 5,
    title: "Miso Soup",
    price: "$5.86",
    img: "/images/cart/item-5.png",
  },
];
const Sidebar = () => {
  const { theme } = useTheme();
  return (
    <div className="box px-2 sm:px-3 p-3">
      <div className="bg-primary/5 dark:bg-bg3 rounded-2xl p-4 md:p-6">
        <div className="flex justify-between items-center bb-dashed pb-6 mb-6">
          <p className="font-medium">Your Balance</p>
          <OptionsVertical />
        </div>
        <div className="box p-2 sm:p-3">
          <div
            className={`bg-primary/5 dark:bg-bg3 rounded-2xl p-2 md:p-6 ${
              theme == "light"
                ? "bg-[url('/images/bg-profile.png')]"
                : "bg-[url('/images/bg-profile-dark.png')]"
            }  bg-right-top bg-no-repeat `}>
            <p className="text-xl font-medium mb-4">Balance</p>
            <h2 className="display-4 mb-8">$660.00</h2>
            <div className="flex gap-2 sm:gap-4">
              <Link
                href="#"
                className="btn px-2.5 py-1.5 xxxl:py-3 xxxl:px-5 gap-1 sm:gap-2">
                {" "}
                <IconDownload /> Top Up
              </Link>
              <Link
                href="#"
                className="btn-outline px-2.5 py-1.5 xxxl:py-3 xxxl:px-5 gap-1 sm:gap-2">
                {" "}
                <IconUpload /> transfer
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="pt-6 mt-6 border-t text-xl font-medium border-primary/20 border-dashed">
            Your Address
          </p>
          <div className="flex items-center flex-wrap justify-between mt-5 mb-4 gap-3">
            <div className="flex items-center gap-2">
              <IconMapPin className="text-primary" />
              <h4 className="h4">Map Street, 23</h4>
            </div>
            <button className="btn-outline">Change</button>
          </div>
          <p className="mb-6 lg:mb-8">
            Lorem ipsum is a placeholder text commonly used in the printing and
            typesetting industry.{" "}
          </p>
          <div className="flex gap-4 flex-wrap bb-dashed pb-6 mb-6">
            <Link href="#" className="btn">
              {" "}
              Add Details
            </Link>
            <Link href="#" className="btn-outline">
              {" "}
              Add Note
            </Link>
          </div>
          <div className="flex flex-col gap-6 bb-dashed pb-6 mb-6">
            {cartItems.map((item) => (
              <CartItem cart={item} key={item.id} />
            ))}
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Service Charge</span>
            <p className="font-semibold">+$2.00</p>
          </div>
          <div className="flex justify-between items-center mb-6 lg:mb-8">
            <span className="text-2xl">Total</span>
            <span className="text-2xl font-semibold">$20.00</span>
          </div>
          <Link href="#" className="btn w-full flex justify-center">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
