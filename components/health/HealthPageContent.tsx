import EnergyLevel from "./EnergyLevel";
import OverallCondition from "./OverallCondition";
import Oxygenation from "./Oxygenation";
import Stats from "./Stats";

const HealthPageContent = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6 mt-4 xxxl:mt-6">
      <Stats />
      <EnergyLevel />
      <Oxygenation />
      <OverallCondition />
    </div>
  );
};

export default HealthPageContent;
