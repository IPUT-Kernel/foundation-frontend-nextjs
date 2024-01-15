import { IconSearch } from "@tabler/icons-react";

const SearchBar = () => {
  return (
    <div className="box mb-4 xxxl:mb-6">
      <p className="font-medium mb-6 pb-6 bb-dashed">Search</p>
      <div className="py-3 px-6 flex items-center gap-3 justify-between rounded-[30px] bg-primary/5 dark:bg-bg3 border focus-within:border-primary focus:outline-none border-n40 dark:border-n500">
        <input
          type="text"
          placeholder="Search"
          className="w-full text-sm focus:outline-none bg-transparent"
        />
        <IconSearch size={20} />
      </div>
    </div>
  );
};

export default SearchBar;
