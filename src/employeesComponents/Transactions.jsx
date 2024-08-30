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
    <div className="absolute max-w-[1280px]  max-h-[480px] h-full top-[154px] mx-auto w-[95%] rounded-md overflow-y-scroll scroll-smooth ">
      <table className="w-full bg-slate-800  ">
        <thead className="sticky top-0">
          <tr className="text-gray-400 text-sm font-light bg-slate-700 ">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Reccuring</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Account</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">...</th>
          </tr>
        </thead>

        <tbody>
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
        </tbody>
      </table>
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
    <tr className="bg-slate-800 text-white text-sm h-[60px] rounded border-b border-b-black">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{date}</td>
      <td className="px-4 py-2 text-gray-400">{reccuring}</td>
      <td className="px-4 py-2 text-gray-400">{type}</td>
      <td className="px-4 py-2">{account}</td>
      <td className="px-4 py-2">{amount}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2">...</td>
    </tr>
  );
};
