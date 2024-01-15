import Course from "@/components/course/Course";
import CourseMaterial from "@/components/course/CourseMaterial";
import StudentHistory from "@/components/course/StudentHistory";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const CoursePage = () => {
  return (
    <>
      <Banner
        title="Course Dashboard"
        links={
          <div className="flex gap-4 xl:gap-6">
            <Link href="#" className="btn-outline">
              Settings
            </Link>
            <Link href="#" className="btn">
              Schedule
            </Link>
          </div>
        }
      />
      <Course />
      <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
        <StudentHistory />
        <CourseMaterial />
      </div>
    </>
  );
};

export default CoursePage;
