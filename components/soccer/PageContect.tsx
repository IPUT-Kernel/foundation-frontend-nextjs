import AvailableLeague from "./AvailableLeague";
import Hero from "./Hero";
import LiveMatch from "./LiveMatch";
import Matches from "./Matches";

const PageContect = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <Hero />
      <LiveMatch />
      <Matches />
      <AvailableLeague />
    </div>
  );
};

export default PageContect;
