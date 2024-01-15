import { IconMessage, IconThumbUp } from "@tabler/icons-react";
import Link from "next/link";
type ResultType = {
  id: number;
  title: string;
  link: string;
  desc: string;
  likes: number;
  comment: number;
};
const SingleResult = ({ result }: { result: ResultType }) => {
  const { id, comment, desc, likes, link, title } = result;
  return (
    <div key={id} className="py-4 md:py-6 bb-dashed">
      <Link
        href="#"
        className="text-primary font-medium text-lg md:text-xl block mb-1">
        {title}
      </Link>
      <Link href={link} className="text-secondary1 block text-sm mb-3">
        {link}
      </Link>
      <p className="text-sm mb-5">{desc}</p>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <button>
            <IconThumbUp size={20} />
          </button>
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <IconMessage size={20} />
          </button>
          <span>{comment}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleResult;
