"use client";
import CardImgDark from "@/public/images/home/card-dark.png";
import CardImg from "@/public/images/home/card.png";
import SatisfactionImg from "@/public/images/home/satisfaction.png";
import TransactionImgDark from "@/public/images/home/transactions-dark.png";
import TransactionImg from "@/public/images/home/transactions.png";
import { IconDeviceMobile, IconHeadset, IconUsers } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
const supportData = [
  {
    title: "Support portal",
    desc: "Running into issues? We have a dedicated support portal where you can open a ticket and get help from our support team.",
    icon: <IconHeadset className="w-6 h-6 md:w-9 md:h-9" />,
  },
  {
    title: "Github access",
    desc: "We built Github automation that allows you to access to our private repositories, for the products you've purchased from us.",
    icon: <IconDeviceMobile className="w-6 h-6 md:w-9 md:h-9" />,
  },
  {
    title: "Community",
    desc: "We have a thrilling Discord community where you can discuss your work and get help from our community of customers and developers.",
    icon: <IconUsers className="w-6 h-6 md:w-9 md:h-9" />,
  },
];

const Satisfaction = () => {
  const { theme } = useTheme();
  return (
    <section className="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
      <div className="container grid grid-cols-2 gap-6 items-center">
        <div className="col-span-2 lg:col-span-1 relative">
          <Image
            className="hidden xxl:block absolute -left-10 z-[2] xxxl:-left-20 4xl:-left-32 top-[20%]"
            src={theme == "dark" ? CardImgDark : CardImg}
            alt="img"
          />
          <Image
            className="hidden xxl:block absolute bottom-10 z-[2] -right-3"
            src={theme == "dark" ? TransactionImgDark : TransactionImg}
            alt="img"
          />
          <Image
            src={SatisfactionImg}
            className="xxl:-translate-x-10 xxxl:-translate-x-20"
            alt="img"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            We have your back
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">Customer Satisfaction</h2>
          <p className="mb-10 lg:mb-14 text-sm md:text-base">
            We are here to help you. We have a dedicated support team and a
            community of developers to help you with any issue you might have.
          </p>
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8">
            {supportData.map(({ title, desc, icon }) => (
              <div key={title} className="flex items-start gap-4 xl:gap-6">
                <div className="p-3 rounded-full bg-primary/5 dark:bg-bg3 text-primary">
                  {icon}
                </div>
                <div>
                  <h5 className="text-lg lg:text-xl font-medium mb-2">
                    {title}
                  </h5>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Satisfaction;
