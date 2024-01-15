"use client";
import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import PopularCoins from "../banking3/PopularCoins";
import SocialLinks from "../cardgrid/SocialLinks";
import ProgressBarSingle from "../shared/ProgressBarSingle";
import { tilesData } from "../tilegrid/TileGridTwo";
import LatestComments from "../writer/LatestComments";
import ProjectStack from "./ProjectStack";
import ProjectTools from "./ProjectTools";

const ProjectDetailsContent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 lg:col-span-7 xl:col-span-8">
        <div className="box mb-6 xxl:p-8">
          <div className="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8 flex flex-col sm:items-center min-[800px]:flex-row lg:flex-col xl:flex-row gap-4 xxl:gap-6 4xl:gap-8">
            <Image
              src="/images/projectgrid/project-1.png"
              width={347}
              height={260}
              className="rounded-2xl w-full"
              alt="img"
            />
            <div>
              <h2 className="h2 mb-4">Key Aspects of Web Design</h2>
              <p className="bb-dashed text-sm mb-6 pb-6">Web • Development</p>
              <p className="text-sm">
                Web Design refers to the process of planning, conceptualizing,
                and creating the visual and interactive elements of a website.
                It involves a combination of artistic design, user experience
                (UX) considerations, and technical skills to produce a website
                that is visually appealing, functional, and user-friendly.{" "}
              </p>
            </div>
          </div>
          <div className="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8">
            <h3 className="h3 mb-4">Visual Hierarchy</h3>
            <p className="text-sm">
              Designers use visual hierarchy techniques to guide users attention
              to the most important content and actions on a web page. This
              typically involves using size, color, typography, and placement to
              emphasize key elements.
            </p>
          </div>
          <div className="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8">
            <h4 className="h4 mb-4">User-Centered Design</h4>
            <p className="text-sm">
              Web designers focus on creating websites with the user in mind.
              They consider user behavior, preferences, and expectations to
              design interfaces that are intuitive and easy to navigate.
              User-centered design aims to provide a positive and efficient user
              experience.
            </p>
          </div>
          <div className="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 lg:pb-8 lg:mb-8">
            <h5 className="h5 mb-4 md:font-semibold">Responsive Web Design</h5>
            <p className="text-sm">
              With the increasing use of mobile devices, responsive web design
              is crucial. It involves designing websites to adapt and look great
              on various screen sizes and resolutions. This ensures that users
              can access and interact with the site seamlessly on smartphones,
              tablets, and desktops.
            </p>
          </div>
          <div>
            <h6 className="h6 mb-4 md:font-semibold">Collaboration</h6>
            <p className="text-sm">
              Web designers often work closely with developers, content
              creators, and stakeholders to ensure that the design aligns with
              project goals and requirements. Successful web design balances
              aesthetics with functionality and user experience to create
              websites that engage visitors and achieve their intended
              objectives, whether that&apos;s conveying information, promoting
              products, or providing services.
            </p>
          </div>
        </div>
        <div className="box mb-6 p-3 xxxl:p-6 grid grid-cols-2 gap-4 xxxl:gap-6">
          {tilesData.slice(0, 12).map(({ id, img, name, size, version }) => (
            <div
              key={id}
              className="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1 box p-3 xxxl:p-6 flex justify-between items-center">
              <Link href="#" className="flex gap-3 xxxl:gap-5 items-center">
                <Image
                  src={img}
                  width={60}
                  height={60}
                  className="rounded-lg lg:rounded-2xl w-10 h-10 lg:w-14 lg:h-14"
                  alt="img"
                />
                <div>
                  <p className="font-medium text-base md:text-lg xxxl:text-xl mb-2">
                    {name}
                  </p>
                  <span className="flex text-sm items-center gap-2">
                    <span>{size}</span>
                    <span className="text-xs">•</span>
                    <span>{version}</span>
                  </span>
                </div>
              </Link>
              <button className="bg-primary/5 rounded-full p-2 md:p-3 border border-n30 dark:border-n500">
                <IconDownload />
              </button>
            </div>
          ))}
        </div>
        <LatestComments />
      </div>
      <div className="col-span-12 lg:col-span-5 xl:col-span-4">
        <div className="col-span-2 lg:col-span-1 box xxl:p-8 mb-6">
          <div className="bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-center gap-4">
              <Image
                src="/images/user-big-2.png"
                width={60}
                height={60}
                className="rounded-full"
                alt="user img"
              />
              <div>
                <p className="text-xl font-medium mb-2">Darrell Steward</p>
                <span className="text-sm">Software Tester</span>
              </div>
            </div>
            <Link href="#" className="btn-outline lg:py-3 lg:px-6">
              View Profile
            </Link>
          </div>
          <div className="flex max-[480px]:flex-wrap justify-between items-center gap-3">
            <div className="w-full">
              <div className="flex justify-between items-center mb-4">
                <span>Progress</span>
                <span className="text-primary">65%</span>
              </div>
              <ProgressBarSingle bg="bg-primary" width={65} height="h-1" />
            </div>
            <SocialLinks />
          </div>
        </div>
        <ProjectTools />
        <ProjectStack />
        <PopularCoins />
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
