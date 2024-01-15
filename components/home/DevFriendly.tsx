"use client";
import css from "@/public/images/home/css.png";
import eslint from "@/public/images/home/eslint.png";
import html from "@/public/images/home/html.png";
import javascript from "@/public/images/home/js.png";
import nextjs from "@/public/images/home/nextjs.png";
import nodejs from "@/public/images/home/nodejs.png";
import npm from "@/public/images/home/npm.png";
import prettier from "@/public/images/home/prettier.png";
import react from "@/public/images/home/react.png";
import tailwind from "@/public/images/home/tailwind.png";
import typescript from "@/public/images/home/typescript.png";
import webpack from "@/public/images/home/webpack.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const friendlyData = [
  {
    title: "NextJS",
    img: nextjs,
  },
  {
    title: "Tailwind CSS",
    img: tailwind,
  },
  {
    title: "Typescript",
    img: typescript,
  },
  {
    title: "Webpack",
    img: webpack,
  },
  {
    title: "Node JS",
    img: nodejs,
  },
  {
    title: "Npm",
    img: npm,
  },
  {
    title: "Eslint",
    img: eslint,
  },
  {
    title: "Prettier",
    img: prettier,
  },
  {
    title: "React JS",
    img: react,
  },
  {
    title: "HTML",
    img: html,
  },
  {
    title: "CSS",
    img: css,
  },
  {
    title: "Javascript",
    img: javascript,
  },
];

const DevFriendly = () => {
  return (
    <section className="py-14 xxl:py-28 bg-primary/5 dark:bg-bg3 bg-[url(/images/home/smartui-bg.png)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h5 className="h5 text-primary font-semibold mb-2 lg:mb-4">
            There is More
          </h5>
          <h2 className="h2 mb-4 lg:mb-6">Developer Friendly</h2>
          <p className="text-sm md:text-base">
            Dashboi is a cutting edge dashboard system that uses the latest
            javascript and technologies and remains truthfull to the best coding
            practices
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 xxl:gap-6">
          {friendlyData.map(({ title, img }) => (
            <Tilt
              key={title}
              className="col-span-12 min-[480px]:col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 text-center box p-8 rounded-xl flex flex-col items-center justify-center">
              <div className="p-3 rounded-2xl bg-primary/5 box dark:bg-bg3 mb-4">
                <Image src={img} alt="icon" />
              </div>
              <h5 className="h5">{title}</h5>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevFriendly;
