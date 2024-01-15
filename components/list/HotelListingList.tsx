import {
  IconHeart,
  IconHeartFilled,
  IconMapPin,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const icons = [
  {
    icon: "/images/icon-car-parking.png",
    title: "parking",
  },
  {
    icon: "/images/icon-room-service.png",
    title: "room",
  },
  {
    icon: "/images/icon-breakfast.png",
    title: "restaurent",
  },
  {
    icon: "/images/icon-fitness.png",
    title: "fitness",
  },
  {
    icon: "/images/icon-glob.png",
    title: "free",
  },
  {
    icon: "/images/icon-swimming-pool.png",
    title: "swimming",
  },
  {
    icon: "/images/icon-laundry.png",
    title: "laundry",
  },
];
const HotelListingList = ({ item }: any) => {
  const [favorite, setFavorite] = useState(false);
  const { id, img, location, price, rating, title } = item;
  return (
    <div className="col-span-2 min-[620px]:col-span-1 lg:col-span-2">
      <div className="flex flex-col lg:flex-row box p-2 rounded-2xl bg-white hover:shadow-lg duration-300 border">
        <div className="relative h-full shrink-0">
          <div className="rounded-2xl">
            <Image
              width={400}
              height={260}
              src={img}
              alt="image"
              className=" w-full h-full rounded-2xl"
            />
          </div>
          <button
            onClick={() => setFavorite(!favorite)}
            className="absolute z-[2] left-4 top-4 md:left-6 md:top-6 text-primary  rounded-lg bg-n0 p-2.5 ">
            {favorite ? <IconHeartFilled /> : <IconHeart />}
          </button>
        </div>
        <div className="flex-grow p-2 md:p-3 lg:p-4 xxl:px-7">
          <div>
            <div className="flex justify-between mb-2">
              <Link
                href="#"
                className="link block flex-grow hover:text-primary text-xl font-medium">
                {title}
              </Link>
              <div className="flex gap-2 items-center shrink-0">
                <IconStarFilled size={18} className="text-secondary3dark" />
                <span className="block">{rating}</span>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <div className="flex items-center gap-1">
                <IconMapPin className="text-secondary3" />
                <span className="inline-block"> {location} </span>
              </div>
              <span className="inline-block font-medium text-secondary1">
                20% OFF
              </span>
            </div>
            <ul className="flex items-center flex-wrap gap-1 md:gap-3">
              {icons.map(({ icon, title }) => (
                <div
                  key={title}
                  data-tooltip-id={title}
                  className="grid place-content-center w-8 h-8 min-[800px]:w-10 min-[800px]:h-10 p-1 rounded-full bg-primary/5 dark:bg-bg3 text-primary">
                  <Image width={28} height={28} src={icon} alt="image" />
                </div>
              ))}
            </ul>
          </div>
          <div className="my-5 xl:my-7">
            <div className="bb-dashed"></div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 items-center">
            <span className="flex items-center gap-1">
              <span className="block text-xl font-medium text-primary">
                ${price}
              </span>
              <span className="inline-block  text-base font-normal">
                /per night
              </span>
            </span>
            <div className="flex gap-4">
              <Link href="#" className="btn-outline shadow-none font-semibold">
                More Info
              </Link>
              <Link href="#" className="btn font-semibold">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListingList;
