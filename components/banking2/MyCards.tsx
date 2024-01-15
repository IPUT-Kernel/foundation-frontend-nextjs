"use client";
import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import OptionsVertical from "../shared/OptionsVertical";
import AddCard from "./AddCard";
const cards = [
  "/images/card-1.png",
  "/images/card-2.png",
  "/images/card-3.png",
  "/images/card-4.png",
  "/images/card-5.png",
  "/images/card-6.png",
];
const MyCards = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="col-span-12 box">
        <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
          <p className="font-medium">My Cards</p>
          <OptionsVertical />
        </div>
        <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
          {cards.map((img) => (
            <div
              key={img}
              className="col-span-12 md:col-span-6 xl:col-span-4 xxxl:col-span-3">
              <Image
                width={350}
                height={229}
                className="rounded-2xl w-full"
                src={img}
                alt="card img"
              />
            </div>
          ))}
          <div
            onClick={() => setOpenModal(true)}
            className="col-span-12 md:col-span-6 cursor-pointer xl:col-span-4 xxxl:col-span-3 border border-dashed self-stretch max-xxxl:py-14 w-full rounded-2xl border-primary bg-primary/10 flex flex-col justify-center items-center text-center h-full">
            <button className="bg-primary text-n0 p-2 rounded-full mb-3">
              <IconPlus />
            </button>
            <p className="font-medium mb-2">Add New Credit Card</p>
          </div>
        </div>
      </div>
      <AddCard open={openModal} toggleOpen={() => setOpenModal(false)} />
    </>
  );
};

export default MyCards;
