"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

type CartType = {
  id: number;
  title: string;
  price: string;
  img: string;
};

const CartItem = ({ cart }: { cart: CartType }) => {
  const [quantiry, setQuantity] = useState(1);
  const { img, price, title } = cart;
  const handleSubtract = () => {
    if (quantiry > 1) {
      setQuantity(quantiry - 1);
    }
  };
  const handleAdd = () => {
    setQuantity(quantiry + 1);
  };
  return (
    <div className="flex justify-between items-center  gap-3 md:gap-1">
      <div className="flex items-center gap-2 md:gap-4 xxxl:gap-6">
        <div className="h-10 w-10 md:h-14 md:w-14">
          <Image
            width={54}
            height={54}
            className="rounded-full"
            src={img}
            alt="img"
          />
        </div>
        <div>
          <p className="text-sm sm:text-base xxxl:text-xl mb-2">{title}</p>
          <p className="text-xs md:text-base text-primary font-semibold">
            {price}
          </p>
        </div>
      </div>
      <div className="flex gap-2 xxxl:gap-3 items-center">
        <button
          onClick={handleSubtract}
          className="p-0.5 sm:p-1 border rounded-full border-primary text-primary hover:bg-primary hover:text-n0 duration-300">
          <IconMinus size={18} />
        </button>
        <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex justify-center items-center  bg-primary text-n0">
          {quantiry}
        </span>
        <button
          onClick={handleAdd}
          className="p-0.5 sm:p-1 border rounded-full border-primary text-primary hover:bg-primary hover:text-n0 duration-300">
          <IconPlus size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
