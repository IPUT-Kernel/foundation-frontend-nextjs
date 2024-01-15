import { IconCirclePlus } from "@tabler/icons-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="box p-4 mb-4 xxxl:mb-6">
      <div className="bg-primary/5 relative dark:bg-bg3 rounded-2xl p-4 sm:p-11 md:p-12 lg:p-[64px] after:sm:bg-[url('/images/writer-bg.png')] after:bg-no-repeat after:bg-cover after:absolute after:w-full after:h-full after:inset-0 after:rtl:scale-x-[-1]">
        <div className="relative z-[2]">
          <h1 className="display-4 mb-4">Hello, Hawkins</h1>
          <p className="mb-6 xl:mb-10 max-w-sm lg:max-w-xl">
            Have any ideas for a new article? If not, you should definitely
            check the feed for some inspiration.
          </p>
          <Link href="#" className="btn">
            <IconCirclePlus />
            New Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
