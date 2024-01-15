import OptionsVertical from "../shared/OptionsVertical";
import Switch from "../shared/Switch";
const settings = [
  {
    title: "Email Notifications",
    number: "3093+ Email",
    checked: true,
  },
  {
    title: "Send Copy To Personal Email",
    number: "3093+ Email",
    checked: true,
  },
  {
    title: "Spam Email",
    number: "3093+ Email",
    checked: false,
  },
];
const EmailSettings = () => {
  return (
    <div className="box mb-4 xxxl:mb-6">
      <div className="flex justify-between items-center bb-dashed mb-3 pb-3 lg:pb-6 lg:mb-6">
        <p className="font-medium">Email Settings</p>
        <OptionsVertical />
      </div>
      <div className="flex flex-col gap-3 lg:gap-6 w-full">
        {settings.map(({ checked, number, title }) => (
          <div key={title} className="flex justify-between items-center w-full">
            <div>
              <p className="font-medium text-base lg:text-lg xl:text-xl mb-2">
                {title}
              </p>
              <p className="text-sm">{number}</p>
            </div>
            <Switch label={title} isChecked={checked} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailSettings;
