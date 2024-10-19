import React from "react";
import {
  HomeIcon,
  CalenderIcon,
  SpeakerIcon,
  ReportsIcon,
  BellIcon,
  ChatBubbleIcon,
  DoubleChevronLeftIcon,
  SettingsIcon,
  AvatarIcon,
} from "../assets/Icons";
import avatar from "../assets/icons/avatar.svg";

const navElements = [
  {
    name: "Home",
    link: "/",
    isActive: true,
    icon: <HomeIcon />,
  },
  {
    name: "Events",
    link: "/",
    isActive: false,
    icon: <CalenderIcon />,
  },
  {
    name: "Speakers",
    link: "/",
    isActive: false,
    icon: <SpeakerIcon />,
  },
  {
    name: "Reports",
    link: "/",
    isActive: false,
    icon: <ReportsIcon />,
  },
];

const navElements2 = [
  {
    name: "Notifications",
    link: "/",
    isActive: false,
    icon: <BellIcon />,
    notification: 3,
  },
  {
    name: "Messages",
    link: "/",
    isActive: false,
    icon: <ChatBubbleIcon />,
  },
  {
    name: "Settings",
    link: "/",
    isActive: false,
    icon: <SettingsIcon />,
  },
  {
    name: "Collapse",
    link: "/",
    isActive: false,
    icon: <DoubleChevronLeftIcon />,
  },
];
const NavElementComponent = ({
  name,
  link,
  isActive,
  icon,
  key,
  notification,
}) => {
  return (
    <li>
      <li className={navElements.length - key !== 1 && "mb-2"}>
        <a
          href={link}
          className={`flex items-center relative gap-4 p-2 dark:text-select dark:rounded-sm transition-all duration-300 stroke-primaryselect ${
            isActive
              ? "text-primary bg-select dark:bg-primary dark:stroke-select stroke-primary"
              : "text-[#334155] stroke-primaryselect hover:stroke-primary hover:text-primary hover:bg-select hover:dark:stroke-[#FFF] hover:dark:bg-primary"
          }    `}
        >
          {icon}
          <span className={`text-sm ${isActive ? "" : ""}`}>{name}</span>
          {notification && (
            <div className="w-6 h-6 absolute right-2 top-[50%] translate-y-[-50%] rounded-full bg-[#F43F5E] text-[12px] text-[#FFF] flex items-center justify-center">
              {notification}
            </div>
          )}
        </a>
      </li>
    </li>
  );
};

const Aside = () => {
  return (
    <aside className="fixed inset-y-0 left-0 w-[240px] max-h-[1024px] dark:bg-primaryselectdark p-2 border-t-0 border-l-0 border-b-0 border-r border border-[#F1F5F9] dark:border-primarydark">
      <div className="p-2 mb-4">
        <div className="w-[64px] h-[32px] text-[#2563EB] text-[12px] border-[#2563EB] border-dashed border bg-[#93C5FD] font-semibold flex items-center justify-center">
          Full Logo
        </div>
      </div>
      <ul className="mb-2 py-2">
        {navElements.map((navElement, index) => {
          return (
            <NavElementComponent
              name={navElement.name}
              link={navElement.link}
              isActive={navElement.isActive}
              key={index}
              icon={navElement.icon}
            />
          );
        })}
      </ul>
      <ul className="py-2">
        {navElements2.map((navElement, index) => {
          return (
            <NavElementComponent
              name={navElement.name}
              link={navElement.link}
              isActive={navElement.isActive}
              key={index}
              icon={navElement.icon}
              notification={navElement.notification}
            />
          );
        })}
        <li className="mx-2">
          <button className="flex items-center gap-2 px-1">
            <div className="h-4 w-6 p-[2px] rounded-full bg-[#E2E8F0] dark:bg-primary transition-all duration-300 ease-out">
              <div className="relative w-3 h-3 rounded-full bg-[#FFF] transition-all duration-300 ease-out dark:translate-x-2"></div>
            </div>
            <span className="text-[#334155] dark:text-[#FFF] text-[12px]">
              Dark Mode
            </span>
          </button>
        </li>
        <li className="">
          <a href="" className="flex items-center gap-2 p-2">
            <img src={avatar} alt="" />
            <div>
              <p className="text-[#334155] dark:text-[#FFF] font-normal text-sm">
                Rudra Devi
              </p>
              <p className="text-[#64748B] dark:text-[#FFF] font-normal text-sm">
                rudra.devi@gmail.com
              </p>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
