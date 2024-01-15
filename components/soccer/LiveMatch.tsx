import { IconVideo } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const LiveMatch = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 box xl:p-4">
      <div className="box bg-primary/5 dark:bg-bg3 xl:p-6">
        <div className="flex justify-between flex-wrap items-center gap-4 bb-dashed mb-6 pb-6">
          <div>
            <p className="font-medium mb-1">UEFA Champions League</p>
            <span className="text-xs">Final Match</span>
          </div>
          <Link
            href="#"
            className="btn bg-secondary2 text-sm border-none px-4 hover:bg-secondary2 hover:text-n0">
            <IconVideo size={20} /> Live Now
          </Link>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-n0 w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-xl">
              <Image
                src="/images/barcelona.png"
                alt="img"
                width={50}
                height={50}
              />
            </div>
            <p className="font-medium">Barcelona</p>
          </div>
          <h2 className="h2">3 : 5</h2>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-n0 w-[60px] h-[60px] flex items-center justify-center rounded-full shadow-xl">
              <Image
                src="/images/real-madrid.png"
                alt="img"
                width={32}
                height={32}
              />
            </div>
            <p className="font-medium">Real Madrid</p>
          </div>
        </div>
        <Link href="#" className="btn w-full flex justify-center">
          Watch Now
        </Link>
      </div>
    </div>
  );
};

export default LiveMatch;
