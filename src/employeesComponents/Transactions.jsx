import React, { useState } from "react";

const Transactions = () => {
  const [name, setName] = useState("GML 14945349");
  const [date, setDate] = useState("20-03-2024");
  const [reccuring, setReccuring] = useState("True");
  const [type, setType] = useState("Expense");
  const [account, setAccount] = useState("41370219 400122");
  const [amount, setAmount] = useState("-£522.39");
  const [category, setCategory] = useState("Mortgages");
  return (
    <div>
      <div className="text-white">
        <div className="absolute top-[18%] left-[50px] rounded-t-md  my-1 bg-slate-800 w-[1000px]  h-[10px] ">
          <div
            className="flex items-center my-2 bg-slate-800 text-gray-600  
          justify-evenly  rounded-md   w-[1000px]  h-[20px]"
          >
            <div className="mx-6 px-4">Name</div>
            <div className="mx-6 px-4">Date</div>
            <div className="mx-6 px-4">Reccuring</div>
            <div className="mx-6 px-4">Type</div>
            <div className="mx-6 px-4">Account</div>
            <div className="mx-6 px-4">Amount</div>
            <div className="mx-6 px-4">Category</div>
          </div>
          <TransactionsInfo
            name={name}
            date={date}
            reccuring={reccuring}
            type={type}
            account={account}
            amount={amount}
            category={category}
          />
          <TransactionsInfo
            name={name}
            date={date}
            reccuring={reccuring}
            type={type}
            account={account}
            amount={amount}
            category={category}
          />
          <TransactionsInfo
            name={name}
            date={date}
            reccuring={reccuring}
            type={type}
            account={account}
            amount={amount}
            category={category}
          />
          <TransactionsInfo
            name={name}
            date={date}
            reccuring={reccuring}
            type={type}
            account={account}
            amount={amount}
            category={category}
          />
          <TransactionsInfo
            name={name}
            date={date}
            reccuring={reccuring}
            type={type}
            account={account}
            amount={amount}
            category={category}
          />
          <TransactionsInfo
            name={name}
            date={date}
            reccuring={reccuring}
            type={type}
            account={account}
            amount={amount}
            category={category}
          />
          <TransactionsInfo
            name={name}
            date={date}
            reccuring={reccuring}
            type={type}
            account={account}
            amount={amount}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;

const TransactionsInfo = ({
  name,
  date,
  reccuring,
  type,
  account,
  amount,
  category,
}) => {
  return (
    <>
      <div className="flex justify-evenly items-center rounded-md my-1 bg-slate-800 w-[1000px]  h-[59px]  ">
        <input type="checkbox"></input>
        <div className="mx-2 px-4">{name}</div>
        <div className="mx-2 px-4">{date}</div>
        <div className="mx-2 px-4 text-gray-600 ">{reccuring}</div>
        <div className="mx-2 px-4 text-gray-600 ">{type}</div>
        <div className="mx-2 px-4">{account}</div>
        <div className="mx-2 px-4">{amount}</div>
        <div className="mx-2 px-4">{category}</div>
        <div className="mx-2 px-4">...</div>
      </div>
    </>
  );
};
