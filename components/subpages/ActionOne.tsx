import { IconChecks } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const instructions = [
  {
    title: "Project Summery",
    desc: "Please read the project summary. You'll find it in your inbox",
  },
  {
    title: "UI Review",
    desc: "Please review the latest wireframes the team has provided",
  },
  {
    title: "Schedule",
    desc: "Please schedule a meeting with the team so they can ramp you up.",
  },
];

const ActionOne = () => {
  return (
    <div className="box p-3 xl:p-6 grid grid-cols-2 max-lg:gap-4 lg:divide-x rtl:divide-x-reverse divide-primary/20 divide-dashed">
      <div className="col-span-2 lg:col-span-1">
        <div className="box ltr:lg:mr-4 rtl:lg:ml-4 bg-primary/5 dark:bg-bg3 xl:p-8">
          <Image
            src="/images/user-big-8.png"
            width={120}
            height={120}
            alt="profile img"
            className="rounded-full"
          />
          <h5 className="text-lg sm:text-xl font-semibold mt-6 bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
            Kristin Watson has invited you to the{" "}
            <span className="text-primary">Travel Solution Website</span>{" "}
            project.
          </h5>
          <h5 className="text-xl font-medium mb-2">Additional Instructions</h5>
          <p className="text-sm mb-6 lg:mb-8">
            Please read the following instructions carefully before accepting
            the invitation.
          </p>
          <div className="flex flex-col gap-6">
            {instructions.map(({ desc, title }) => (
              <div key={title} className="flex items-center gap-4 md:gap-6">
                <div className="border border-n30 rounded-full dark:border-n500 bg-n0 dark:bg-bg4 p-2 md:p-3 text-primary">
                  <IconChecks />
                </div>
                <div>
                  <h5 className="text-lg md:text-xl font-medium mb-2">
                    {title}
                  </h5>
                  <p className="text-xs md:text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <div className="box ltr:lg:ml-4 rtl:lg:mr-4 bg-primary/5 dark:bg-bg3 xl:p-8">
          <p className="text-sm mb-6 lg:mb-8">
            Please read the following instructions carefully before accepting
            the invitation.
          </p>
          <div className="box xl:p-6 mb-6">
            <h5 className="text-xl font-medium mb-2">
              Message From Christine Watson
            </h5>
            <p className="text-sm">
              Hey Henrik, it would be really great if you could give us a hand
              in this project. There is a lot of work every day and I think the
              team is getting a bit overwhelmed. We want you on board.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-4 lg:gap-8 bb-dashed pb-6 mb-6 lg:mb-8 lg:pb-8">
            <div className="flex">
              <Image
                src="/images/user-2.png"
                width={32}
                height={32}
                className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                alt="img"
              />
              <Image
                src="/images/user-3.png"
                width={32}
                height={32}
                className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                alt="img"
              />
              <Image
                src="/images/user-4.png"
                width={32}
                height={32}
                className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                alt="img"
              />
              <Image
                src="/images/user-5.png"
                width={32}
                height={32}
                className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                alt="img"
              />
              <Image
                src="/images/user-6.png"
                width={32}
                height={32}
                className="border border-n0 dark:border-n500 -mr-4 rounded-full"
                alt="img"
              />
            </div>
            <p>And 12+ others are members of this project</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="btn px-5">
              Accept
            </Link>
            <Link href="#" className="btn-outline px-5">
              Decline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionOne;
