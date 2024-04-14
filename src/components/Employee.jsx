import React, { useState } from "react";
import { ReactComponent as DotIcon } from "../icons/dotdotdot.svg";

const Employee = () => {
  const [firstName, setFirstName] = useState("Colin");
  const [lastName, setLastName] = useState("Munyori");
  const [date, setDate] = useState("20-03-2024");
  const [email, setEmail] = useState("ankh.collo@gmail.com");
  const [lender, setLender] = useState("Lender47");
  const [applicants, setApplicants] = useState("Applicant47");
  return (
    <div className="text-white">
      <div className="absolute top-[18%] left-[50px] rounded-t-md  my-1 bg-slate-800 w-full  h-[10px] ">
        <div className="flex items-center justify-between my-2 bg-slate-800  text-gray-600  ">
          <div className="ml-[73px]">First Name</div>
          <div className="ml-0 ">Last Name</div>
          <div className="mr-6 ">Date</div>
          <div className="mr-6 ">Email</div>
          <div className="mr-6 ">Lender</div>
          <div className="mr-6 ">Applicants</div>
          <div className="mr-6  ">
            <DotIcon />
          </div>
        </div>
        <EmployeeInfo
          firstName={firstName}
          lastName={lastName}
          date={date}
          email={email}
          lender={lender}
          applicants={applicants}
        />
        {/* <EmployeeInfo
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
        /> */}
      </div>
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
    <>
      <div className="flex justify-between items-center rounded-md my-1 bg-slate-800 w-[1000px]  h-[59px]  ">
        <div className=" relative bg-transparent h-2 w-2 p-2 border-[1px] ml-4 border-gray-500 rounded-md  ">
          {/* <input type="checkbox" className="absolute top-0 left-0"></input> */}
        </div>
        <div className="mx-4 ">{firstName}</div>
        <div className="mx-4 px-2">{lastName}</div>
        <div className="mx-4 px-2 text-gray-600 ">{date}</div>
        <div className="mx-4 px-2 text-gray-600 ">{email}</div>
        <div className="mx-4 ">{lender}</div>
        <div className="mx-4 ">{applicants}</div>
        <div className="mx-4 ">
          <DotIcon />
        </div>
      </div>
    </>
  );
};
