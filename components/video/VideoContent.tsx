import VideoBigCard from "./VideoBigCard";
import VideoCard2 from "./VideoCard2";
import VideoCard3 from "./VideoCard3";
import VideoCard4 from "./VideoCard4";

const VideoContent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <VideoBigCard />
      <VideoCard2 />
      <VideoCard3 />
      <VideoCard4 />
    </div>
  );
};

export default VideoContent;
