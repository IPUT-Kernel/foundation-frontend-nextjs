import AchiveMent1 from "./AchiveMent1";
import AchiveMent2 from "./AchiveMent2";
import AchiveMent3 from "./AchiveMent3";
import Completed from "./Completed";
import FoodOrders from "./FoodOrders";
import Product from "./Product";
import Profile from "./Profile";
import SettingsCard from "./SettingsCard";
import Team from "./Team";

const CreativeWidgetsPage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <AchiveMent1 />
      <AchiveMent2 />
      <AchiveMent3 />
      <Product />
      <Profile />
      <Completed />
      <SettingsCard />
      <Team />
      <FoodOrders />
    </div>
  );
};

export default CreativeWidgetsPage;
