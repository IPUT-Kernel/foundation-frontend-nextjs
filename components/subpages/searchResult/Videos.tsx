"use client";
import "@/node_modules/react-modal-video/scss/modal-video.scss";
import {
  IconMessage,
  IconPlayerPlayFilled,
  IconThumbUp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const videoResult = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-1.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
  {
    id: 2,
    title: "Cybersecurity Tips for Individuals",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-2.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
  {
    id: 3,
    title: "Web Development Crash Course",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-3.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
  {
    id: 4,
    title: "How to Set Up a Home Lab for IT Testing",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-4.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
  {
    id: 5,
    title: "Introduction to Cloud Computing",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-5.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
  {
    id: 6,
    title: "Data Science for Beginners",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-6.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
  {
    id: 7,
    title: "Linux Command Line Basics",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-7.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
  {
    id: 8,
    title: "Introduction to Machine Learning",
    url: "https://www.google.com/search",
    img: "/images/projectgrid/project-8.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comments: 58,
  },
];
const Videos = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="mt-6 grid grid-cols-12 gap-4 xl:gap-6">
        {videoResult.map(({ id, comments, desc, img, likes, title, url }) => (
          <div
            key={id}
            className="col-span-12 lg:col-span-6 bb-dashed pb-4 lg:pb-6 last:pb-0 last:border-none video-news">
            <Link
              href="#"
              className="text-lg xl:text-xl block text-primary font-medium mb-1">
              {title}
            </Link>
            <Link
              href={url}
              className="text-secondary1 inline-block text-sm mb-5">
              {url}
            </Link>
            <div className="flex flex-wrap min-sm:flex-nowrap gap-4 items-start xxxl:gap-6">
              <div
                onClick={() => setOpen(true)}
                className="relative shrink-0 after:bg-primary/30 cursor-pointer after:absolute after:rounded-lg after:w-full after:h-full after:inset-0">
                <Image
                  src={img}
                  width={152}
                  height={113}
                  className="rounded-lg"
                  alt="img"
                />
                <button className="bg-primary p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-n0 rounded-full">
                  <IconPlayerPlayFilled size={20} />
                </button>
              </div>
              <div>
                <p className="text-sm mb-4">{desc}</p>
                <div className="flex gap-6">
                  <div className="flex items-center gap-1">
                    <button>
                      <IconThumbUp size={20} />
                    </button>
                    <span className="text-sm">{likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button>
                      <IconMessage size={20} />
                    </button>
                    <span className="text-sm">{comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="ZVnjOPwW4ZA"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Videos;
