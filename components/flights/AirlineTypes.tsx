import CheckboxCustom from "../shared/Checkbox";
const stops = [
  {
    title: "Asia Pacific Airlines",
    checked: true,
    time: "523",
  },
  {
    title: "American Airlines",
    checked: true,
    time: "152",
  },
  {
    title: "Europian Airlines",
    checked: true,
    time: "546",
  },
  {
    title: "Middle East Airlines",
    checked: true,
    time: "453",
  },
  {
    title: "African Airlines",
    checked: false,
    time: "324",
  },
  {
    title: "Australian Airlines",
    checked: false,
    time: "286",
  },
];
const AirlineTypes = () => {
  return (
    <div className="box">
      <p className="mb-4 pb-4  xl:mb-6 xl:pb-6 bb-dashed">Types of Airlines</p>
      <ul className="flex flex-col gap-2.5">
        {stops.map((item) => (
          <li key={item.title} className="flex items-center justify-between">
            <CheckboxCustom checked={item.checked} label={item.title} />
            <span className="font-medium">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AirlineTypes;
