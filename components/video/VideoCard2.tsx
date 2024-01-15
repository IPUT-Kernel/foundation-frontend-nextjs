import { IconCircleCheck, IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";
const videos = [
  {
    id: 1,
    thumb: "/images/article-1.png",
    tvIcon: "/images/tv-2.png",
    title: "Scientist Analytics for Discoveries",
    tvName: "innova tv",
    views: "3.6k",
    time: "27 minutes ago",
  },
  {
    id: 2,
    thumb: "/images/article-2.png",
    tvIcon: "/images/tv-3.png",
    title: "Scientist Analytics for Discoveries",
    tvName: "innova tv",
    views: "3.6k",
    time: "27 minutes ago",
  },
];
const VideoCard2 = () => {
  return (
    <div className="col-span-12 lg:col-span-7 xl:col-span-6 flex flex-col gap-4 xxxl:gap-6">
      {videos.map(({ id, thumb, time, title, tvIcon, tvName, views }) => (
        <div
          key={id}
          className="p-3 sm:p-4 md:p-2 grid grid-cols-2 box items-center gap-4 lg:gap-6 xxxl:gap-8 group">
          <div className="relative col-span-2 sm:col-span-1">
            <Image
              src={thumb}
              width={350}
              height={280}
              className="w-full"
              alt="img"
            />
            <button className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-n0 duration-300 group-hover:border-secondary3dark bg-n0 text-primary p-3">
              <IconPlayerPlayFilled size={20} />
            </button>
          </div>
          <div className="w-full col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between mb-3 xl:mb-6">
              <Image
                src={tvIcon}
                className="rounded-full"
                width={48}
                height={48}
                alt="tv icon"
              />
              <OptionsVertical />
            </div>
            <Link href="#" className="h4 block mb-2 xl:mb-4">
              {title}
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-3">
              <p className="uppercase">{tvName}</p>
              <IconCircleCheck className="text-primary" />
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <span>{views} views</span>
              <span className="text-primary">•</span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCard2;
