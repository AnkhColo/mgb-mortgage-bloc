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
    <>
      <div className="flex absolute top-[18%] left-[50px] my-8 bg-custom-dark-gray text-gray-600 text-sm p-2 rounded-md ">
        <div className="  bg-transparent h-2 w-2 p-2 border-[1px] ml-4 border-gray-500 rounded-md  " />
        <div className="ml-12">First Name</div>
        <div className="ml-10">Last Name</div>
        <div className="ml-16">Date</div>
        <div className="ml-32">Email</div>
        <div className="ml-52">Lender</div>
        <div className="ml-24">Applicants</div>
        <div className="ml-20">
          <DotIcon />
        </div>
      </div>

      <div className="absolute text-white top-[30%] left-11 rounded-t-md  mt-1 bg-custom-dark-gray w-[92.5%]  h-[72%]  overflow-y-scroll scroll-smooth ">
        <div className="">
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
        </div>
      </div>
    </>
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
      <div className="flex justify-between items-center  bg-custom-gray w-[100%]  h-[49px] my-1  ">
        <div className=" relative bg-transparent h-2 w-2 p-2 border-[1px] ml-4 border-gray-500 rounded-md  ">
          {/* <input type="checkbox" className="absolute top-0 left-0"></input> */}
        </div>
        <div className="mx-4 ">{firstName}</div>
        <div className="mx-4 px-2">{lastName}</div>
        <div className="mx-4 px-2 text-gray-600 ">{date}</div>
        <div className="mx-4 px-2 text-gray-600 ">{email}</div>
        <div className="mx-6 ">{lender}</div>
        <div className="mx-4 ">{applicants}</div>
        <div className="mx-4 ">
          <DotIcon />
        </div>
      </div>
    </>
  );
};
