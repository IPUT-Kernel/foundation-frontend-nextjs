import Image from "next/image";
import Link from "next/link";

const AchiveMent3 = () => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
      <div className="rounded-2xl flex justify-center px-3 pt-10">
        <Image
          width={405}
          height={263}
          src="/images/achivement-3.png"
          alt="img"
        />
      </div>
      <div className="pb-5 pt-8 flex flex-col px-4 md:px-8 xl:px-14 justify-center items-center text-center">
        <h4 className="h4 mb-4">You&apos;ve unlocked 2 new Achievements</h4>
        <p className="mb-6 lg:mb-8">
          Congrats, your efforts have been rewarded. Keep up like this!
        </p>
        <Link href="#" className="btn">
          View More
        </Link>
      </div>
    </div>
  );
};

export default AchiveMent3;
