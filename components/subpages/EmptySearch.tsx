import { IconMicrophone, IconSearch, IconX } from "@tabler/icons-react";
import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="box xl:p-8 xxl:p-[60px]">
      <form className="max-w-[770px] flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 md:gap-6 mb-4">
        <div className="rounded-[30px] bg-primary/5 dark:bg-bg3 px-6 md:px-8 py-2 lg:py-3 w-full flex border border-n40 dark:border-n500">
          <input
            type="text"
            defaultValue="Admin Dashboard"
            placeholder="Enter Search"
            className="w-full bg-transparent"
          />
          <button>
            <IconMicrophone size={20} />
          </button>
        </div>
        <button className="btn flex items-center gap-2">
          <IconSearch size={20} /> Search
        </button>
      </form>
      <p className="bb-dashed mb-6 pb-6 flex flex-wrap items-center gap-1">
        Showing results for &quot;
        <span className="text-primary">Admin Dashboard</span>&quot;{" "}
        <button>
          <IconX size={20} />
        </button>
      </p>
      <div className="mt-10 lg:mt-14 text-center max-w-[513px] max-md:mx-auto max-md:flex flex-col items-center">
        <div className="px-5 lg:px-14 xl:px-24">
          <Image
            src="/images/empty-search.png"
            width={328}
            height={478}
            alt="no result img"
          />
        </div>

        <h2 className="h2 mb-3 lg:mb-6">No matching results</h2>
        <p>
          Looks like we couldn&nbsp;t find any matching results for your search
          terms. Try other search terms.
        </p>
      </div>
    </div>
  );
};

export default EmptySearch;
