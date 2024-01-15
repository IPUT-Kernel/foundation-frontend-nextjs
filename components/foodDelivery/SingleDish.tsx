import {
  IconArrowUpRight,
  IconHeart,
  IconHeartFilled,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type dishType = {
  id: number;
  title: string;
  img: string;
  price: string;
};
const SingleDish = ({ dish }: { dish: dishType }) => {
  const [favorite, setFavorite] = useState(false);
  const { img, price, title } = dish;
  return (
    <div className="box p-2 bg-primary/5 dark:bg-bg3 rounded-2xl">
      <div className="box p-3 rounded-2xl relative">
        <Image
          width={173}
          height={122}
          src={img}
          className="w-full"
          alt="food img"
        />
        <button
          onClick={() => setFavorite(!favorite)}
          className="p-2 absolute top-2 right-2 bg-primary/5 dark:bg-bg3 rounded-xl text-primary">
          {favorite ? <IconHeartFilled size={20} /> : <IconHeart size={20} />}
        </button>
      </div>
      <div className="mt-4 md:mt-6 px-4 pb-4">
        <p className="font-semibold mb-2">{title}</p>
        <p className="text-xl font-semibold mb-2 text-primary">${price}</p>
        <div className="flex gap-2 text-secondary3dark mb-4">
          <IconStarFilled size={17} />
          <IconStarFilled size={17} />
          <IconStarFilled size={17} />
          <IconStarFilled size={17} />
          <IconStarHalfFilled size={17} />
        </div>
        <Link
          className="text-primary font-semibold flex items-center gap-2"
          href="#">
          Add Cart <IconArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default SingleDish;
