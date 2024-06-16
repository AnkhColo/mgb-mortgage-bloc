import React, { useState } from "react";

const Dashboard = () => {
  const [transactions, setTransactions] = useState("1,598");
  const [pendingApp, setPendingApp] = useState(0);
  const [completedApp, setCompletedApp] = useState(0);

  return (
    <div className="w-[1100px] grid grid-flow-col grid-cols-3">
      <Board title={"Transactions"} value={transactions} />
      <Board title={"Applicants Pending"} value={pendingApp} />
      <Board title={"Applicants Completed"} value={completedApp} />
    </div>
  );
};

export default Dashboard;

const Board = ({ title, value }) => {
  return (
    <div className="relative top-[10%] rounded-md text-custom-purple  hover:text-white  bg-transparent border-gray-800 border-2 hover:bg-gradient-to-tr from-custom-purple   p-6 px-[160px] py-[220px] mr-2">
      <div className="absolute top-2 text-sm left-2">{title}</div>
      <div className="absolute bottom-2 right-2 text-7xl    ">{value}</div>
    </div>
  );
};
