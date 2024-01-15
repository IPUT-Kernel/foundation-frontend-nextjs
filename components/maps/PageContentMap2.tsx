import LatestReviews from "./LatestReviews";
import Map2 from "./Map2";

const PageContentMap2 = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <LatestReviews size={3} />
      <Map2 />
    </div>
  );
};

export default PageContentMap2;
