"use client";
import {
  IconCircleKey,
  IconNotes,
  IconSettings,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import ChangePassword from "./ChangePassword";
import MyAccount from "./MyAccount";
import PersonalDetails from "./PersonalDetails";
import Profile from "./Profile";
import Settings from "./Settings";
const duration = 500;

const defaultStyle: React.CSSProperties = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
};
interface TransitionStyles {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
}
const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
const tabData = [
  {
    id: 1,
    name: "Profile",
    icon: <IconUser />,
    content: <Profile />,
  },
  {
    id: 2,
    name: "Personal Details",
    icon: <IconNotes />,
    content: <PersonalDetails />,
  },
  {
    id: 3,
    name: "My Account",
    icon: <IconUserCircle />,
    content: <MyAccount />,
  },
  {
    id: 4,
    name: "Change Password",
    icon: <IconCircleKey />,
    content: <ChangePassword />,
  },
  {
    id: 5,
    name: "Settings",
    icon: <IconSettings />,
    content: <Settings />,
  },
];

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const nodeRef = useRef(null);
  return (
    <div>
      <div className="box mb-4 xxxl:mb-6 flex flex-wrap gap-3 md:gap-4 xxxl:gap-6">
        {tabData.map(({ id, name, icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex px-4 items-center gap-3 rounded-2xl py-2 md:py-3 font-medium lg:px-6 ${
              activeTab == id
                ? "bg-primary text-n0"
                : "bg-primary/5 text-n700 dark:bg-bg3 dark:text-n0"
            }`}>
            <span className={`${id == activeTab ? "text-n0" : "text-primary"}`}>
              {icon}
            </span>
            <span>{name}</span>
          </button>
        ))}
      </div>
      <div>
        {tabData.map(({ id, content }) => (
          <Transition
            nodeRef={nodeRef}
            in={activeTab == id}
            timeout={duration}
            key={id}>
            {(state) => (
              <div
                ref={nodeRef}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state as keyof TransitionStyles],
                }}>
                {activeTab == id && content}
              </div>
            )}
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default EditProfile;
