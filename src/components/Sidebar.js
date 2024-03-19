import React from "react";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { ReactComponent as ButsIcon } from "../icons/buts.svg";
import { ReactComponent as LogoutIcon } from "../icons/upload.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-3 right-12 text-gray-500 text-sm">
        muriithicolin98@gmail...
      </div>
      <div
        className="fixed top-0 left-0 w-16 m-0 h-screen p-1
    flex flex-col bg-black text-secondary shadow-lg"
      >
        <SidebarIcon icon={<HomeIcon size={30} />} />
        <Link to="/">
          <SidebarIcon icon={<MenuIcon size={30} />} />
        </Link>
        <Link to="/employees">
          <SidebarIcon icon={<ButsIcon size={30} />} />
        </Link>
      </div>
      <div className="fixed bottom-3 left-0 mx-auto px-4 my-2 text-gray-600 font-arial text-xs ">
        <SidebarIcon icon={<LogoutIcon size={22} text={"Logout"} />} />
        <p className="">Log Out</p>
      </div>
    </>
  );
};

const SidebarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};

export default Sidebar;
