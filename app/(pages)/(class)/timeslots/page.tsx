import Banner from "@/components/shared/Banner";
import Link from "next/link";
import CommonLecture from "@/components/timetable/CommonLecture";

const ClassTimetable = () => {
  return (
    <>
      <Banner
        title="時間割設定"
        links={
          <div className="flex gap-4 xl:gap-6">
            <Link href="#" className="btn-outline">
              Manage
            </Link>
            <Link href="#" className="btn">
              POST
            </Link>
          </div>
        }
      />
      <CommonLecture />
    </>
  );
};

export default ClassTimetable;
