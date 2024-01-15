import LatestReviews from "./LatestReviews";
import Map1 from "./Map1";

const PageContent1 = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <Map1 />
      <LatestReviews />
    </div>
  );
};

export default PageContent1;
