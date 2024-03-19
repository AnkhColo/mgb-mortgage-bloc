import React from "react";

const Employee = () => {
  return (
    <div className="text-white">
      <div className="absolute top-[18%] left-[50px] rounded-md my-1 bg-slate-800 w-[1000px]  h-[89px]">
        checkbox
        {/* all these are rendered through state..each carried by state */}
        firstName lastName date email lender applicants ...
      </div>
    </div>
  );
};

export default Employee;

const EmployeeInfo = () => {
  return (
    <>
      <div>First Name</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};
