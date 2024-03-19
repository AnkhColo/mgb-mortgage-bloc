import React, { useState } from "react";
import { ReactComponent as PlusIcon } from "../icons/plus-circle.svg";

import Overview from "../employeesComponents/Overview";
import Charts from "../employeesComponents/Charts";
import CreditData from "../employeesComponents/CreditData";
import Transactions from "../employeesComponents/Transactions";

export default function EmployeesMenu() {
  const [activeSection, setActiveSection] = useState("overview"); // Initial active section

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "charts":
        return <Charts />;
      case "creditData":
        return <CreditData />;
      case "transactions":
        return <Transactions />;
      default:
        return null;
    }
  };

  return (
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-800 rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial object-cover">
      <div
        className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-900 rounded-xl 
      m-3 px-3 py-5 flex justify-center items-center font-arial text-white"
      >
        {/* Section 1 - Header elements */}
        <p className="text-3xl text-white absolute top-3 left-11">
          Vladmir Isadev
        </p>
        <button className=" flex items-center text-sm absolute top-3 right-4 bg-red-600 text-black rounded-md px-4 py-2">
          <PlusIcon className="mr-2" />
          <div>Download</div>
        </button>
        <div className="absolute flex my-12 mx-4 py-2  top-3 left-0">
          {/* Buttons for section switching */}
          <button
            className={`px-10 mx-1 py-1 rounded-md bg-slate-800 ${
              activeSection === "overview" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("overview")}
          >
            Overview
          </button>
          <button
            className={`px-10 mx-1 py-1 rounded-md bg-slate-800 ${
              activeSection === "charts" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("charts")}
          >
            Charts
          </button>
          <button
            className={`px-10 mx-1 py-1 rounded-md bg-slate-800 ${
              activeSection === "creditData" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleButtonClick("creditData")}
          >
            Credit Data
          </button>
          <button
            className={`px-10 mx-1 py-1 rounded-md bg-slate-800 ${
              activeSection === "transactions" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => handleButtonClick("transactions")}
          >
            Transactions
          </button>
        </div>

        {/* Render content based on active section */}
        {renderContent()}
      </div>
    </div>
  );
}
