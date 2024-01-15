"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import ArticleBox from "./ArticleBox";

const options = ["recent", "name", "date"];
const articles = [
  {
    id: 1,
    img: "/images/article-1.png",
    by: "Admin",
    date: "12 Jan, 2023",
    title: "Breakthrough in Space Exploration: New Planet Discovered",
    desc: "Scientists have discovered a distant exoplanet with potential habitable conditions...",
  },
  {
    id: 2,
    img: "/images/article-2.png",
    by: "Admin",
    date: "12 Jan, 2023",
    title: "AI System Diagnoses Diseases with Unprecedented Accuracy",
    desc: "Scientists have discovered a distant exoplanet with potential habitable conditions...",
  },
  {
    id: 3,
    img: "/images/article-3.png",
    by: "Admin",
    date: "12 Jan, 2023",
    title: "Promising Advances in Carbon Capture Technology",
    desc: "Scientists have discovered a distant exoplanet with potential habitable conditions...",
  },
  {
    id: 4,
    img: "/images/article-4.png",
    by: "Admin",
    date: "12 Jan, 2023",
    title: "Genetic Breakthrough: New Therapy Offers Hope for Rare Genetic...",
    desc: "Scientists have discovered a distant exoplanet with potential habitable conditions...",
  },
];
const Articles = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="box col-span-2 md:col-span-1">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">New Articles</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            items={options}
            selected={selected}
            setSelected={setSelected}
            width="w-28"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 xxxl:gap-6 items-start">
        {articles.map((article) => (
          <ArticleBox post={article} key={article.id} />
        ))}
        <div className="col-span-2">
          <Link href="#" className="btn-outline">
            See All <IconArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
