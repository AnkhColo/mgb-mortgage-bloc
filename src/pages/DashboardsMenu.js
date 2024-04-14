import { ReactComponent as PlusIcon } from "../icons/plus-circle.svg";
import { ReactComponent as PersonIcon } from "../icons/person-standing.svg";
import { ReactComponent as DashIcon } from "../icons/layout-grid.svg";
import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import { ReactComponent as SearchIcon } from "../icons/search.svg";

import React, { useState } from "react";
import Employee from "../components/Employee";
import Dashboard from "../components/Dashboard";

const DashboardsMenu = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "employee":
        return <Employee />;
      case "dashboard":
        return <Dashboard />;
      default:
        return null;
    }
  };

  return (
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-slate-950 rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial">
      <p className="text-3xl text-white absolute top-3 left-11">Lender Admin</p>
      <button className=" flex items-center text-sm absolute top-3 right-4 bg-custom-red rounded-md px-4 py-2">
        <PlusIcon className="mr-2" />
        <div>Invite Employee</div>
      </button>
      <div className="absolute flex my-12 mx-7 p-2 top-3 left-3 text-white">
        <button
          className={`px-10 mx-1 py-1 rounded-md bg-slate-800 hover:bg-purple-300  ${
            activeSection === "dashboard" ? "custom-purple" : ""
          }`}
          onClick={() => handleButtonClick("dashboard")}
        >
          <div className="flex justify-center items-center">
            <div className="px-1">
              <DashIcon size={2} />
            </div>
            <div
              className={`px-1 ${
                activeSection === "dashboard" ? "text-black" : "text-white"
              } `}
            >
              Dashboard
            </div>
          </div>
        </button>
        <button
          className={`px-10 mx-1 py-1 rounded-md bg-slate-800 hover:bg-purple-300  ${
            activeSection === "employee" ? "custom-purple" : ""
          }`}
          onClick={() => handleButtonClick("employee")}
        >
          <div className="flex justify-center items-center">
            <div className="px-1">
              <PersonIcon />
            </div>
            <div
              className={`px-1 ${
                activeSection === "employee" ? "text-black" : "text-white"
              } `}
            >
              Employees
            </div>
          </div>
        </button>
      </div>
      {activeSection === "employee" ? (
        <div className="absolute flex my-12 mx-7 p-2 top-3 right-3 text-white">
          <div className="px-4 mx-1 py-1 text-sm flex justify-center items-center rounded-md bg-slate-800">
            <div className="px-1">
              <TrashIcon />
            </div>
            <div>Reset User Password</div>
          </div>
          <div className="px-8 mx-1 py-1 rounded-md bg-slate-800 text-gray-500 text-md flex justify-center items-start">
            <input placeholder="Search" className="bg-transparent" />
            <SearchIcon />
          </div>
        </div>
      ) : (
        "null"
      )
      }
      <div>{renderContent()}</div>
    </div>
  );
};

export default DashboardsMenu;
