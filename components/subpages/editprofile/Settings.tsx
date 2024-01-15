import CheckboxCustom from "@/components/shared/Checkbox";
import Switch from "@/components/shared/Switch";
const updates = [
  "Updates from System Notification",
  "Tips on getting more out of PCT-themes",
  "Things you missed since you last logged into PCT-themes",
  "News about products and other services",
  "Tips and Document business products",
  "Tips on getting more reach",
];
const emailSettings = [
  {
    id: 1,
    title: "Email Notification",
    desc: "3093+ email",
    status: false,
  },
  {
    id: 2,
    title: "Send Copy To Personal Email",
    desc: "231+ email",
    status: true,
  },
  {
    id: 3,
    title: "Spam Email",
    desc: "254+ email",
    status: true,
  },
];
const relatedEmails = [
  {
    id: 1,
    title: "Have new notifications",
    desc: "Features integrated from this account",
    status: true,
  },
  {
    id: 2,
    title: "You're sent a direct message",
    desc: "Features integrated from this account",
    status: true,
  },
  {
    id: 3,
    title: "Someone adds you as a connection",
    desc: "Features integrated from this account",
    status: false,
  },
];
const whenToEscalate = [
  {
    id: 1,
    title: "Upon new order",
    desc: "Features integrated from this account",
    status: true,
  },
  {
    id: 2,
    title: "New membership approval",
    desc: "Features integrated from this account",
    status: false,
  },
  {
    id: 3,
    title: "Member registration",
    desc: "Features integrated from this account",
    status: true,
  },
];
const Settings = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 lg:col-span-6">
        <div className="box xl:p-8 xxl:p-10 mb-4 xxxl:mb-6">
          <p className="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6 ">
            Email Settings
          </p>
          <div className="flex flex-col gap-4 md:gap-6">
            {emailSettings.map(({ id, desc, status, title }) => (
              <div key={id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-xl mb-2">{title}</p>
                  <span className="text-sm">{desc}</span>
                </div>
                <Switch label={title} isChecked={status} />
              </div>
            ))}
          </div>
        </div>
        <div className="box xl:p-8 xxl:p-10">
          <p className="font-medium bb-dashed md:mb-6 md:pb-6 mb-4 pb-4">
            Updates from System Notification
          </p>
          <div className="flex flex-col gap-4">
            {updates.map((item) => (
              <CheckboxCustom label={item} key={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="box xl:p-8 xxl:p-10 mb-4 xxxl:mb-6">
          <p className="font-medium bb-dashed md:mb-6 md:pb-6 mb-4 pb-4">
            Activity Related Emails
          </p>
          <div className="flex flex-col gap-6">
            {relatedEmails.map(({ id, desc, status, title }) => (
              <div key={id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-xl mb-2">{title}</p>
                  <span className="text-sm">{desc}</span>
                </div>
                <Switch label={title} isChecked={status} />
              </div>
            ))}
          </div>
        </div>
        <div className="box xl:p-8 xxl:p-10">
          <p className="font-medium bb-dashed md:mb-6 md:pb-6 mb-4 pb-4">
            When to escalate emails?
          </p>
          <div className="flex flex-col gap-6">
            {whenToEscalate.map(({ id, desc, status, title }) => (
              <div key={id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-xl mb-2">{title}</p>
                  <span className="text-sm">{desc}</span>
                </div>
                <Switch label={title} isChecked={status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
