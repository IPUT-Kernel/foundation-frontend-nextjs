import CheckboxCustom from "../shared/Checkbox";

const stops = [
  {
    title: "Early Morning",
    checked: true,
    time: "12am - 8am",
  },
  {
    title: "Morning",
    checked: true,
    time: "8am - 12pm",
  },
  {
    title: "Mid-Day",
    checked: false,
    time: "12pm - 4pm",
  },
  {
    title: "Evening",
    checked: true,
    time: "8pm - 4pm",
  },
  {
    title: "Night",
    checked: false,
    time: "8pm - 12am",
  },
];
const DepartureTime = () => {
  return (
    <div className="box">
      <p className="mb-4 pb-4 xl:mb-6 xl:pb-6 bb-dashed">Departure Time</p>
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

export default DepartureTime;
