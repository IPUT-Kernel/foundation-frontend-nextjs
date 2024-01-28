"use client";
import nextjs from "@/public/images/home/nextjs.png";
import tailwind from "@/public/images/home/tailwind.png";
import typescript from "@/public/images/home/typescript.png";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const appsetupData = [
  {
    title: "NextJS",
    desc: "大規模開発に特化したフレームワーク 最新のルーティング App routerを採用 ",
    img: nextjs,
  },
  {
    title: "Tailwind CSS",
    desc: "ユーティリティファーストのCSSフレームワーク",
    img: tailwind,
  },
  {
    title: "Typescript",
    desc: "バックエンド・フロントエンドともにTypescriptで実装",
    img: typescript,
  },
];

const Framework = () => {
  return (
    <section className="py-14 xxl:py-28 bg-n0 dark:bg-bg4">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="h2 mb-4 lg:mb-6">
            最先端のフレームワークを使用
          </h2>
          <p className="text-sx md:text-base">
            IPUT-Kernelは当プロジェクト自体を教材としても使えるよう
            最新のフレームワークで実装されています。
            {" "}
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
                <p className="text-sx">{desc}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;
