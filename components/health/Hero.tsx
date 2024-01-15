import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-primary rounded-2xl p-4 sm:p-6 md:p-10 xl:p-20 relative after:bg-[url('/images/health-bg.png')] after:bg-no-repeat after:bg-cover after:w-full after:h-full after:absolute after:inset-0 rtl:after:scale-x-[-1]">
      <div className="relative z-[2]">
        <h1 className="display-4 text-n0 mb-4">Easy Health Scheduling</h1>
        <p className="mb-10 text-n0 max-w-2xl">
          Are you in need of medical care? We&nbsp;re here to make scheduling
          your doctor appointments a seamless experience.
        </p>
        <Link href="#" className="btn-white">
          Check Schedule
        </Link>
      </div>
    </div>
  );
};

export default Hero;
