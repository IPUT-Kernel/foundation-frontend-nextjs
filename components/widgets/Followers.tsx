import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";

const Followers = () => {
  return (
    <div className="box my-4 xxxl:my-6">
      <div className="flex items-center">
        <Image
          src="/images/user-big-3.png"
          width={48}
          height={48}
          className="border-2 border-n0 -mr-4 dark:border-n500 rounded-full"
          alt="img"
        />
        <Image
          src="/images/user-big-4.png"
          width={48}
          height={48}
          className="border-2 border-n0 -mr-4 dark:border-n500 rounded-full"
          alt="img"
        />
        <Image
          src="/images/user-big-1.png"
          width={48}
          height={48}
          className="border-2 border-n0 -mr-4 dark:border-n500 rounded-full"
          alt="img"
        />
        <Image
          src="/images/user-big-4.png"
          width={48}
          height={48}
          className="border-2 border-n0 -mr-4 dark:border-n500 rounded-full"
          alt="img"
        />
        <Image
          src="/images/user-big-1.png"
          width={48}
          height={48}
          className="border-2 border-n0 -mr-4 dark:border-n500 rounded-full"
          alt="img"
        />
        <Image
          src="/images/user-big-3.png"
          width={48}
          height={48}
          className="border-2 border-n0 -mr-4 dark:border-n500 rounded-full"
          alt="img"
        />
        <div className="border-2 flex items-center justify-center text-n0 border-n0 dark:border-n500 rounded-full bg-primary w-12 h-12">
          <IconPlus />
        </div>
      </div>
      <div className="flex gap-3 items-center mt-6">
        <h4 className="text-primary h4">245.3k</h4>
        <span>Followers</span>
      </div>
    </div>
  );
};

export default Followers;
