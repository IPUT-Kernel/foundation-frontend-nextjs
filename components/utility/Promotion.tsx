import { IconChecks } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const instructions = [
  {
    title: "8 team seats",
    desc: "Each team member on your account can create projects and tasks.",
  },
  {
    title: "Integrations",
    desc: "Add up to 5 addons to your main application to help you manage.",
  },
  {
    title: "Growth scaling",
    desc: "Your application grows in parallel of your business, without any effort.",
  },
];

const Promotion = () => {
  return (
    <div className="box xl:p-6 grid grid-cols-2 max-lg:gap-4 lg:divide-x rtl:lg:divide-x-reverse divide-primary/20 divide-dashed">
      <div className="col-span-2 lg:col-span-1">
        <div className="box ltr:lg:mr-4 rtl:lg:ml-4 bg-primary/5 dark:bg-bg3 xl:p-8 max-md:flex flex-col items-center max-md:text-center">
          <Image
            src="/images/promotion.png"
            width={424}
            height={330}
            className="bb-dashed mb-6 pb-6"
            alt="promotion illustration"
          />
          <h5 className="text-xl font-medium mb-2">Empower your team</h5>
          <p className="text-sm mb-6 xl:mb-8 max-md:max-w-[500px]">
            Make your team more productive and more efficient with our premium
            plan. Don&apos;t miss out on this great opportunity!
          </p>
          <p className="text-sm">
            Only <span className="h2 text-primary">$99.99</span> /per month
          </p>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <div className="box ltr:lg:ml-4 rtl:lg:mr-4 bg-primary/5 dark:bg-bg3 xl:p-8">
          <h5 className="text-xl font-medium mb-2">Upgrade Now</h5>
          <p className="text-sm mb-6 lg:mb-8">
            Take a look at some incredible features that have been added to our
            premium plan. You won&apos;t believe it!
          </p>

          <div className="flex flex-col gap-4 xl:gap-6 mb-6 bb-dashed pb-6">
            {instructions.map(({ desc, title }) => (
              <div key={title} className="flex items-center gap-4 xl:gap-6">
                <div className="border border-n30 rounded-full dark:border-n500 bg-n0 dark:bg-bg4 p-2 md:p-3 text-primary">
                  <IconChecks />
                </div>
                <div>
                  <h5 className="texl-lg md:text-xl font-medium mb-2">
                    {title}
                  </h5>
                  <p className="text-xs md:text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Link href="#" className="btn px-5">
              Upgrade
            </Link>
            <Link href="#" className="btn-outline px-5">
              Skip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
