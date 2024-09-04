import React, { useState } from "react";

const Dashboard = () => {
  const [transactions, setTransactions] = useState("1,598");
  const [pendingApp, setPendingApp] = useState(0);
  const [completedApp, setCompletedApp] = useState(0);

  return (
    <div className="absolute max-w-[95%] w-full max-h-[480px] h-full top-[154px] left-[20px] mx-auto  grid grid-cols-3 gap-2 ">
      <Board title={"Transactions"} value={transactions} />
      <Board title={"Applicants Pending"} value={pendingApp} />
      <Board title={"Applicants Completed"} value={completedApp} />
    </div>
  );
};

export default Dashboard;

const Board = ({ title, value }) => {
  return (
    <div
      className="relative  rounded-md text-custom-purple   hover:text-white  bg-transparent border-gray-800 
    border-2 hover:bg-gradient-to-tr from-custom-purple "
    >
      <div className="absolute top-2 text-xs left-2">{title}</div>
      <div className="absolute bottom-2 right-2 text-7xl ">{value}</div>
    </div>
  );
};
