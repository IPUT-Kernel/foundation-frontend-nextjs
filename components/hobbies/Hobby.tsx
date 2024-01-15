"use client";
import useDropdown from "@/utils/useDropdown";
import { IconArrowNarrowRight, IconDotsVertical } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const hobylist = [
  {
    title: "The Desert",
    img: "/images/hoby-1.png",
  },
  {
    title: "The Forest",
    img: "/images/hoby-2.png",
  },
  {
    title: "The Sunset",
    img: "/images/hoby-3.png",
  },
  {
    title: "Wildlife",
    img: "/images/hoby-4.png",
  },
  {
    title: "Wild bird",
    img: "/images/hoby-5.png",
  },
];
const options = [
  {
    title: "Edit",
    url: "#",
  },
  {
    title: "Delete",
    url: "#",
  },
  {
    title: "Share",
    url: "#",
  },
];

const SingleHobby = ({ title, img }: { title: string; img: string }) => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative group col-span-6 md:col-span-3 lg:col-span-2">
      <Image
        width={174}
        height={200}
        src={img}
        className="rounded-2xl w-full"
        alt="hoby img"
      />
      <div className="p-4 absolute inset-0 flex flex-col justify-between opacity-0 duration-300 group-hover:opacity-100">
        <div ref={ref} className="flex items-center justify-between w-full">
          <p className="font-semibold text-n0">{title}</p>
          <button onClick={toggleOpen}>
            <IconDotsVertical size={22} className="text-n0" />
          </button>
          <ul
            className={`${
              open ? "block" : "hidden"
            } absolute top-5 right-9 border z-30 dark:border-n500 min-w-max p-1.5 rounded-md bg-n0 dark:bg-bg4`}>
            {options.map(({ title, url }) => (
              <li key={title}>
                <Link
                  href={url}
                  className="py-1.5 hover:bg-primary rounded-md hover:text-n30 duration-300 block px-3">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="#" className="flex items-center justify-between w-full">
          <span className="font-semibold text-n0 text-xs">View Activities</span>
          <IconArrowNarrowRight size={20} className="text-n0" />
        </Link>
      </div>
    </div>
  );
};

const Hobby = () => {
  return (
    <div className="box grid grid-cols-12 lg:grid-cols-10 gap-4 mb-4 xxxl:mb-6">
      {hobylist.map((hobby) => (
        <SingleHobby {...hobby} key={hobby.title} />
      ))}
    </div>
  );
};

export default Hobby;
