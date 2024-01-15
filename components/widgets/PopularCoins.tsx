"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";

const coins = [
  {
    name: "BTC",
    img: "/images/btc.png",
  },
  {
    name: "ETH",
    img: "/images/eth.png",
  },
  {
    name: "BNB",
    img: "/images/bnb.png",
  },
  {
    name: "ADA",
    img: "/images/ada.png",
  },
  {
    name: "DOGE",
    img: "/images/doge.png",
  },
  {
    name: "SOL",
    img: "/images/sol.png",
  },
  {
    name: "ADB",
    img: "/images/ada.png",
  },
  {
    name: "BNC",
    img: "/images/bnb.png",
  },
];
const PopularCoins = () => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Popular Coins</p>
        <OptionsVertical />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3 text-n500 dark:text-n30">
              <th className="py-3 font-semibold px-4 text-start">Name</th>
              <th className="py-3 font-semibold px-4 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(({ img, name }) => (
              <tr key={name} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="py-3 px-4">
                  <Link href="#" className="flex items-center gap-2">
                    <Image
                      className="rounded-full"
                      src={img}
                      width={32}
                      height={32}
                      alt="img"
                    />
                    <p>{name}</p>
                  </Link>
                </td>
                <td className="py-3 px-4">
                  <Link href="#" className="flex justify-center">
                    <IconArrowUpRight />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopularCoins;
