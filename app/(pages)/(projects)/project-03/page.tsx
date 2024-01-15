import ProjectContentThree from "@/components/projects/ProjectContentThree";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ProjectThreePage = () => {
  return (
    <>
      <Banner
        title="Project Style 03"
        links={
          <Link href="#" className="btn">
            Add New
          </Link>
        }
      />
      <ProjectContentThree />
    </>
  );
};

export default ProjectThreePage;
