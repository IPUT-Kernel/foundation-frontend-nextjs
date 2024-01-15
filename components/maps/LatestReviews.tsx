"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
import CommentBox from "../writer/CommentBox";
const comments = [
  {
    date: "Mar 03, 2023",
    id: 1,
    time: "09.01 am",
    comment:
      "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
    commenterImg: "/images/user-big-2.png",
    commenter: "Cameron Williamson",
    designation: "Actress",
    replierImg: "/images/user-big-3.png",
  },
  {
    date: "Mar 03, 2023",
    id: 2,
    time: "09.01 am",
    comment:
      "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
    commenterImg: "/images/user-big-2.png",
    commenter: "Cameron Williamson",
    designation: "Actress",
    replierImg: "/images/user-big-3.png",
  },
  {
    date: "Mar 03, 2023",
    id: 3,
    time: "09.01 am",
    comment:
      "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
    commenterImg: "/images/user-big-2.png",
    commenter: "Cameron Williamson",
    designation: "Actress",
    replierImg: "/images/user-big-3.png",
  },
  {
    date: "Mar 03, 2023",
    id: 2,
    time: "09.01 am",
    comment:
      "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
    commenterImg: "/images/user-big-2.png",
    commenter: "Cameron Williamson",
    designation: "Actress",
    replierImg: "/images/user-big-3.png",
  },
  {
    date: "Mar 03, 2023",
    id: 3,
    time: "09.01 am",
    comment:
      "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. ",
    commenterImg: "/images/user-big-2.png",
    commenter: "Cameron Williamson",
    designation: "Actress",
    replierImg: "/images/user-big-3.png",
  },
];
const options = ["recent", "name", "date"];
const LatestReviews = ({ size = 5 }: { size?: number }) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="box col-span-12 order-2 lg:order-1 lg:col-span-5 xl:col-span-4">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Latest Reviews</p>
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
      <div className="flex flex-col gap-6 items-start">
        {comments.slice(0, size).map((comment) => (
          <CommentBox singleComment={comment} key={comment.id} />
        ))}
        <Link href="#" className="btn-outline">
          See All <IconArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default LatestReviews;
