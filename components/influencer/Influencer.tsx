import FaceBookStats from "./FaceBookStats";
import InstagramPosts from "./InstagramPosts";
import Profile from "./Profile";
import TiktokStats from "./TiktokStats";
import TwitterStats from "./TwitterStats";

const Influencer = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 xl:col-span-8">
        <Profile />
        <InstagramPosts />
        <FaceBookStats />
        <TwitterStats />
      </div>
      <div className="col-span-12 xl:col-span-4">
        <TiktokStats />
      </div>
    </div>
  );
};

export default Influencer;
