import {
  IconBriefcase,
  IconBuilding,
  IconBuildingStore,
  IconCircleCheck,
  IconCircleX,
  IconPlaneTilt,
} from "@tabler/icons-react";
import Link from "next/link";

const plan1 = [
  {
    title: "Basic Plan",
    icon: <IconBuildingStore size={36} />,
    price: "$29.00",
    facilities: {
      "Administrative support": true,
      "Legal support": true,
      "Technology support": true,
      "Marketing support": false,
      "Hotline support 24/7": false,
    },
  },
  {
    title: "Business Plan",
    icon: <IconBuilding size={36} />,
    price: "$99.00",
    facilities: {
      "Administrative support": true,
      "Legal support": true,
      "Technology support": true,
      "Marketing support": true,
      "Hotline support 24/7": true,
    },
  },
];
const plan2 = [
  {
    title: "Basic Plan",
    icon: <IconBuildingStore size={36} />,
    price: "$29.00",
    facilities: {
      "Administrative support": true,
      "Legal support": true,
      "Technology support": true,
      "Marketing support": false,
      "Hotline support 24/7": false,
    },
  },
  {
    title: "Premium Plan",
    icon: <IconPlaneTilt size={36} />,
    price: "$59.00",
    facilities: {
      "Administrative support": true,
      "Legal support": true,
      "Technology support": true,
      "Marketing support": true,
      "Hotline support 24/7": false,
    },
  },
  {
    title: "Business Plan",
    icon: <IconBuilding size={36} />,
    price: "$99.00",
    facilities: {
      "Administrative support": true,
      "Legal support": true,
      "Technology support": true,
      "Marketing support": true,
      "Hotline support 24/7": true,
    },
  },
  {
    title: "Special Plans",
    icon: <IconBriefcase size={36} />,
    price: "$199.00",
    facilities: {
      "Administrative support": true,
      "Legal support": true,
      "Technology support": true,
      "Marketing support": true,
      "Hotline support 24/7": true,
    },
  },
];
const PlanBoarding = () => {
  return (
    <div>
      <div className="py-10 lg:py-20 xl:pb-[120px] mb-10 lg:mb-20 xl:mb-[120px] bb-dashed">
        <div className="max-w-lg mx-auto text-center mb-7 lg:mb-10">
          <h2 className="h2 mb-6">Start your Free Trial</h2>
          <p>
            We won&apos;t bill you before your per month free trial period ends.
          </p>
        </div>
        <div className="box xl:p-6 grid grid-cols-2 gap-4 xxxl:gap-6">
          {plan1.map(({ title, facilities, icon, price }) => (
            <div
              key={title}
              className="col-span-2 xl:col-span-1 max-md:gap-4 hover:border-primary duration-300 box xl:py-8 xl:px-10 grid grid-cols-2 bg-primary/5 dark:bg-bg3 sm:divide-x rtl:divide-x-reverse divide-primary/20 divide-dashed">
              <div className="col-span-2 sm:col-span-1 ltr:sm:pr-4 ltr:md:pr-6 rtl:sm:pl-4 rtl:md:pl-6">
                <div className="rounded-full mb-3 p-3 inline-block border border-n30 dark:border-n500 bg-n0 dark:bg-bg3 text-primary">
                  {icon}
                </div>
                <h4 className="text-2xl font-medium pb-6 mb-4 border-b border-n30 dark:border-n500">
                  {title}
                </h4>
                <h2 className="display-4 text-primary mb-3">{price}</h2>
                <span>Per month</span>
              </div>
              <div className="col-span-2 sm:col-span-1 ltr:sm:pl-4 ltr:md:pl-6 rtl:sm:pr-4 rtl:md:pr-6">
                <ul className="flex flex-col gap-4 mb-6 lg:mb-8">
                  {Object.entries(facilities).map(([type, isAvailable]) => (
                    <li key={type} className="flex items-center gap-2">
                      {isAvailable ? (
                        <IconCircleCheck className="text-primary" size={20} />
                      ) : (
                        <IconCircleX className="text-secondary2" size={20} />
                      )}
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-outline flex w-full justify-center py-3">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-sm flex justify-center items-center mt-7 gap-5 lg:mt-10">
          <button className="btn">Confirm</button>
          <Link href="">Read More</Link>
        </div>
      </div>
      <div>
        <div className="max-w-lg mx-auto text-center mb-7 lg:mb-10">
          <h2 className="h2 mb-6">Start your Free Trial</h2>
          <p>
            We won&apos;t bill you before your per month free trial period ends.
          </p>
        </div>
        <div className="box xl:p-6 grid grid-cols-12 gap-4 xxxl:gap-6">
          {plan2.map(({ title, facilities, icon, price }) => (
            <div
              key={title}
              className="col-span-12 md:col-span-6 xl:col-span-4 4xl:col-span-3 flex flex-col hover:border-primary duration-300 items-center box xl:p-8 bg-primary/5 dark:bg-bg3">
              <div className="rounded-full mb-3 p-3 inline-block border border-n30 dark:border-n500 bg-n0 dark:bg-bg3 text-primary">
                {icon}
              </div>
              <h4 className="text-2xl text-center font-medium w-full pb-6 mb-4 bb-dashed">
                {title}
              </h4>
              <div className="bb-dashed mb-6 pb-6 w-full text-center">
                <h2 className="display-4 text-primary mb-3">{price}</h2>
                <span>Per month</span>
              </div>
              <ul className="flex flex-col gap-4 mb-6 lg:mb-8">
                {Object.entries(facilities).map(([type, isAvailable]) => (
                  <li key={type} className="flex items-center gap-2">
                    {isAvailable ? (
                      <IconCircleCheck className="text-primary" size={20} />
                    ) : (
                      <IconCircleX className="text-secondary2" size={20} />
                    )}
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-outline py-3 px-12">Choose Plan</button>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-sm flex justify-center items-center mt-7 gap-5 lg:mt-10">
          <button className="btn">Confirm</button>
          <Link href="">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default PlanBoarding;
