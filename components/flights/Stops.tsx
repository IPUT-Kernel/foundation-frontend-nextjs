import CheckboxCustom from "../shared/Checkbox";

const stops = [
  {
    title: "Non Stop",
    checked: true,
  },
  {
    title: "1 Stop",
    checked: false,
  },
  {
    title: "2+ Stop",
    checked: false,
  },
  {
    title: "3+ Stop",
    checked: false,
  },
  {
    title: "4+ Stop",
    checked: false,
  },
  {
    title: "5+ Stop",
    checked: false,
  },
];
const Stops = () => {
  return (
    <div className="box">
      <p className="mb-4 pb-4  xl:mb-6 xl:pb-6 bb-dashed">No. of Stops</p>
      <ul className="flex flex-col gap-3">
        {stops.map((item) => (
          <li key={item.title}>
            <CheckboxCustom checked={item.checked} label={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stops;
