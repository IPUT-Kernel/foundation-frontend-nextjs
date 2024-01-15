import Image from "next/image";
import Link from "next/link";
import SingleResult from "./SingleResult";

const results = [
  {
    id: 1,
    title: "Dashboard Wireframe Templates - Sign Up For Free",
    link: "https://www.google.com/search",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comment: 56,
  },
  {
    id: 2,
    title: "Dashboard Wireframe Templates - Sign Up For Free",
    link: "https://www.google.com/search",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comment: 56,
  },
  {
    id: 3,
    title: "Dashboard Wireframe Templates - Sign Up For Free",
    link: "https://www.google.com/search",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comment: 56,
  },
  {
    id: 4,
    title: "Dashboard Wireframe Templates - Sign Up For Free",
    link: "https://www.google.com/search",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    likes: 178,
    comment: 56,
  },
];
const images = [
  "/images/results/1.png",
  "/images/results/2.png",
  "/images/results/3.png",
  "/images/results/4.png",
];
const AllResult = () => {
  return (
    <div>
      {results.slice(0, 2).map((result) => (
        <SingleResult key={result.id} result={result} />
      ))}
      <div className="flex gap-4 mt-6 flex-wrap bb-dashed pb-6">
        {images.map((img) => (
          <Link href="#" key={img}>
            <Image
              src={img}
              width={174}
              height={200}
              className="rounded-2xl"
              alt="img"
            />
          </Link>
        ))}
        <Link
          href="#"
          className="relative block after:rounded-2xl after:absolute after:w-full after:inset-0 after:h-full after:bg-black/60 ">
          <Image
            src="/images/results/5.png"
            width={174}
            height={200}
            className="rounded-2xl relative"
            alt="img"
          />
          <h2 className="text-n0 w-full h2 text-center absolute top-1/2 -translate-y-1/2 z-[3]">
            99+
          </h2>
        </Link>
      </div>
      {results.slice(2).map((result) => (
        <SingleResult key={result.id} result={result} />
      ))}
    </div>
  );
};

export default AllResult;
