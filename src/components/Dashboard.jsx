import React, { useState } from "react";

const Dashboard = () => {
  const [transactions, setTransactions] = useState("1,598");
  const [pendingApp, setPendingApp] = useState(0);
  const [completedApp, setCompletedApp] = useState(0);

  return (
    <div className="w-full  grid grid-flow-col grid-cols-3 px-8">
      <Board title={"Transactions"} value={transactions} />
      <Board title={"Applicants Pending"} value={pendingApp} />
      <Board title={"Applicants Completed"} value={completedApp} />
    </div>
  );
};

export default Dashboard;

const Board = ({ title, value }) => {
  return (
    <div className="relative top-[10%] rounded-md bg-gray-800 text-white p-6 px-[160px] py-[220px] mr-2">
      <div className="absolute top-2 text-sm left-2 text-blue-400">{title}</div>
      <div className="absolute bottom-2 right-2 text-7xl">{value}</div>
    </div>
  );
};
