import { IconCalendar, IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";

const newsResult = [
  {
    id: 1,
    category: "Business",
    title: "Cybersecurity and Online Privacy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Theresa Webb",
    date: "22/10/23",
  },
  {
    id: 2,
    category: "Development",
    title: "Programming and Coding Tutorials",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Kristin Watson",
    date: "22/10/23",
  },
  {
    id: 3,
    category: "Development",
    title: "Tech Reviews and Product Comparisons",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Jerome Bell",
    date: "22/10/23",
  },
  {
    id: 4,
    category: "Business",
    title: "IT Career Advice",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Devone Lane",
    date: "22/10/23",
  },
  {
    id: 5,
    category: "Fashion",
    title: "Artificial Intelligence (AI) and Machine Learning (ML)",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Courtney Henry",
    date: "22/10/23",
  },
  {
    id: 6,
    category: "Business",
    title: "Software Development Methodologies",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Elennor Pena",
    date: "22/10/23",
  },
  {
    id: 7,
    category: "Business",
    title: "Data Science and Analytics",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Jane Cooper",
    date: "22/10/23",
  },
  {
    id: 8,
    category: "Development",
    title: "Networking and Infrastructure",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Cameron Willamson",
    date: "22/10/23",
  },
  {
    id: 9,
    category: "Fashion",
    title: "IoT (Internet of Things)",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Cody Fisher",
    date: "22/10/23",
  },
  {
    id: 10,
    category: "Design",
    title: "Tech News and Updates",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    author: "Darlene Robertson",
    date: "22/10/23",
  },
];
const News = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6 mt-6">
      {newsResult.map(({ id, author, category, date, desc, title }) => (
        <div
          key={id}
          className="col-span-12 md:col-span-6 box xl:p-6 bg-primary/5">
          <span className="inline-block py-2 text-sm px-4 text-secondary1 bg-n0 rounded-lg dark:bg-bg3 mb-3">
            {category}
          </span>
          <Link
            href="#"
            className="text-primary block text-lg md:text-xl font-medium mb-3">
            {title}
          </Link>
          <p className="text-sm mb-5">{desc}</p>
          <div className="flex gap-3 md:gap-10">
            <div className="flex items-center gap-2">
              <IconUserCircle size={20} className="text-primary" />{" "}
              <span className="text-sm">{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <IconCalendar size={20} className="text-primary" />{" "}
              <span className="text-sm">{date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
