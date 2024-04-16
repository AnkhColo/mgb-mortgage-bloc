import React, { useState } from "react";
import { ReactComponent as DownIcon } from "../icons/arrow-down.svg";
import { ReactComponent as ReturnIcon } from "../icons/header-return.svg";
import { ReactComponent as InvatedIcon } from "../icons/invated.svg";
import { ReactComponent as OverviewIcon } from "../icons/overview.svg";
import { ReactComponent as ChartsIcon } from "../icons/charts.svg";
import { ReactComponent as CreditDataIcon } from "../icons/credit-data.svg";
import { ReactComponent as TransactionsIcon } from "../icons/transactions.svg";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
import { ReactComponent as TickIcon } from "../icons/tick.svg";
import { ReactComponent as ComingSoonIcon } from "../icons/coming-soon.svg";

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
    <div className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-custom-black rounded-xl m-3 px-3 py-5 flex justify-center items-center font-arial object-cover">
      <div
        className=" fixed top-[-1] bottom-1 left-14 right-1 h-[91%] w-[90%] bg-gray-950 rounded-xl 
      m-3 px-3 py-5 flex justify-center items-center font-arial text-white"
      >
        {/* Section 1 - Header elements */}
        <div className="flex justify-start items-center  absolute top-3  left-11 w-full ">
          <button>
            <ReturnIcon className="mx-3" />
          </button>
          <p className=" text-white text-4xl ">Vladmir Isadev</p>
          <InvatedIcon className="mx-3" />
        </div>
        <button className=" flex items-center text-sm absolute top-3 right-4 bg-custom-red text-black rounded-md px-4 py-2">
          <DownIcon className="mr-2" />
          <div>Download</div>
        </button>
        <div className="absolute flex my-12 mx-4 py-2  top-3 left-0">
          {/* Buttons for section switching */}

          {/* Overview Button */}
          <div className="flex">
            <OverviewIcon />
            <button
              className={`px-10 mx-1 py-1 rounded-md bg-slate-800 hover:bg-purple-500  ${
                activeSection === "overview" ? "custom-purple text-black" : ""
              }`}
              onClick={() => handleButtonClick("overview")}
            >
              Overview
            </button>
          </div>

          {/* Charts Button */}
          <div className="flex ">
            <button
              className={`flex px-10 mx-1 py-1 rounded-md bg-slate-800 hover:bg-purple-500  ${
                activeSection === "charts" ? "custom-purple text-black" : ""
              }`}
              onClick={() => handleButtonClick("charts")}
            >
              <div>
                <ChartsIcon className="mx-3" />
              </div>
              <div>Charts</div>
            </button>
          </div>

          {/* Credit Data Button */}
          <div>
            <CreditDataIcon />
            <button
              className={`px-10 mx-1 py-1 rounded-md bg-slate-800 hover:bg-purple-500 ${
                activeSection === "creditData" ? "custom-purple text-black" : ""
              }`}
              onClick={() => handleButtonClick("creditData")}
            >
              Credit Data
            </button>
          </div>

          {/* Transactions Button */}
          <transactions>
            <TransactionsIcon />
            <button
              className={`px-10 mx-1 py-1 rounded-md bg-slate-800 hover:bg-purple-500  ${
                activeSection === "transactions"
                  ? "custom-purple text-black"
                  : ""
              }`}
              onClick={() => handleButtonClick("transactions")}
            >
              Transactions
            </button>
          </transactions>
        </div>

        {/* Render content based on active section */}
        {renderContent()}
      </div>
    </div>
  );
}
