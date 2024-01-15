import {
  IconCheck,
  IconCirclePlus,
  IconMessage,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";

const list = [
  {
    title: "Project Views",
    amount: "56k",
  },
  {
    title: "Projects Sale",
    amount: "1.5k",
  },
  {
    title: "Total Project",
    amount: "3.1k",
  },
  {
    title: "Followers",
    amount: "2.2k",
  },
  {
    title: "Following",
    amount: "671",
  },
];

const CompanyProfile = () => {
  return (
    <div className="box col-span-2 md:col-span-1 xl:col-span-2">
      <div className="flex justify-center mb-6 lg:mb-8">
        <div className="p-4 rounded-full border border-n30 dark:border-n500 relative">
          <Image
            src="/images/company-logo.png"
            height={120}
            width={120}
            className="rounded-full"
            alt="company logo"
          />
          <div className="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
            <IconCheck size={18} />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center pb-7">
        <h4 className="h4 mb-4">ABstract</h4>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span>
            ID: <span className="text-primary">23565</span>
          </span>
          <span className="text-primary">•</span>
          <span>Projects: 3.1k</span>
          <span className="text-primary">•</span>
          <span className="flex items-center gap-1">
            <IconStarFilled size={20} className="text-secondary3dark" /> 4.8
            (114)
          </span>
        </div>
      </div>
      {/* Social icons */}
      <div className="flex justify-center bb-dashed pb-6 mb-6">
        <SocialLinks />
      </div>
      <div className="flex gap-4 justify-center bb-dashed pb-6 mb-6">
        <Link href="#" className="btn border border-primary font-semibold">
          <IconCirclePlus />
          Follow
        </Link>
        <Link href="#" className="btn-outline">
          <IconMessage />
          Message
        </Link>
      </div>
      <div className="bb-dashed pb-6 mb-6">
        <ul className="flex flex-col gap-3">
          {list.map(({ title, amount }) => (
            <li key={title} className="flex justify-between items-center">
              <span>{title}</span>
              <span className="font-medium">{amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bb-dashed pb-6 mb-6">
        <h5 className="text-xl font-medium mb-2">Details</h5>
        <p>
          Hi, We’re. A specialist agent. You can call me any Projects to buy !
          We have very unique design stylist features. My work attribution is
          Minimalist/Flat/Simple.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <span>Member since: October 27, 2023</span>
        <Link href="#">Report</Link>
      </div>
    </div>
  );
};

export default CompanyProfile;
