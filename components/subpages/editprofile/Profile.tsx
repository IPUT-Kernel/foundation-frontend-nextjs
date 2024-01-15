import {
  IconCheck,
  IconCirclePlus,
  IconEdit,
  IconMail,
  IconMapPin,
  IconMessage,
  IconPhoneCall,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const details = [
  {
    title: "Name",
    value: "Kathryn Murphy",
  },
  {
    title: "Father Name",
    value: "Bessie Cooper",
  },
  {
    title: "Mother Name",
    value: "Theresa Webb",
  },
  {
    title: "Phone",
    value: "(629) 555-0129",
  },
  {
    title: "Email",
    value: "info@mail.com",
  },
  {
    title: "Web Site",
    value: "www.info.com",
  },
  {
    title: "Country",
    value: "US",
  },
  {
    title: "Zip Code",
    value: "5163",
  },
  {
    title: "Address",
    value: "Toledo",
  },
];
const educations = [
  {
    title: "Master Degree (Year)",
    value: "2014-2017",
  },
  {
    title: "Department",
    value: "CSE",
  },
  {
    title: "Institute",
    value: "Uttara University",
  },
  {
    title: "Bachelor (Year)",
    value: "2011-2013",
  },
  {
    title: "Department",
    value: "CSE",
  },
  {
    title: "Institute",
    value: "Uttara University",
  },
  {
    title: "School (Year)",
    value: "2009-2011",
  },
  {
    title: "Group",
    value: "Science",
  },
  {
    title: "Institute",
    value: "School of London, England",
  },
];
const Profile = () => {
  return (
    <div className="grid grid-cols-12 gap-4 xxxl:gap-6">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4">
        <div className="box p-2 sm:p-3 sticky top-28">
          <div className="bg-primary/5 p-3 sm:p-5 xxxl:p-8 dark:bg-bg3 flex flex-col items-center justify-center rounded-2xl h-full">
            <div className="p-3 bg-n0 dark:bg-bg4 rounded-full relative">
              <Image
                width={120}
                height={120}
                className="rounded-full"
                src="/images/user-big-2.png"
                alt="img"
              />
              <div className="p-1 absolute right-2 bottom-10 bg-primary rounded-full text-n0">
                <IconCheck size={18} />
              </div>
            </div>
            <h4 className="mt-6 lg:mt-8 h4 mb-3">Diana Prince</h4>
            <p className="mb-4 lg:mb-6">UI/UX Designer</p>
            {/* Social icons */}
            <div className="flex justify-center bb-dashed pb-6 mb-6 w-full">
              <div className="flex text-center md:divide-x rtl:md:divide-x-reverse divide-dashed divide-primary/20">
                <div className="px-1 md:px-3 lg:px-4 xxl:px-6">
                  <p className="text-lg font-semibold mb-1">N/A</p>
                  <p className="text-sm">Role Status</p>
                </div>
                <div className="px-1 md:px-3 lg:px-4 xxl:px-6">
                  <p className="text-lg font-semibold mb-1">0 - 5</p>
                  <p className="text-sm">Years of exp.</p>
                </div>
                <div className="px-1 md:px-3 lg:px-4 xxl:px-6">
                  <p className="text-lg font-semibold mb-1">Lvl. n/a</p>
                  <p className="text-sm">Global rating</p>
                </div>
              </div>
            </div>

            {/* follow buttons */}
            <div className="flex gap-3 justify-center">
              <Link href="#" className="btn px-4 xxxl:px-6">
                <IconCirclePlus size={20} />
                Follow
              </Link>
              <Link href="#" className="btn-outline px-4 xxxl:px-6">
                <IconMessage size={20} />
                Message
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 mt-7 lg:mt-10 self-start">
              <div className="flex items-center gap-1.5 md:gap-3 w-full">
                <div className="rounded-full text-primary">
                  <IconPhoneCall size={20} />
                </div>
                <span className="text-sm md:text-base">
                  (302) 555-0107, (302) 555-0108
                </span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-3 w-full">
                <div className="rounded-full text-primary">
                  <IconMail size={20} />
                </div>
                <span className="text-sm md:text-base">
                  georgia.young@example.com
                </span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-3 w-full">
                <div className="rounded-full text-primary">
                  <IconMapPin size={20} />
                </div>
                <span className="text-sm md:text-base">
                  775 Rolling Green Rd.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 xl:col-span-8">
        <div className="box p-3">
          <div className="box bg-primary/5 dark:bg-bg3 xxxl:p-8">
            <p className="mb-6 font-medium pb-6 bb-dashed">Profile Info</p>
            {/* About me */}
            <div className="box border-none xxl:p-8 mb-4 lg:mb-6">
              <div className="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                <h5 className="h5">About Me</h5>
                <button className="btn-outline">
                  <IconEdit />
                  Edit
                </button>
              </div>
              <p>
                Hello, I&apos;m Darrel Steward, a passionate Creative Graphic
                Designer & User Experience Designer. With a strong background in
                visual communication and a deep understanding of user-centric
                design principles, I specialize in creating compelling digital
                experiences.{" "}
              </p>
            </div>
            {/* Personal Details */}
            <div className="box border-none xxl:p-8 mb-4 lg:mb-6">
              <div className="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                <h5 className="h5">Personal Details</h5>
                <button className="btn-outline">
                  <IconEdit />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {details.map(({ title, value }) => (
                  <div
                    key={title}
                    className="col-span-3 sm:col-span-2 md:col-span-1">
                    <p className="text-xs sm:text-sm font-medium mb-1">
                      {title}
                    </p>
                    <p className="text-base md:text-lg font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Education */}
            <div className="box border-none xxl:p-8 mb-4 lg:mb-6">
              <div className="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                <h5 className="h5">Education</h5>
                <button className="btn-outline">
                  <IconEdit />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {educations.map(({ title, value }) => (
                  <div
                    key={title}
                    className="col-span-3 sm:col-span-2 md:col-span-1">
                    <p className="text-xs sm:text-sm font-medium mb-1">
                      {title}
                    </p>
                    <p className="text-base md:text-lg font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Employment */}
            <div className="box border-none xxl:p-8">
              <div className="bb-dashed pb-4 mb-4 md:mb-6 md:pb-6 flex justify-between items-center">
                <h5 className="h5">Employment</h5>
                <button className="btn-outline">
                  <IconEdit />
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-12 gap-4 sm:gap-6">
                <div className="col-span-12 sm:col-span-4">
                  <p className="text-xs sm:text-sm font-medium mb-1">senior</p>
                  <p className="text-base md:text-lg font-medium">
                    Senior UI/UX designer
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <p className="text-xs sm:text-sm font-medium mb-1">
                    Job Responsibility
                  </p>
                  <p className="text-base md:text-lg font-medium">
                    Perform task related to project with the 100+ team under my
                    observation. Team management is key role in this company.
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <p className="text-xs sm:text-sm font-medium mb-1">
                    Trainee cum Project Manager
                  </p>
                  <p className="text-base md:text-lg font-medium">2017-2019</p>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <p className="text-xs sm:text-sm font-medium mb-1">
                    Job Responsibility
                  </p>
                  <p className="text-base md:text-lg font-medium">
                    Team management is key role in this company.
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <p className="text-xs sm:text-sm font-medium mb-1">
                    School (Year)
                  </p>
                  <p className="text-base md:text-lg font-medium">2009-2011</p>
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <p className="text-xs sm:text-sm font-medium mb-1">
                    Job Responsibility
                  </p>
                  <p className="text-base md:text-lg font-medium">
                    School of London, England
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
