import React, { useState } from "react";
import { ReactComponent as DownIcon } from "../icons/arrow-down.svg";
import { ReactComponent as ReturnIcon } from "../icons/header-return.svg";
// import { ReactComponent as InvatedIcon } from "../icons/invated.svg";
// import { ReactComponent as OverviewIcon } from "../icons/overview.svg";
// import { ReactComponent as ChartsIcon } from "../icons/charts.svg";
// import { ReactComponent as CreditDataIcon } from "../icons/credit-data.svg";
// import { ReactComponent as TransactionsIcon } from "../icons/transactions.svg";
// import { ReactComponent as LocationIcon } from "../icons/location.svg";
// import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";
// import { ReactComponent as TickIcon } from "../icons/tick.svg";
// import { ReactComponent as ComingSoonIcon } from "../icons/coming-soon.svg";

// import Overview from "../employeesComponents/Overview";
import OverviewTest from "../employeesComponents/OverviewTest";
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
        return <OverviewTest />;
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
    <div className=" fixed top-[40px]  left-[96px] bottom-1 max-w-[71rem] w-full max-h-[650px] h-full bg-custom-gray rounded-[14px] m-3  py-5 flex justify-center items-center">
      {/* Section 1 - Header elements */}
      <div className="absolute flex justify-between top-[20px] max-w-[95%] w-full h-[40px]  mx-auto">
        <div className="flex items-center ">
          <ReturnIcon className="mx-3" />
          <p className=" text-[32px] text-white w-[240px] h-[95%] items-center">
            Vladmir Isadev
          </p>
        </div>
        <div className=" flex items-center text-xs bg-custom-red text-black rounded-md px-4 py-2">
          <DownIcon className="mr-2" />
          <div>Download</div>
        </div>
      </div>

      {/* Buttons for section switching */}
      <div className="absolute flex text-xs justify-start top-[100px] max-w-[95%] w-full h-[32px]  mx-auto text-white">
        {/* Overview Button */}
        <overview className="flex">
          <button
            className={` flex items-center px-8 mx-1 py-2 rounded-md bg-slate-800 hover:bg-purple-500  ${
              activeSection === "overview" ? "custom-purple text-black" : ""
            }`}
            onClick={() => handleButtonClick("overview")}
          >
            {/* <OverviewIcon className="mr-4" /> */}
            <div>Overview</div>
          </button>
        </overview>

        {/* Charts Button */}
        <charts className="flex ">
          <button
            className={`flex items-center px-8  py-2 rounded-md bg-slate-800 hover:bg-purple-500  ${
              activeSection === "charts" ? "custom-purple text-black" : ""
            }`}
            onClick={() => handleButtonClick("charts")}
          >
            <div>{/* <ChartsIcon className="mr-4" /> */}</div>
            <div>Charts</div>
          </button>
        </charts>

        {/* Credit Data Button */}
        <creditdata>
          <button
            className={`flex items-center px-8 ml-1 h-full rounded-md bg-slate-800 hover:bg-purple-500 ${
              activeSection === "creditData" ? "custom-purple text-black" : ""
            }`}
            onClick={() => handleButtonClick("creditData")}
          >
            {/* <CreditDataIcon className="mr-4" /> */}
            <div>Credit Data</div>
          </button>
        </creditdata>

        {/* Transactions Button */}
        <transactions>
          <button
            className={`flex items-center px-8 mx-1 h-full rounded-md bg-slate-800 hover:bg-purple-500  ${
              activeSection === "transactions" ? "custom-purple text-black" : ""
            }`}
            onClick={() => handleButtonClick("transactions")}
          >
            {/* <TransactionsIcon className="mr-4" /> */}
            <div>Transactions</div>
          </button>
        </transactions>
      </div>

      {/* Render content based on active section */}
      {renderContent()}
    </div>
  );
}
