import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as MenuIcon } from "../icons/dash-menu.svg";
import { ReactComponent as LogoutIcon } from "../icons/upload.svg";
import { ReactComponent as EmIcon } from "../icons/users.svg";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-3 right-12 text-gray-500 text-sm">
        muriithicolin98@gmail...ˇ
      </div>
      <div
        className="fixed top-0 left-0 w-16  h-screen p-1
    flex flex-col bg-rgba(9, 8, 8, 0.978) text-secondary shadow-lg"
      >
        <div className="my-2">
          <SidebarIcon icon={<HomeIcon size={30} />} />
        </div>
        <div className="my-6">
          <div className="my-2">
            <Link to="/">
              <SidebarIcon icon={<MenuIcon className="my-2" size={30} />} />
            </Link>
          </div>
          <Link to="/employees">
            <SidebarIcon icon={<EmIcon className="my-2" size={30} />} />
          </Link>
        </div>
      </div>
      <div className="fixed bottom-3 left-0 mx-auto px-4 my-2 text-gray-600 font-arial text-xs ">
        <SidebarIcon
          icon={<LogoutIcon className="my-2" size={22} text={"Logout"} />}
        />
        <p className="">Log Out</p>
      </div>
    </>
  );
};

const SidebarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};

export default Sidebar;
