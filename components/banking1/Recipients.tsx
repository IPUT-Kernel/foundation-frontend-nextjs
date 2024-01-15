"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useRef } from "react";
const items = [
  {
    name: "Courtney",
    img: "/images/user.png",
  },
  {
    name: "Arthur",
    img: "/images/user-2.png",
  },
  {
    name: "Cody",
    img: "/images/user-3.png",
  },
  {
    name: "Shane",
    img: "/images/user-4.png",
  },
  {
    name: "Esther",
    img: "/images/user-5.png",
  },
  {
    name: "Shaown",
    img: "/images/user-6.png",
  },
  {
    name: "Arlene",
    img: "/images/user-7.png",
  },
  {
    name: "Divan",
    img: "/images/user-4.png",
  },
  {
    name: "Alen",
    img: "/images/user-5.png",
  },
  {
    name: "Poresh",
    img: "/images/user-6.png",
  },
  {
    name: "Javed",
    img: "/images/user-7.png",
  },
  {
    name: "Rana",
    img: "/images/user-6.png",
  },
  {
    name: "Jarul",
    img: "/images/user-7.png",
  },
  {
    name: "Jashim",
    img: "/images/user-4.png",
  },
  {
    name: "Menk",
    img: "/images/user-5.png",
  },
  {
    name: "Najib",
    img: "/images/user-6.png",
  },
  {
    name: "Zod",
    img: "/images/user-7.png",
  },
];
const Recipients = () => {
  const scrollContainer = useRef<HTMLDivElement | null>(null);

  const handleScrollRight = () => {
    if (scrollContainer.current) {
      const scrollAmount = 200; // Adjust the scroll amount as needed
      scrollContainer.current.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: "smooth", // Add smooth scroll behavior
      });
    }
  };

  return (
    <div className="relative flex items-center gap-4 bb-dashed pb-6 mb-6">
      <div
        className="flex gap-6 w-11/12 overflow-x-auto horiz px-2.5 pb-3"
        style={{ scrollbarWidth: "none" }}
        ref={scrollContainer}>
        {items.map(({ img, name }) => (
          <div
            key={name}
            className="shrink-0 text-center flex flex-col items-center gap-3">
            <Image
              width={48}
              height={48}
              className="rounded-full"
              src={img}
              alt="img"
            />
            <p className="text-sm">{name}</p>
          </div>
        ))}
      </div>
      <button
        className="p-3 bg-primary rounded-full text-n0"
        onClick={handleScrollRight}>
        <IconArrowNarrowRight size={22} />
      </button>
    </div>
  );
};

export default Recipients;
