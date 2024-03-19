import { ReactComponent as PlusIcon } from "../icons/plus-circle.svg";
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
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-900 rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial">
      <p className="text-3xl text-white absolute top-3 left-11">Lender Admin</p>
      <button className=" flex items-center text-sm absolute top-3 right-4 bg-red-600 rounded-md px-4 py-2">
        <PlusIcon className="mr-2" />
        <div>Invite Employee</div>
      </button>
      <div className="absolute flex my-12 mx-7 p-2 top-3 left-1 text-white">
        <button
          className="px-10 mx-1 py-1 rounded-md bg-slate-800"
          onClick={() => handleButtonClick("dashboard")}
        >
          Dashboard
        </button>
        <button
          className="px-10 mx-1 py-1 rounded-md bg-slate-800"
          onClick={() => handleButtonClick("employee")}
        >
          Employees
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default DashboardsMenu;
