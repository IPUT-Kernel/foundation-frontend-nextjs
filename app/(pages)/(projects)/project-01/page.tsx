import ProjectContentOne from "@/components/projects/ProjectContentOne";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ProjectOnePage = () => {
  return (
    <>
      <Banner
        title="Project Style 01"
        links={
          <Link href="#" className="btn">
            Add New
          </Link>
        }
      />
      <ProjectContentOne />
    </>
  );
};

export default ProjectOnePage;
