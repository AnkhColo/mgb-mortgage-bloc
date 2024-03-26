import React, { useState } from "react";

const Employee = () => {
  const [firstName, setFirstName] = useState("Colin");
  const [lastName, setLastName] = useState("Munyori");
  const [date, setDate] = useState("20-03-2024");
  const [email, setEmail] = useState("ankh.collo@gmail.com");
  const [lender, setLender] = useState("Lender47");
  const [applicants, setApplicants] = useState("Applicant47");
  return (
    <div className="text-white">
      <div className="absolute top-[18%] left-[50px] rounded-t-md  my-1 bg-slate-800 w-[1000px]  h-[10px] ">
        <div className="flex items-center my-2 bg-slate-800 w-[900px] text-gray-600  ">
          <div className="mx-2 px-6">First Name</div>
          <div className="mx-2 px-6">Last Name</div>
          <div className="mx-2 px-6">Date</div>
          <div className="mx-2 px-6">Email</div>
          <div className="mx-2 px-6">Lender</div>
          <div className="mx-2 px-6">Applicants</div>
          <div className="mx-2 px-6">...</div>
        </div>
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
      <div className="flex justify-center items-center rounded-md my-1 bg-slate-800 w-[1000px]  h-[59px]  ">
        <input type="checkbox"></input>
        <div className="mx-4 px-6">{firstName}</div>
        <div className="mx-4 px-2">{lastName}</div>
        <div className="mx-4 px-2 text-gray-600 ">{date}</div>
        <div className="mx-4 px-2 text-gray-600 ">{email}</div>
        <div className="mx-4 px-6">{lender}</div>
        <div className="mx-4 px-6">{applicants}</div>
        <div className="mx-4 px-6">...</div>
      </div>
    </>
  );
};
