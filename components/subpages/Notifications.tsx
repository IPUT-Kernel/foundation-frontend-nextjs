import { IconClock, IconMessageDots } from "@tabler/icons-react";
import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";
type Notification = {
  id: number;
  name: string;
  img: string;
  message: string;
  comment: string;
  time: string;
  date: string;
  read: boolean;
  timePast: string;
};

type NotificationsData = {
  today: Notification[];
  yesterday: Notification[];
};

const notificationsData: NotificationsData = {
  today: [
    {
      id: 1,
      name: "Jane Cooper",
      img: "/images/user-big-1.png",
      message: "Mentioned you in a comment",
      comment: "Well done! Proud of you",
      time: "05:20 PM",
      date: "August 8, 2023",
      read: false,
      timePast: "20 Min ago",
    },
    {
      id: 2,
      name: "Arlene McCoy",
      img: "/images/user-big-2.png",
      message: "Mentioned you in a comment",
      comment: "Well done! Proud of you",
      time: "05:20 PM",
      date: "August 8, 2023",
      read: true,
      timePast: "20 Min ago",
    },
    {
      id: 3,
      name: "Kathryn Murphy",
      img: "/images/user-big-3.png",
      message: "Mentioned you in a comment",
      comment: "Well done! Proud of you",
      time: "05:20 PM",
      date: "August 8, 2023",
      read: false,
      timePast: "20 Min ago",
    },
  ],
  yesterday: [
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
  ],
};
const Notifications = () => {
  return (
    <div className="box xl:p-8">
      <div className="flex justify-between items-center mb-4 pb-4 md:mb-6 md:pb-6 bb-dashed">
        <p className="font-medium">Notifications</p>
        <OptionsVertical />
      </div>
      {Object.keys(notificationsData).map((key) => (
        <div key={key}>
          <p className="py-4 px-6 font-semibold">{key}</p>
          <div>
            {notificationsData[key as keyof NotificationsData].map(
              ({
                id,
                comment,
                date,
                img,
                message,
                name,
                read,
                time,
                timePast,
              }) => (
                <div
                  key={id}
                  className={`p-4 md:p-6 rounded-xl ${
                    !read && "bg-primary/5 dark:bg-bg3"
                  } flex flex-wrap items-start gap-4 md:gap-6 border border-n30 dark:border-n500 mb-4 last:mb-0`}>
                  <Image
                    src={img}
                    width={48}
                    className="rounded-full"
                    height={48}
                    alt="img"
                  />
                  <div className="grow">
                    <div className="flex gap-2 md:gap-4 flex-wrap items-center mb-3">
                      <p className="text-xl font-medium">{name}</p>
                      <span className="text-sm">{timePast}</span>
                    </div>
                    <div className="flex bb-dashed mb-5 pb-5 gap-1">
                      <IconMessageDots />
                      <div className="flex flex-wrap items-center text-sm gap-1">
                        <span>{message}</span>
                        <span className="font-medium">{comment}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <IconClock />
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{time}</p>
                        <span className="text-xs">{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
