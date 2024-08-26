import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as MenuIcon } from "./icons/dash-menu.svg";
import { ReactComponent as LogoutIcon } from "./icons/upload.svg";
import { ReactComponent as EmIcon } from "./icons/users.svg";
import { ReactComponent as DownIcon } from "./icons/chevron-down.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="absolute max-w-[90px]  w-full flex  top-4 right-[160px] text-gray-500 text-xs">
        <div className="mr-[8px]">muriithicolin98@gmail.com...</div>
        <div>
          <DownIcon />
        </div>
      </div>
      <div
        className="fixed top-0 left-0 w-[90px]  h-screen p-1
      flex flex-col  text-secondary shadow-lg "
      >
        <div className="my-2">
          <Link to="/">
            <SidebarIcon icon={<HomeIcon size={30} />} />
          </Link>
        </div>
        <div className="my-6">
          <div className="my-2">
            <Link to="/">
              <SidebarIcon icon={<MenuIcon className="my-2 " size={30} />} />
            </Link>
          </div>
          <Link to="/employees">
            <SidebarIcon icon={<EmIcon className="my-2" size={30} />} />
          </Link>
        </div>
      </div>
      <div className="fixed bottom-3 left-0 mx-auto px-4 my-2 text-gray-600 font-arial text-xs ">
        <Link to="/login">
          <SidebarIcon
            icon={<LogoutIcon className="my-2" size={22} text={"Logout"} />}
          />
        </Link>
        <p className="">Log Out</p>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};

export default Sidebar;
