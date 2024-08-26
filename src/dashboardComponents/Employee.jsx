import React, { useState } from "react";
import { ReactComponent as DotIcon } from "../icons/chevron-left-dot.svg";

const Employee = () => {
  const [firstName, setFirstName] = useState("Colin");
  const [lastName, setLastName] = useState("Munyori");
  const [date, setDate] = useState("20-03-2024");
  const [email, setEmail] = useState("ankh.collo@gmail.com");
  const [lender, setLender] = useState("Lender47");
  const [applicants, setApplicants] = useState("Applicant47");
  return (
    <div className="absolute text-white max-w-[1280px]  max-h-[480px] h-full top-[154px] left-[20px] overflow-scroll  w-[95%] rounded-md">
      <table className="w-full bg-slate-800 text-sm">
        <thead className="border-b border-black bg-gray-900">
          <tr>
            <th className="px-4 py-2 text-left font-light text-slate-400">
              First Name
            </th>
            <th className="px-4 py-2 text-left font-light text-slate-400">
              Last Name
            </th>
            <th className="px-4 py-2 text-left font-light text-slate-400">
              Date
            </th>
            <th className="px-4 py-2 text-left font-light text-slate-400">
              Email
            </th>
            <th className="px-4 py-2 text-left font-light text-slate-400">
              Lender
            </th>
            <th className="px-4 py-2 text-left font-light text-slate-400">
              Applicants
            </th>
            <th className="px-4 py-2 text-left font-light text-slate-400">
              <DotIcon />
            </th>
          </tr>
        </thead>

        <tbody className="overflow-y-scroll scroll-smooth">
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
          <EmployeeInfo
            firstName={firstName}
            lastName={lastName}
            date={date}
            email={email}
            lender={lender}
            applicants={applicants}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Employee;

const EmployeeInfo = ({
  firstName,
  lastName,
  date,
  email,
  lender,
  applicants,
}) => {
  return (
    <tr className=" h-[55px] border-b border-black  ">
      {/* <td className=" relative bg-transparent h-2 w-2 p-2 border-[1px] ml-4 border-gray-500 rounded-md  ">
        <input type="checkbox" className="absolute top-0 left-0"></input>
      </td> */}
      <td className="px-4 ">{firstName}</td>
      <td className="px-4">{lastName}</td>
      <td className="px-4 text-gray-600 ">{date}</td>
      <td className="px-4 text-gray-600 ">{email}</td>
      <td className="px-4 ">{lender}</td>
      <td className="px-4 ">{applicants}</td>
      <td className="px-4 ">
        <DotIcon />
      </td>
    </tr>
  );
};
