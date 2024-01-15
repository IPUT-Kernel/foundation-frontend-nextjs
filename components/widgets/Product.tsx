"use client";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Product = () => {
  const [fav, setFav] = useState(false);
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
      <div className="p-6 rounded-2xl bg-primary/5 dark:bg-bg3 flex relative items-start">
        <h4 className="h4 text-primary">$599</h4>
        <Image
          src="/images/watch.png"
          width={236}
          height={236}
          alt="product img"
        />
        <button
          onClick={() => setFav(!fav)}
          className="p-2 bg-n0 dark:bg-n600 rounded-lg text-primary absolute ltr:right-3 rtl:left-3 top-3">
          {fav ? <IconHeartFilled /> : <IconHeart />}
        </button>
      </div>
      <div className="pt-8 text-center px-5 xl:px-16 pb-7">
        <h4 className="h4 mb-4">Connected Watch</h4>
        <p className="text-sm mb-8">
          Apple — 5th Gen Connected Watch series, 64GB, 2023 issue
        </p>
        <Link href="#" className="btn w-full flex justify-center">
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
