import Category from "./Category";
import Hero from "./Hero";
import PopularDishes from "./PopularDishes";
import RecentOrder from "./RecentOrder";
import Sidebar from "./Sidebar";

const PageContent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6 foodapp">
      <Hero />
      <div className="col-span-12 lg:col-span-7 xl:col-span-8">
        <Category />
        <PopularDishes />
        <RecentOrder />
      </div>
      <div className="col-span-12 lg:col-span-5 xl:col-span-4">
        <Sidebar />
      </div>
    </div>
  );
};

export default PageContent;
