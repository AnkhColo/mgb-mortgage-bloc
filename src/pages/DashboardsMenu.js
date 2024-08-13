import { ReactComponent as PlusIcon } from "../icons/plus-circle.svg";
import { ReactComponent as PersonIcon } from "../icons/person-standing.svg";
import { ReactComponent as DashIcon } from "../icons/layout-grid.svg";
// import { ReactComponent as DashIconHover } from "../icons/dash-hover.svg";
// import { ReactComponent as TrashIcon } from "../icons/trash.svg";
// import { ReactComponent as SearchIcon } from ".../icons/search.svg";

import React, { useState } from "react";
import Employee from "../dashboardComponents/Employee";
import Dashboard from "../dashboardComponents/Dashboard";

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
    <div className="fixed top-[40px] bottom-1 left-[96px] max-w-[1150px] w-full max-h-[680px] bg-custom-gray rounded-[14px] m-3  mt-6 pb-5 flex justify-center items-center ">
      <div className="absolute flex justify-between top-[32px] max-w-[95%] w-full h-[48px]  mx-auto ">
        <p className="text-[34px] text-white w-[240px]  items-center ">
          Lender Admin
        </p>
        <div className="w-[193px] flex bg-custom-red rounded-md justify-center items-center">
          <div className="absolute flex justify-center items-center">
            <PlusIcon className="mr-2" />
            <div>Invite Employee</div>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-start top-[100px] max-w-[95%] w-full h-[48px]  mx-auto ">
        <button
          className={`px-10 mx-1 py-2 rounded-md bg-slate-800 hover:bg-purple-300  ${
            activeSection === "dashboard" ? "custom-purple" : ""
          }`}
          onClick={() => handleButtonClick("dashboard")}
        >
          <div className="flex justify-center items-center">
            <div className="px-1 ">
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
          className={`px-10 mx-1 py-2 rounded-md bg-slate-800 hover:bg-purple-300  ${
            activeSection === "employee" ? "custom-purple" : ""
          }`}
          onClick={() => handleButtonClick("employee")}
        >
          <div className="flex justify-center items-center">
            <div className="px-1">
              <PersonIcon />
            </div>
            <div
              className={`px-1  ${
                activeSection === "employee" ? "text-black" : "text-white"
              } `}
            >
              Employees
            </div>
          </div>
        </button>
        {activeSection === "employee" ? (
          <div className="absolute top-0 right-0 flex  mx-0 p-2 text-sm text-white">
            <div className="px-4 mx-1 py-2 text-sm flex justify-center items-center rounded-md bg-slate-800">
              <div className="px-1">{/* <TrashIcon /> */}</div>
              <div>Reset User Password</div>
            </div>
            <div className="px-8 mx-1 py-2 rounded-md bg-slate-800 text-gray-500 text-md flex justify-between items-start">
              <input placeholder="Search" className="bg-transparent" />
              {/* <SearchIcon className="mt-1 " /> */}
            </div>
          </div>
        ) : null}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default DashboardsMenu;
