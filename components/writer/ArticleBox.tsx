import {
  IconArrowUpRight,
  IconCalendar,
  IconUserCircle,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
type ArticleType = {
  id: number;
  img: string;
  by: string;
  date: string;
  title: string;
  desc: string;
};
const ArticleBox = ({ post }: { post: ArticleType }) => {
  const { id, by, date, desc, img, title } = post;
  return (
    <div className="box p-2 bg-primary/5 dark:bg-bg3 col-span-2 md:col-span-1 xl:col-span-2">
      <Image
        width={416}
        height={306}
        className="rounded-2xl w-full"
        src={img}
        alt="img"
      />
      <div className="px-4 pb-4">
        <div className="mt-6 xxxl:mt-8 flex items-center flex-wrap gap-2 mb-5">
          <span className="flex items-center gap-2">
            <IconUserCircle size={20} /> By {by}
          </span>
          <span className="text-primary">•</span>
          <span className="flex items-center gap-2">
            <IconCalendar size={20} /> {date}
          </span>
        </div>
        <Link href="#" className="text-xl block font-semibold mb-5">
          {title}
        </Link>
        <p className="text-sm mb-6">{desc}</p>
        <Link
          href="#"
          className="text-primary font-semibold flex items-center gap-2">
          Read Article <IconArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ArticleBox;
