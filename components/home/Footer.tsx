import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-n0 footer dark:bg-bg4">
      <div
        className={`py-6 px-3 flex flex-wrap justify-between items-center gap-4 container`}>
        <p className="text-sm lg:text-base max-md:text-center max-md:w-full">
          Copyright ©{new Date().getFullYear()}{" "}
          <Link className="text-primary" href="/">
            bitcat
          </Link>
        </p>

        {/*

        <div className="max-md:w-full max-md:flex justify-center">
          <SocialLinks />
        </div>
        
        */}
      </div>
    </footer>
  );
};

export default Footer;
