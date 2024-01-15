"use client";
import {
  IconBrandGoogleDrive,
  IconCamera,
  IconMessageDots,
  IconMoodSmile,
  IconPhoto,
  IconPlus,
  IconSend,
  IconShare,
  IconThumbUp,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import OptionsVertical from "../shared/OptionsVertical";
import { comments } from "../writer/LatestComments";
import Biodata from "./Biodata";
import CommentBox from "./CommentBox";
import Friends from "./Friends";
import Gallery from "./Gallery";
const stories = [
  {
    id: 1,
    img: "/images/story/story-1.png",
    user: "/images/user-2.png",
  },
  {
    id: 2,
    img: "/images/story/story-2.png",
    user: "/images/user-3.png",
  },
  {
    id: 3,
    img: "/images/story/story-3.png",
    user: "/images/user-4.png",
  },
  {
    id: 4,
    img: "/images/story/story-4.png",
    user: "/images/user-5.png",
  },
];
const Profile = () => {
  return (
    <>
      <div className="bg-[url(/images/profile-bg.png)] bg-contain bg-top bg-no-repeat -mx-3 sm:-mx-4 xxxl:-mx-6 mb-6 overflow-x-hidden">
        <div className="pt-10 min-[450px]:pt-14 sm:pt-24 md:pt-32 lg:pt-44 xl:pt-52 4xl:pt-[280px] px-3 lg:px-4 xxxl:px-6">
          <div className="box p-2 sm:p-3 xxxl:p-5">
            <div className="box p-2 bg-primary/5 4xl:px-12 xxl:py-8 flex flex-wrap xl:flex-nowrap lg:divide-x divide-dashed divide-primary/20 gap-5">
              <div className="flex flex-wrap xl:flex-nowrap items-center gap-3 4xl:gap-5 4xl:pr-8">
                <div className="p-1 sm:p-1.5 shrink-0 rounded-2xl max-[465px]:w-full bg-n0 dark:bg-bg3 lg:-mt-32 shadow-[0px_4px_40px_0px_rgba(0,0,0,0.16)]">
                  <Image
                    src="/images/profile-img.png"
                    width={220}
                    height={280}
                    className="rounded-xl max-[465px]:w-full"
                    alt="img"
                  />
                </div>
                <div className="max-[465px]:flex flex-col items-center max-[465px]:w-full">
                  <h4 className="h4 mb-3">Török Melinda</h4>
                  <span>UI/UX Designer</span>
                  <div className="flex gap-2 mt-4 xxl:mt-7">
                    <Link href="#" className="btn px-3 py-2 xxxl:px-5">
                      Follow
                    </Link>
                    <Link href="#" className="btn-outline px-3 py-2 xxxl:px-5">
                      Message
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 max-xl:w-full xl:px-3 xxxl:px-5 xxxl:gap-10 4xl:px-16 ">
                <div className="col-span-2 min-[400px]:col-span-1 sm:col-span-3 md:col-span-2 flex flex-col gap-5">
                  <div>
                    <p className="mb-1 font-semibold">Email</p>
                    <span>info@example.com</span>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold">Phone</p>
                    <span>+1 (070) 123–4576</span>
                  </div>
                </div>
                <div className="col-span-2 min-[400px]:col-span-1 sm:col-span-3 md:col-span-2 flex flex-col gap-5">
                  <div>
                    <p className="mb-1 font-semibold">Birthday</p>
                    <span>17 March, 1995</span>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold">Location</p>
                    <span>New York, NY</span>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-7 md:col-span-3 flex flex-col gap-5">
                  <div>
                    <p className="mb-1 font-semibold">School</p>
                    <span>El Camino High School & Collage</span>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold">University</p>
                    <span>Oxford University, Storbritanien</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
          <div className="mb-4 xxxl:mb-6">
            <div className="box xxl:p-8 w-full overflow-x-auto">
              <div className="min-w-[800px] flex gap-5">
                <div className="rounded-2xl relative">
                  <Image
                    src="/images/story/story-5.png"
                    width={174}
                    height={200}
                    className="rounded-2xl"
                    alt="img"
                  />
                  <div className="absolute bottom-4 flex flex-col items-center justify-center w-full text-center">
                    <button className="mb-2 rounded-full bg-n0 text-primary p-1">
                      <IconPlus />
                    </button>
                    <span className="font-semibold text-xs text-n0">
                      Add Story
                    </span>
                  </div>
                </div>
                {stories.map(({ id, img, user }) => (
                  <div key={id} className="relative rounded-2xl">
                    <Image
                      width={174}
                      height={200}
                      className="rounded-2xl"
                      src={img}
                      alt="img"
                    />
                    <div className="absolute top-3 left-3 rounded-full border border-n0">
                      <Image
                        src={user}
                        width={32}
                        height={32}
                        className="rounded-full"
                        alt="img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="box mb-4 xxxl:mb-6 xxl:p-8">
            <h4 className="h4 mb-6">Add New Post</h4>
            <form>
              <textarea
                rows={5}
                className="rounded-2xl bg-primary/5 dark:bg-bg3 p-4 w-full mb-6"
                placeholder="Write a new post... "></textarea>
              <div className="flex justify-between items-center">
                <div className="flex divide-x divide-primary/20 divide-dashed">
                  <button className="px-2">
                    <IconMoodSmile size={20} />
                  </button>
                  <span className="px-2">
                    <input type="file" id="camera" className="hidden" />
                    <label className="cursor-pointer" htmlFor="camera">
                      <IconCamera size={20} />
                    </label>
                  </span>
                  <span className="px-2">
                    <input type="file" id="photo" className="hidden" />
                    <label className="cursor-pointer" htmlFor="photo">
                      <IconPhoto size={20} />
                    </label>
                  </span>

                  <button className="px-2">
                    <IconBrandGoogleDrive size={20} />
                  </button>
                </div>
                <button className="btn px-5">Post</button>
              </div>
            </form>
          </div>
          <div className="box xxl:p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/user-big-2.png"
                  alt="profile img"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xl mb-1">Jerome Bell</p>
                  <span className="text-sm flex items-center gap-1">
                    36 Minutes{" "}
                    <IconWorld className="text-n400 dark:text-n30" size={18} />
                  </span>
                </div>
              </div>
              <OptionsVertical />
            </div>
            <p className="text-sm mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="max-[450px]:col-span-2 col-span-1">
                <Image
                  src="/images/post-1.png"
                  width={468}
                  height={416}
                  className="rounded-2xl"
                  alt="post img"
                />
              </div>
              <div className="max-[450px]:col-span-2 col-span-1">
                <Image
                  src="/images/post-2.png"
                  width={468}
                  height={416}
                  className="rounded-2xl"
                  alt="post img"
                />
              </div>
            </div>
            <div className="flex justify-between flex-wrap items-center mb-7 gap-3 lg:mb-10">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <button className="text-primary">
                    <IconThumbUp />
                  </button>
                  <span className="font-medium">24k</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-primary">
                    <IconMessageDots />
                  </button>
                  <span className="font-medium">245</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-primary">
                    <IconShare />
                  </button>
                  <span className="font-medium">200</span>
                </div>
              </div>
              <span className="font-medium">100+ Views</span>
            </div>
            <div className="flex gap-4 items-center mb-6 xl:mb-8">
              <Image
                src="/images/user-big-4.png"
                width={48}
                height={48}
                className="rounded-full"
                alt="img"
              />
              <div className="flex bg-primary/5 dark:bg-bg3 rounded-[30px] justify-between grow items-center p-2">
                <input
                  type="text"
                  className="w-full bg-transparent px-3 "
                  placeholder="Add a comment"
                />
                <button className="p-2 rounded-full bg-primary text-n0">
                  <IconSend />
                </button>
              </div>
            </div>
            {comments.map((comment) => (
              <CommentBox key={comment.id} singleComment={comment} />
            ))}
            <div className="flex max-lg:justify-center pt-4 md:pt-2">
              <Link href="#" className="btn-outline px-5">
                See All
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
          <Biodata />
          <Friends />
          <Gallery />
        </div>
      </div>
    </>
  );
};

export default Profile;
