import { IconAlarm, IconCircleCheck, IconVideo } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
type courseType = {
  title: string;
  img: string;
  instructor: string;
  instructorImg: string;
  lessons: number;
  hours: number;
  url: string;
  completed: number;
};
const CourseCard = ({
  title,
  completed,
  hours,
  img,
  instructor,
  instructorImg,
  lessons,
  url,
}: courseType) => {
  return (
    <Link
      key={title}
      href={url}
      className="col-span-12 min-[580px]:col-span-6 lg:col-span-4 block min-[1700px]:col-span-3 box p-5 md:p-6 xl:px-8">
      <Image
        src={img}
        width={100}
        height={100}
        className="rounded-full mb-6"
        alt="course thumb"
      />
      <h4 className="h4 mb-7">{title}</h4>
      <div className="flex gap-4 items-center mb-6">
        <Image
          src={instructorImg}
          width={40}
          className="rounded-full"
          height={40}
          alt="icon"
        />
        <p className="text-xl font-semibold">{instructor}</p>
      </div>
      <div className="flex gap-6 pb-4 mb-4 xl:mb-6 xl:pb-6 bb-dashed">
        <div className="flex items-center gap-2">
          <IconVideo className="text-secondary3" />{" "}
          <span className="text-sm 4xl:text-base">{lessons} Lesson</span>
        </div>
        <div className="flex items-center gap-2">
          <IconAlarm className="text-secondary3" />{" "}
          <span className="text-sm 4xl:text-base">{hours} Hours</span>
        </div>
      </div>
      {completed == 100 ? (
        <span className="flex items-center gap-2">
          {" "}
          <span className="text-primary">
            <IconCircleCheck size={22} />
          </span>{" "}
          Completed
        </span>
      ) : (
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-lg w-full h-2">
            <div
              style={{ width: `${completed}%` }}
              className="bg-primary rounded-lg h-2"></div>
          </div>
          <span className="text-primary">{completed}%</span>
        </div>
      )}
    </Link>
  );
};

export default CourseCard;
