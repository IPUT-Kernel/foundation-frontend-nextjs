import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex justify-between flex-wrap items-center gap-3 mb-6 lg:mb-8">
      <div className="flex items-start sm:items-center gap-4">
        <Image
          src="/images/user.png"
          width={48}
          height={48}
          className="rounded-full"
          alt="profile img"
        />
        <div>
          <p className="text-lg lg:text-xl md:mb-1">
            Welcome back,{" "}
            <span className="font-medium text-lg lg:text-xl">Hawkins</span>
          </p>
          <span className="text-xs">
            Happy to see you again on your dashboard.
          </span>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap ">
        <Link href="#" className="btn-outline">
          View Reports
        </Link>
        <Link href="#" className="btn">
          Manage Store
        </Link>
      </div>
    </div>
  );
};

export default Banner;
