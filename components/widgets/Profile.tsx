import { IconCheck, IconCirclePlus, IconMessage } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";

const Profile = () => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box p-3">
      <div className="bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full py-8">
        <div className="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
          <Image
            width={120}
            height={120}
            className="rounded-full"
            src="/images/user-big-2.png"
            alt="img"
          />
          <div className="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
            <IconCheck size={18} />
          </div>
        </div>
        <Link href="#" className="text-center">
          <h4 className="mt-6 lg:mt-8 h4 mb-3">Diana Prince</h4>
          <p className="mb-4 lg:mb-6">UI/UX Designer</p>
        </Link>
        {/* Social icons */}
        <div className="flex justify-center bb-dashed pb-4 mb-4 md:pb-6 md:mb-6">
          <SocialLinks />
        </div>
        {/* follow buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="#" className="btn">
            <IconCirclePlus />
            Follow
          </Link>
          <Link href="#" className="btn-outline">
            <IconMessage />
            Message
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
