import ProjectDetailsContent from "@/components/projects/ProjectDetailsContent";
import Banner from "@/components/shared/Banner";
import Link from "next/link";

const ProjectDetailsPage = () => {
  return (
    <>
      <Banner
        title="Project Details"
        links={
          <Link href="#" className="btn">
            Manage Projects
          </Link>
        }
      />
      <ProjectDetailsContent />
    </>
  );
};

export default ProjectDetailsPage;
