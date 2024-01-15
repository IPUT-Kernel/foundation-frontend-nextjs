"use client";
import {
  IconMessageDots,
  IconSend,
  IconStarFilled,
  IconStarHalfFilled,
  IconThumbUp,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

type commentType = {
  id: number;
  date: string;
  time: string;
  comment: string;
  commenterImg: string;
  commenter: string;
  designation: string;
  replierImg: string;
};
const CommentBox = ({ singleComment }: { singleComment: commentType }) => {
  const [showComment, setShowComment] = useState(false);
  const [liked, setLiked] = useState(false);
  const {
    comment,
    commenter,
    commenterImg,
    date,
    designation,
    replierImg,
    time,
  } = singleComment;
  return (
    <div className="box p-4 md:p-6 bg-primary/5 dark:bg-bg3">
      <div className="flex items-center gap-2 bb-dashed mb-6 pb-6">
        <span>{date}</span>
        <span className="text-primary scale-50">•</span>
        <span>{time}</span>
      </div>
      <div className="flex gap-1 text-secondary3dark mb-3">
        <IconStarFilled size={18} />
        <IconStarFilled size={18} />
        <IconStarFilled size={18} />
        <IconStarFilled size={18} />
        <IconStarHalfFilled size={18} />
      </div>
      <p className="mb-6">{comment}</p>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 bb-dashed pb-4 mb-4 md:mb-6 md:pb-6">
        <Image
          width={60}
          height={60}
          src={commenterImg}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full"
          alt="commenter img"
        />
        <div>
          <p className="font-medium text-base sm:text-lg lg:text-xl mb-1">
            {commenter}
          </p>
          <p>{designation}</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-1 text-primary">
          {liked ? <IconThumbUpFilled /> : <IconThumbUp />} {liked ? 179 : 178}
        </button>
        <button
          onClick={() => setShowComment(!showComment)}
          className="flex items-center gap-1 text-primary">
          <IconMessageDots /> Reply
        </button>
      </div>
      <AnimateHeight height={showComment ? "auto" : 0}>
        <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-6">
          <Image
            src={replierImg}
            width={40}
            height={40}
            alt="replier"
            className="w-9 h-9 md:w-11 md:h-11 rounded-full"
          />
          <form className="text-sm bg-n0 dark:bg-bg4 rounded-3xl grow flex items-center justify-between">
            <input
              type="text"
              className="bg-transparent p-2 md:p-3 w-full"
              placeholder="Join the discussion..."
            />
            <span className="inline-block px-5 shrink-0 text-primary cursor-pointer">
              <IconSend size={20} />
            </span>
          </form>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default CommentBox;
