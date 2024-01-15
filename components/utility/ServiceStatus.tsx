import { IconClock, IconMessageDots } from "@tabler/icons-react";
import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";
const notifications = [
  {
    id: 4,
    name: "Jenny Wilson",
    img: "/images/user-big-4.png",
    message: "Mentioned you in a comment",
    comment: "Well done! Proud of you",
    time: "05:20 PM",
    date: "August 8, 2023",
    read: false,
    timePast: "20 Min ago",
  },
  {
    id: 5,
    name: "Annette Black",
    img: "/images/user-big-5.png",
    message: "Mentioned you in a comment",
    comment: "Well done! Proud of you",
    time: "05:20 PM",
    date: "August 8, 2023",
    read: true,
    timePast: "20 Min ago",
  },
  {
    id: 6,
    name: "Dianne Russell",
    img: "/images/user-big-6.png",
    message: "Mentioned you in a comment",
    comment: "Well done! Proud of you",
    time: "05:20 PM",
    date: "August 8, 2023",
    read: true,
    timePast: "20 Min ago",
  },
  {
    id: 7,
    name: "Brooklyn Simmons",
    img: "/images/user-big-7.png",
    message: "Mentioned you in a comment",
    comment: "Well done! Proud of you",
    time: "05:20 PM",
    date: "August 8, 2023",
    read: false,
    timePast: "20 Min ago",
  },
];
const ServiceStatus = () => {
  return (
    <div className="flex flex-col gap-4 xxxl:gap-6">
      <div className="box w-full">
        <div className="flex justify-between flex-wrap gap-3 items-center bb-dashed mb-6 pb-6">
          <p className="font-medium">dashboi.pixelaxis.com</p>
          <p className="text-primary">99.989% uptime</p>
        </div>
        <div className=" overflow-x-auto bb-dashed mb-6 pb-6">
          <div className="">
            <Image
              src="/images/line1.svg"
              width={1447}
              height={149}
              alt="img"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>90 days ago</p>
          <p>Today</p>
        </div>
      </div>
      <div className="box w-full">
        <div className="flex justify-between flex-wrap gap-3 items-center bb-dashed mb-6 pb-6">
          <p className="font-medium">api.dashboi.pixelaxis.com</p>
          <p className="text-primary">99.989% uptime</p>
        </div>
        <div className=" overflow-x-auto bb-dashed mb-6 pb-6">
          <div>
            <Image
              src="/images/line2.svg"
              width={1447}
              height={149}
              alt="img"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>90 days ago</p>
          <p>Today</p>
        </div>
      </div>
      <div className="box w-full">
        <div className="flex justify-between flex-wrap gap-3 items-center bb-dashed mb-6 pb-6">
          <p className="font-medium">hooks.dashboi.pixelaxis.com</p>
          <p className="text-primary">99.989% uptime</p>
        </div>
        <div className=" overflow-x-auto bb-dashed mb-6 pb-6">
          <div>
            <Image
              src="/images/line3.svg"
              width={1447}
              height={149}
              alt="img"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>90 days ago</p>
          <p>Today</p>
        </div>
      </div>
      <div className="box xl:p-6 xxxl:p-8">
        <div className="flex justify-between items-center bb-dashed mb-6 pb-6">
          <p className="font-medium">New Doctor</p>
          <OptionsVertical />
        </div>
        <div className="p-3 sm:p-4 xl:p-6 rounded-2xl bg-primary/5 flex flex-col xxxl:gap-6 gap-4">
          {notifications.map(
            ({ id, comment, date, img, message, name, time, timePast }) => (
              <div
                key={id}
                className={`box flex items-start min-[480px]:flex-nowrap flex-wrap gap-4 lg:gap-6 xl:p-8`}>
                <Image
                  src={img}
                  width={48}
                  className="rounded-full"
                  height={48}
                  alt="img"
                />
                <div className="grow">
                  <div className="flex gap-2 lg:gap-4 flex-wrap items-center mb-3">
                    <p className="text-lg md:text-xl font-medium">{name}</p>
                    <span className="text-sm">{timePast}</span>
                  </div>
                  <div className="flex bb-dashed mb-5 pb-5 gap-1">
                    <IconMessageDots size={20} className="shrink-0" />
                    <div className="flex flex-wrap items-center text-sm gap-1">
                      <span>{message}</span>
                      <span className="font-medium">{comment}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <IconClock size={20} />
                    <div className="flex items-center gap-2">
                      <p className="text-sm sm:text-base font-medium">{time}</p>
                      <span className="text-xs">{date}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceStatus;
