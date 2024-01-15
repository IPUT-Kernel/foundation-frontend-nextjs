import { IconCircleCheck, IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const videos = [
  {
    id: 1,
    title: "Scientist Analytics for Discoveries",
    images: "/images/article-1.png",
    tvIcon: "/images/innova-tv.png",
    tvName: "Innova tv",
  },
  {
    id: 2,
    title: "Scientist Analytics for Discoveries",
    images: "/images/article-2.png",
    tvIcon: "/images/tv-2.png",
    tvName: "Innova tv",
  },
  {
    id: 3,
    title: "Scientist Analytics for Discoveries",
    images: "/images/article-3.png",
    tvIcon: "/images/innova-tv.png",
    tvName: "Innova tv",
  },
  {
    id: 4,
    title: "Scientist Analytics for Discoveries",
    images: "/images/article-4.png",
    tvIcon: "/images/tv-2.png",
    tvName: "Innova tv",
  },
];
const VideoCard4 = () => {
  return (
    <>
      {videos.map(({ id, images, title, tvIcon, tvName }) => (
        <div
          key={id}
          className="col-span-12 md:col-span-6 lg:col-span-4 xxxl:col-span-3 box p-2 group">
          <div className="relative">
            <Image
              src={images}
              width={350}
              height={270}
              className="rounded-2xl w-full"
              alt="img"
            />
            <button className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-n0 duration-300 group-hover:border-secondary3dark bg-n0 text-primary p-3">
              <IconPlayerPlayFilled size={20} />
            </button>
          </div>
          <div className="pt-4 sm:pt-6 lg:pt-8 px-3 md:px-5 pb-4">
            <Link href="#" className="h4 mb-3 md:mb-5 block">
              {title}
            </Link>
            <div className="flex items-center gap-3 xxl:gap-4">
              <Image
                src={tvIcon}
                className="rounded-full"
                alt="tv icon"
                width={60}
                height={60}
              />
              <div>
                <Link href="#" className="flex items-center gap-2 mb-2 sm:mb-3">
                  <p className="uppercase">{tvName}</p>
                  <IconCircleCheck size={18} className="text-primary" />
                </Link>
                <div className="flex flex-wrap items-center font-medium gap-2">
                  <span className="text-xs sm:text-sm md:text-base">
                    3.6k views
                  </span>
                  <span className="text-primary">•</span>
                  <span className="text-xs sm:text-sm md:text-base">
                    27 minutes ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoCard4;
