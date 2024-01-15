import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-primary rounded-2xl p-4 sm:p-6 md:p-10 xl:p-20 relative after:bg-[url('/images/hr-board-bg.png')] after:bg-no-repeat after:bg-cover after:absolute after:w-full after:h-full after:rounded-2xl rtl:after:scale-x-[-1] after:inset-0">
      <h1 className="display-4 text-n0 mb-4">Welcome back, Hawkins</h1>
      <p className="mb-10 text-n0 max-w-2xl">
        It seems like you&nbsp;re looking for a job feed or information related
        to job opportunities. Could you please provide more{" "}
      </p>
      <Link href="#" className="btn-white">
        Manage Jobs
      </Link>
    </div>
  );
};

export default Hero;
