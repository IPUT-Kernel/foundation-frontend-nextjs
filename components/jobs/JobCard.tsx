"use client";
import {
  IconArrowUpRight,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type JobType = {
  id: number;
  title: string;
  salaryRange: string;
  tags: string[];
  desc: string;
  expiry: string;
  location: string;
  level: string;
  proposals: number;
  company: {
    logo: string;
    name: string;
    verified: boolean;
  };
};
const JobCard = ({ job }: { job: JobType }) => {
  const [favourite, setFavourite] = useState(false);
  const {
    company,
    desc,
    expiry,
    level,
    location,
    proposals,
    salaryRange,
    tags,
    title,
  } = job;
  return (
    <div className="box">
      <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
        <h4 className="h4">{title}</h4>
        <p className="text-primary text-xl font-semibold">{salaryRange}</p>
      </div>
      <div className="flex gap-3 md:gap-4 lg:gap-6 flex-wrap mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-primary/5 dark:bg-bg3 rounded-xl text-primary font-medium py-2 px-4 inline-block">
            {tag}
          </span>
        ))}
      </div>
      <p className="mb-6">{desc}</p>
      <div className="flex flex-wrap text-n700 dark:text-n0 items-center gap-4 4xl:gap-5 mb-6 pb-6 bb-dashed">
        <span>
          Expiry : <span className="font-medium">{expiry}</span>
        </span>
        <span className="text-primary text-xs max-[1136px]:hidden">•</span>
        <span>
          Location : <span className="font-medium">{location}</span>
        </span>
        <span className="text-primary text-xs max-[1136px]:hidden">•</span>
        <span>
          Level : <span className="font-medium">{level}</span>
        </span>
        <span className="text-primary text-xs max-[1136px]:hidden">•</span>
        <span>
          Proposals : <span className="font-medium">{proposals} Received</span>
        </span>
      </div>
      <div className="flex flex-wrap gap-4 justify-between">
        <Link href="#" className="flex items-center gap-2">
          <Image src={company.logo} width={40} height={40} alt="company logo" />
          <p className="text-lg flex gap-2 items-center">
            {company.name}
            {". "}
            <span className="text-primary text-sm font-medium">
              {company.verified ? "Verified" : "Not Verified"}
            </span>
          </p>
        </Link>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setFavourite(!favourite)}
            className="p-2 rounded-full border text-primary border-primary">
            {favourite ? <IconHeartFilled /> : <IconHeart />}
          </button>
          <Link href="#" className="btn-outline group">
            Send Proposal{" "}
            <IconArrowUpRight className="group-hover:rotate-45 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
