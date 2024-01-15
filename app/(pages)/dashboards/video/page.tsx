import Banner from "@/components/shared/Banner";
import VideoContent from "@/components/video/VideoContent";
import Link from "next/link";

const HealthPage = () => {
  return (
    <>
      <Banner
        title="Video"
        links={
          <Link href="#" className="btn">
            Add Video
          </Link>
        }
      />
      <VideoContent />
    </>
  );
};

export default HealthPage;
