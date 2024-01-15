import Link from "next/link";

const tags = [
  "Politics",
  "Economy",
  "New",
  "Finance",
  "Environment",
  "Family",
  "Food",
  "Medical",
  "Business",
  "Movies",
  "Cricket",
  "Finance",
  "Environment",
  "Family",
];
const PopularTag = () => {
  return (
    <div className="box">
      <div className="flex justify-between items-center bb-dashed pb-3 mb-3 lg:pb-6 lg:mb-6">
        <p className="font-medium">Popular Tags</p>
      </div>
      <div className="flex xl:gap-4 gap-3 w-full flex-wrap">
        {tags.map((tag, i) => (
          <Link href="#" key={i} className="btn-outline py-2 px-4 text-sm">
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTag;
