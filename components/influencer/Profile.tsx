import {
  IconCheck,
  IconCirclePlus,
  IconMessage,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";
const details = [
  {
    title: "Projects Views",
    number: "56k",
  },
  {
    title: "Projects Sale",
    number: "1.5k",
  },
  {
    title: "Total Projects",
    number: "3.1k",
  },
  {
    title: "Followers",
    number: "2.2k",
  },
  {
    title: "Following",
    number: "671",
  },
];

const Profile = () => {
  return (
    <div className="box mb-4 xxxl:mb-6 grid grid-cols-2 md:pr-6 md:divide-x rtl:md:divide-x-reverse divide-primary/20 divide-dashed gap-6">
      <div className="flex flex-col items-center ltr:md:mr-6 rtl:md:ml-6 text-center col-span-2 md:col-span-1">
        <div className="p-4 rounded-full border border-n30 dark:border-n500 relative mb-6 lg:mb-8">
          <Image
            src="/images/user-big-1.png"
            height={120}
            width={120}
            className="rounded-full"
            alt="company logo"
          />
          <div className="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
            <IconCheck size={18} />
          </div>
        </div>
        <div className="flex items-center flex-col justify-center pb-7">
          <h4 className="h4 mb-4">ABstract</h4>
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 xxxl:gap-3 4xl:gap-4">
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
        <div className="flex w-full justify-center bb-dashed pb-6 mb-6">
          <SocialLinks />
        </div>
        <div className="flex gap-4 justify-center">
          <Link href="#" className="btn px-4 xxxl:px-5">
            <IconCirclePlus />
            Follow
          </Link>
          <Link href="#" className="btn-outline px-4 xxxl:px-5">
            <IconMessage />
            Message
          </Link>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 ltr:md:pl-6 rtl:md:pr-6">
        <div className="bg-primary/5 dark:bg-bg3 rounded-xl p-4 lg:px-6 lg:py-8">
          <p className="text-xl font-medium mb-2">Details</p>
          <p className="text-sm bb-dashed pb-6 mb-6">
            Hi, We’re. A specialist agent. You can call me any Projects to buy !
            We have very unique design stylist features. My work attribution is
            Minimalist/Flat/Simple.
          </p>
          <ul className="flex flex-col gap-2 bb-dashed pb-6 mb-6">
            {details.map(({ title, number }) => (
              <li
                className="flex justify-between items-center font-medium"
                key={title}>
                <span>{title}</span>
                <span>{number}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <p>Member since: 23/07/23</p>
            <Link href="#">Report</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
