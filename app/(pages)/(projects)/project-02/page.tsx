import ProjectContentTwo from "@/components/projects/ProjectContentTwo";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ProjectTwoPage = () => {
  return (
    <>
      <Banner
        title="Project Style 02"
        links={
          <Link href="#" className="btn">
            Add New
          </Link>
        }
      />
      <ProjectContentTwo />
    </>
  );
};

export default ProjectTwoPage;
