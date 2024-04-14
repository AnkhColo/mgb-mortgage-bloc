import React, { useState } from "react";

const CreditData = () => {
  const [lenderName, setLenderName] = useState("Barcleys");
  const [accountNumber, setAccountNumber] = useState(" 92 36 75 21");
  const [accountType, setAccountType] = useState("Mortgage");
  const [balanceOutstanding, setBalanceOutstanding] =
    useState("£ 3,301,693.00");
  const [monthlyPayment, setMonthlyPayment] = useState("£ 3.306,21");
  const [originalTerm, setOriginalTerm] = useState("276");
  const [missedPayment, setMissedPayment] = useState("0");
  const [dateMissed, setDateMissed] = useState("-");
  return (
    <>
      <div className="absolute top-[120px] left-2 right-2">
        <div className="flex bg-slate-800 my-1">
          <CreditBox header={"Lender"} value={lenderName} />
          <CreditBox header={"Account Number"} value={accountNumber} />
          <CreditBox header={"Account Type"} value={accountType} />
          <CreditBox
            header={"Balance Outstanding"}
            value={balanceOutstanding}
          />
          <CreditBox header={"Monthly Payment"} value={monthlyPayment} />
          <CreditBox header={"Original Term"} value={originalTerm} />
          <CreditBox header={"Missed Payment"} value={missedPayment} />
          <CreditBox header={"Date Missed"} value={dateMissed} />
        </div>
        <div className="flex bg-slate-800 my-1">
          <CreditBox header={"Lender"} value={lenderName} />
          <CreditBox header={"Account Number"} value={accountNumber} />
          <CreditBox header={"Account Type"} value={accountType} />
          <CreditBox
            header={"Balance Outstanding"}
            value={balanceOutstanding}
          />
          <CreditBox header={"Monthly Payment"} value={monthlyPayment} />
          <CreditBox header={"Original Term"} value={originalTerm} />
          <CreditBox header={"Missed Payment"} value={missedPayment} />
          <CreditBox header={"Date Missed"} value={dateMissed} />
        </div>
        <div className="flex bg-slate-800 my-1">
          <CreditBox header={"Lender"} value={lenderName} />
          <CreditBox header={"Account Number"} value={accountNumber} />
          <CreditBox header={"Account Type"} value={accountType} />
          <CreditBox
            header={"Balance Outstanding"}
            value={balanceOutstanding}
          />
          <CreditBox header={"Monthly Payment"} value={monthlyPayment} />
          <CreditBox header={"Original Term"} value={originalTerm} />
          <CreditBox header={"Missed Payment"} value={missedPayment} />
          <CreditBox header={"Date Missed"} value={dateMissed} />
        </div>
        <div className="flex bg-slate-800 my-1">
          <CreditBox header={"Lender"} value={lenderName} />
          <CreditBox header={"Account Number"} value={accountNumber} />
          <CreditBox header={"Account Type"} value={accountType} />
          <CreditBox
            header={"Balance Outstanding"}
            value={balanceOutstanding}
          />
          <CreditBox header={"Monthly Payment"} value={monthlyPayment} />
          <CreditBox header={"Original Term"} value={originalTerm} />
          <CreditBox header={"Missed Payment"} value={missedPayment} />
          <CreditBox header={"Date Missed"} value={dateMissed} />
        </div>
      </div>
    </>
  );
};

export default CreditData;

const CreditBox = ({ header, value }) => {
  return (
    <>
      <div className=" relative  text-sm rounded bg-slate-800 custom-purple-hover mx-0.5 my-2">
        <div className="mx-4 py-2 px-2 ">{header}</div>
        <div className="mx-4 py-2 px-2 ">{value}</div>
      </div>
    </>
  );
};
