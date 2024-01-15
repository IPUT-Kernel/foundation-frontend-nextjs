"use client";
import nextjs from "@/public/images/home/nextjs.png";
import tailwind from "@/public/images/home/tailwind.png";
import typescript from "@/public/images/home/typescript.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const appsetupData = [
  {
    title: "NextJS",
    desc: "Nextjs is an open source framework that makes web development intuitive and powerful.",
    img: nextjs,
  },
  {
    title: "Tailwind CSS",
    desc: "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites",
    img: tailwind,
  },
  {
    title: "Typescript",
    desc: "TypeScript extends JavaScript by adding types to the language. TypeScript speeds up.",
    img: typescript,
  },
];

const AppSetup = () => {
  return (
    <section className="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            Next App Setup
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">
            An advanced Nextjs and Tailwind CSS app setup
          </h2>
          <p className="text-sm md:text-base">
            Dashboi is a powerful Nextjs app starter with a powerful and
            extensible codebase. It comes with everything you need to create a
            professional{" "}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 xl:gap-6">
          {appsetupData.map(({ title, desc, img }) => (
            <Tilt
              key={title}
              className="col-span-12 md:col-span-6 xl:col-span-4 box p-3 text-center">
              <div className="box xl:p-6 rounded-xl bg-primary/5 dark:bg-bg3 flex flex-col items-center justify-center">
                <div className="p-4 rounded-2xl bg-n0 dark:bg-bg4 mb-6 lg:mb-8">
                  <Image width={48} height={48} src={img} alt="icon" />
                </div>
                <h4 className="h4 mb-4">{title}</h4>
                <p className="text-sm">{desc}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSetup;
