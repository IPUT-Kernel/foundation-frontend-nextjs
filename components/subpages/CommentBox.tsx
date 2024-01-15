"use client";
import {
  IconMessageDots,
  IconSend,
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
  const { comment, commenter, commenterImg, replierImg, time } = singleComment;
  return (
    <div className="box p-0 flex items-start gap-3 md:gap-4 border-none bg-n0 mb-4 md:mb-6 xl:mb-8 last:mb-0">
      <Image
        width={48}
        height={48}
        className="rounded-full shrink-0 w-9 h-9 md:w-12 md:h-12"
        src={commenterImg}
        alt="commenter img"
      />
      <div>
        <div className="flex gap-1 flex-wrap items-center mb-3">
          <p className="font-medium text-xl mb-1">{commenter}</p>
          <p>{time}</p>
        </div>
        <p className="mb-5 text-sm">{comment}</p>
        <div className="flex items-center gap-8">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-1 text-primary">
            {liked ? <IconThumbUpFilled /> : <IconThumbUp />}{" "}
            {liked ? 179 : 178}
          </button>
          <button
            onClick={() => setShowComment(!showComment)}
            className="flex items-center gap-1 text-primary">
            <IconMessageDots /> Reply
          </button>
        </div>
        <AnimateHeight height={showComment ? "auto" : 0}>
          <div className="flex items-center gap-3 md:gap-5 mt-6">
            <Image src={replierImg} width={40} height={40} alt="replier" />
            <div className="max-w-md w-full bg-primary/5 dark:bg-bg3 flex justify-between items-center rounded-3xl ltr:pr-4 rtl:pl-4">
              <input
                type="text"
                className="w-full bg-transparent focus:outline-none px-5 py-3"
                placeholder="Join the discussion..."
              />
              <button className="rounded-full text-primary ">
                <IconSend />
              </button>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
};

export default CommentBox;
