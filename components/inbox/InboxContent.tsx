"use client";
import {
  IconAlarm,
  IconCalendarTime,
  IconInbox,
  IconInfoOctagon,
  IconMail,
  IconMailOpened,
  IconMenu,
  IconMessageDots,
  IconPencil,
  IconPlus,
  IconReload,
  IconSearch,
  IconSend,
  IconSettings,
  IconStar,
  IconTag,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MessageRow from "./MessageRow";
import Options from "./Options";
import SelectOptions from "./SelectOptions";
const sidebarLinks = [
  {
    title: "Inbox",
    icon: <IconInbox size={20} />,
    url: "#",
  },
  {
    title: "Starred",
    icon: <IconStar size={20} />,
    url: "#",
  },
  {
    title: "Snoozed",
    icon: <IconAlarm size={20} />,
    url: "#",
  },
  {
    title: "Sent",
    icon: <IconSend size={20} />,
    url: "#",
  },
  {
    title: "Drafts",
    icon: <IconMailOpened size={20} />,
    url: "#",
  },
  {
    title: "Important",
    icon: <IconTag size={20} />,
    url: "#",
  },
  {
    title: "Chats",
    icon: <IconMessageDots size={20} />,
    url: "#",
  },
  {
    title: "Scheduled",
    icon: <IconCalendarTime size={20} />,
    url: "#",
  },
  {
    title: "All Mail",
    icon: <IconMail size={20} />,
    url: "#",
  },
  {
    title: "Spam",
    icon: <IconInfoOctagon size={20} />,
    url: "#",
  },
  {
    title: "Bin",
    icon: <IconTrash size={20} />,
    url: "#",
  },
  {
    title: "Manage Labels",
    icon: <IconSettings size={20} />,
    url: "#",
  },
  {
    title: "Create New Label",
    icon: <IconPlus size={20} />,
    url: "#",
  },
];
const messages = [
  {
    id: 1,
    sender: "Slack 5",
    title: "New Slack Message",
    desc: "You have received a new direct message in your Slack workspace...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 2,
    sender: "Discord 5",
    title: "Important Discord Notification",
    desc: "You've got an important notification in your Discord server...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 3,
    sender: "Friend 5",
    title: "Message from a Friend",
    desc: "A friend has sent you a message. Check it out...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 4,
    sender: "Babul",
    title: "New Message from Babul",
    desc: "You have a new message from your friend Babul. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 5,
    sender: "Hasan",
    title: "Message from Hasan",
    desc: "Hasan has sent you a message. Please take a look...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 6,
    sender: "Kamal",
    title: "New Message from Kamal",
    desc: "You've received a new message from Kamal. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 7,
    sender: "Rajan",
    title: "Message from Rajan",
    desc: "Rajan has sent you a message. Check it out...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 8,
    sender: "Kalam",
    title: "Important Message from Kalam",
    desc: "You've got an important message from Kalam. Please take a look...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 9,
    sender: "Saidul",
    title: "New Message from Saidul",
    desc: "You have a new message from Saidul. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 10,
    sender: "Asraful",
    title: "Message from Asraful",
    desc: "Asraful has sent you a message. Check it out...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 11,
    sender: "Nahid",
    title: "New Message from Nahid",
    desc: "You've received a new message from Nahid. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 12,
    sender: "Sumon",
    title: "Important Message from Sumon",
    desc: "You've got an important message from Sumon. Please take a look...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 13,
    sender: "Khokon",
    title: "Message from Khokon",
    desc: "Khokon has sent you a message. Check it out...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 14,
    sender: "Rafin",
    title: "New Message from Rafin",
    desc: "You have a new message from Rafin. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 15,
    sender: "Shimul",
    title: "Message from Shimul",
    desc: "Shimul has sent you a message. Please take a look...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 16,
    sender: "Elias",
    title: "Important Message from Elias",
    desc: "You've got an important message from Elias. Check it out...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 17,
    sender: "Baten",
    title: "New Message from Baten",
    desc: "You have a new message from Baten. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 18,
    sender: "Bahar",
    title: "Message from Bahar",
    desc: "Bahar has sent you a message. Please take a look...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 19,
    sender: "Bokul",
    title: "Important Message from Bokul",
    desc: "You've got an important message from Bokul. Check it out...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 20,
    sender: "Biden",
    title: "New Message from Biden",
    desc: "You have a new message from Biden. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 21,
    sender: "Baker",
    title: "Message from Baker",
    desc: "Baker has sent you a message. Check it out...",
    date: "10 Jul",
    isChecked: false,
  },
  {
    id: 22,
    sender: "Baset",
    title: "New Message from Baset",
    desc: "You've received a new message from Baset. Read it now...",
    date: "10 Jul",
    isChecked: false,
  },
];

const InboxContent = () => {
  const [messageData, setMessageData] = useState(messages);
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(true);
      }
      if (window.innerWidth < 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;

    if (name === "select-all") {
      let tempData = messageData.map((item) => {
        return { ...item, isChecked: checked };
      });
      setMessageData(tempData);
    } else {
      let tempData = messageData.map((item) =>
        item.sender.toString() == name ? { ...item, isChecked: checked } : item
      );
      setMessageData(tempData);
    }
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchResult = messages.filter(
      ({ title, desc, sender }) =>
        title.toLowerCase().includes(searchTerm) ||
        desc.toLowerCase().includes(searchTerm) ||
        sender.toLowerCase().includes(searchTerm)
    );
    setMessageData(searchResult);
  };
  const deleleteSelected = () => {
    setMessageData(messageData.filter((message) => !message.isChecked));
  };
  return (
    <div className="grid grid-cols-12 gap-3 sm:gap-4 xxxl:gap-6">
      <div
        onClick={() => setOpenMenu(false)}
        className={`absolute md:hidden md:invisible inset-0 z-[2] ${
          openMenu ? "block visible" : "hidden invisible"
        }`}></div>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="md:hidden flex items-center gap-2 min-w-max py-2 px-3 relative z-[3] rounded-lg bg-primary text-n0">
        <IconMenu className="shrink-0" /> <span>Menu</span>
      </button>
      <div
        className={`md:col-span-4 lg:col-span-3 absolute max-md:w-[250px] max-md:top-56 md:static duration-500 z-[3] ${
          openMenu
            ? "max-md:translate-x-0 max-md:visible max-md:opacity-100"
            : "ltr:max-md:-translate-x-[120%] rtl:max-md:translate-x-[120%] max-md:opacity-0 max-md:invisible"
        }`}>
        <div className="box px-2 md:p-4 xl:p-6 xxl:p-8 sticky top-20 md:top-[110px]">
          <Link
            href="#"
            className="flex text-primary items-center gap-3 justify-center rounded-xl px-10 pt-5 pb-5 bg-primary/5 dark:bg-bg3">
            {" "}
            <IconPencil size={20} /> <span>Compose</span>
          </Link>
          <div className="lg:mt-6 lg:pt-6 mt-4 pt-4 border-t border-primary/20 border-dashed flex flex-col gap-2">
            {sidebarLinks.map(({ icon, title, url }) => (
              <Link
                href={url}
                key={title}
                className="px-3 xl:px-6 py-2 xl:py-3 flex gap-3 rounded-lg  group items-center hover:bg-primary hover:text-n0 duration-300">
                <span className="text-primary group-hover:text-n0 shrink-0">
                  {icon}
                </span>
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9">
        <div className="box xl:p-8">
          <div className="flex flex-wrap justify-center min-[510px]:justify-between items-center mb-6 lg:mb-8 gap-4">
            <div className="py-2 xxl:py-3 px-6 rounded-2xl bg-primary/5 dark:bg-bg3 flex gap-6 items-center">
              <div className="flex items-center gap-1">
                <div className="flex items-center relative gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="select-all"
                    checked={
                      messageData.length > 1 &&
                      messageData.every((item) => item.isChecked == true)
                    }
                    onChange={handleSelect}
                    className="opacity-0 absolute h-6 w-6"
                  />
                  <div className="bg-n0 dark:bg-bg4 border gap-2 border-gray-200 group-hover:border-gray-400 rounded w-5 h-5 flex shrink-0 justify-center items-center focus-within:border-primary">
                    <svg
                      className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#363AED"
                          fillRule="nonzero">
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <SelectOptions />
              </div>
              <button onClick={() => window.location.reload()}>
                <IconReload />
              </button>
              <Options
                deleteSelected={deleleteSelected}
                checked={messageData.some((item) => item.isChecked)}
              />
            </div>
            <form className="bg-primary/5 dark:bg-bg3 gap-3 rounded-[30px] border border-transparent focus-within:border-primary px-6 xxl:px-8 items-center justify-between max-w-[250px] flex lg:max-w-[420px] w-full">
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                className="bg-transparent py-2 xxl:py-3 focus:outline-none w-full"
              />
              <IconSearch />
            </form>
          </div>
          <div className="w-full overflow-x-auto inbox-table">
            <table className="w-full whitespace-nowrap rounded-2xl">
              <tbody>
                {messageData.map((message) => (
                  <MessageRow
                    row={message}
                    key={message.id}
                    handleSelect={handleSelect}
                  />
                ))}
              </tbody>
            </table>
            {!messageData.length && (
              <div className="text-center py-10">
                <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
                  <div className="flex justify-center mb-5">
                    <IconSearch className="text-primary" size={70} />
                  </div>
                  <h3 className="h3 mb-3 lg:mb-6">No Message Found!</h3>
                  <p>
                    Looks like we couldn&nbsp;t find any matching results for
                    your search terms. Try other search terms.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxContent;
