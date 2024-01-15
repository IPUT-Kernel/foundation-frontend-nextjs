import Calendar2 from "./Calender";
import Hobby from "./Hobby";
import HobbyList from "./HobbyList";
import PopularActivities from "./PopularActivities";
import SearchBar from "./SearchBar";
import TrendingNow from "./TrendingNow";

const Hobbies = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 xl:col-span-8">
        <Hobby />
        <div className="grid grid-cols-2 gap-4 xxxl:gap-6">
          <TrendingNow />
          <PopularActivities />
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4">
        <SearchBar />
        <Calendar2 />
      </div>
      <HobbyList />
    </div>
  );
};

export default Hobbies;
