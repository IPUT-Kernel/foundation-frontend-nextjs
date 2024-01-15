import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
      <div className="box p-4">
        <div className="bg-primary/5 dark:bg-bg3 rounded-2xl relative p-4 sm:p-6 md:p-10 xl:p-[64px] after:inset-0 after:xxxl:bg-[url('/images/soccer-hero-bg.png')] after:bg-no-repeat after:bg-right after:absolute after:w-full after:h-full after:rtl:scale-x-[-1]">
          <div className="relative z-[2]">
            <h2 className="h2 mb-4">Contest Rewards Await</h2>
            <p className="mb-10  max-w-md">
              Predict who will win and how a match will end and get a chance to
              win incredible cash prizes.
            </p>
            <Link href="#" className="btn font-medium">
              Read More
              <IconArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
