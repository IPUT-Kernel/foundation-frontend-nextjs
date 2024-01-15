import AirlineTypes from "./AirlineTypes";
import Calendar2 from "./Calendar";
import DepartureTime from "./DepartureTime";
import Stops from "./Stops";

const RightCol = () => {
  return (
    <div className="col-span-12 xl:col-span-4 grid xl:flex xl:flex-col grid-cols-2 gap-4 xxxl:gap-6">
      <div className="col-span-2 md:col-span-1">
        <Calendar2 />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Stops />
      </div>
      <div className="col-span-2 md:col-span-1">
        <DepartureTime />
      </div>
      <div className="col-span-2 md:col-span-1">
        <AirlineTypes />
      </div>
    </div>
  );
};

export default RightCol;
