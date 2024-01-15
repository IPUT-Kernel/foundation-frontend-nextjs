import { IconCircleCheck, IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const VideoCard3 = () => {
  return (
    <>
      <div className="col-span-12 xl:col-span-6">
        <div className="relative after:bg-gradient-to-t after:w-full after:rounded-2xl hover:after:h-full after:duration-300 after:h-1/2 after:absolute after:bottom-0 after:left-0 after:right-0 after:from-black after:to-transparent">
          <Image
            src="/images/video-2.png"
            width={756}
            height={400}
            className="rounded-2xl w-full min-h-[280px]"
            alt="img"
          />
          <div className="absolute z-[2] bottom-6 w-full lg:bottom-8 px-3 md:px-5 lg:px-10">
            <Link href="#" className="text-n0 block h3 mb-6">
              Scientist Analytics for Discoveries
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4 xl:gap-6">
                <Image
                  src="/images/tv-1.png"
                  className="rounded-full"
                  alt="tv icon"
                  width={60}
                  height={60}
                />
                <div>
                  <Link href="#" className="flex items-center gap-2 mb-3">
                    <p className="uppercase text-n0">MAZTECH TV</p>
                    <IconCircleCheck
                      size={20}
                      className="text-secondary3dark"
                    />
                  </Link>
                  <div className="flex flex-wrap items-center gap-2 text-n0">
                    <span>3.6k views</span>
                    <span className="text-secondary3dark">•</span>
                    <span>27 minutes ago</span>
                  </div>
                </div>
              </div>
              <button className="rounded-full border-2 border-no bg-secondary3dark text-primary p-3">
                <IconPlayerPlayFilled size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-6">
        <div className="relative mb-4 xxxl:mb-6 after:bg-gradient-to-t after:w-full after:rounded-2xl hover:after:h-full after:duration-300 after:h-1/2 after:absolute after:bottom-0 after:left-0 after:right-0 after:from-black after:to-transparent">
          <Image
            src="/images/video-3.png"
            width={756}
            height={440}
            className="rounded-2xl w-full min-h-[200px]"
            alt="img"
          />
          <div className="absolute z-[2] bottom-6 w-full lg:bottom-8 px-5 lg:px-10">
            <Link href="#" className="text-n0 block h3 mb-3 md:mb-6">
              Scientist Analytics for Discoveries
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4 xl:gap-6">
                <Image
                  src="/images/tv-2.png"
                  className="rounded-full"
                  alt="tv icon"
                  width={60}
                  height={60}
                />
                <div>
                  <Link href="#" className="flex items-center gap-2 mb-3">
                    <p className="uppercase text-n0">innova TV</p>
                    <IconCircleCheck
                      size={20}
                      className="text-secondary3dark"
                    />
                  </Link>
                  <div className="flex flex-wrap items-center gap-2 text-n0">
                    <span>3.6k views</span>
                    <span className="text-secondary3dark">•</span>
                    <span>27 minutes ago</span>
                  </div>
                </div>
              </div>
              <button className="rounded-full border-2 border-no bg-secondary3dark text-primary p-3">
                <IconPlayerPlayFilled size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative after:bg-gradient-to-t after:w-full hover:after:h-full after:duration-300 after:rounded-2xl after:h-1/2 after:absolute after:bottom-0 after:left-0 after:right-0 after:from-black after:to-transparent">
          <Image
            src="/images/video-4.png"
            width={756}
            height={440}
            className="rounded-2xl w-full min-h-[200px]"
            alt="img"
          />
          <div className="absolute z-[2] bottom-6 w-full lg:bottom-8 px-3 md:px-5 lg:px-10">
            <Link href="#" className="text-n0 block h3 mb-3 md:mb-6">
              Scientist Analytics for Discoveries
            </Link>
            <div className="items-center flex justify-between">
              <div className="flex items-center gap-4 xl:gap-6">
                <Image
                  src="/images/tv-3.png"
                  className="rounded-full"
                  alt="tv icon"
                  width={60}
                  height={60}
                />
                <div>
                  <Link href="#" className="flex items-center gap-2 mb-3">
                    <p className="uppercase text-n0">Pinlove TV</p>
                    <IconCircleCheck
                      size={20}
                      className="text-secondary3dark"
                    />
                  </Link>
                  <div className="flex flex-wrap items-center gap-2 text-n0">
                    <span>3.6k views</span>
                    <span className="text-secondary3dark">•</span>
                    <span>27 minutes ago</span>
                  </div>
                </div>
              </div>
              <button className="rounded-full border-2 border-no bg-secondary3dark text-primary p-3">
                <IconPlayerPlayFilled size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard3;
