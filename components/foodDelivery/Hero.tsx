import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="col-span-12 md:col-span-6">
        <Link href="#">
          <Image
            width={756}
            height={371}
            className="rounded-2xl w-full"
            src="/images/food-hero-1.png"
            alt="hero"
          />
        </Link>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Link href="#">
          <Image
            width={756}
            height={371}
            className="rounded-2xl w-full"
            src="/images/food-hero-2.png"
            alt="hero"
          />
        </Link>
      </div>
    </>
  );
};

export default Hero;
