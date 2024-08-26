import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { type } from "@testing-library/user-event/dist/type";

const Charts = () => {
  return (
    <div className="absolute max-w-[1280px]  max-h-[480px] h-full top-[154px] mx-auto w-[95%] grid grid-cols-2 gap-4 ">
      <div>
        <div className="relative rounded-md my-1 bg-slate-800   h-[89px]">
          <div className="absolute top-2 left-2 text-blue-600">
            Total Expenditure
          </div>
          <div className="text-6xl absolute right-2 top-4 text-white ">
            £ 56,211.01
          </div>
        </div>

        <div className="relative rounded-md my-1 bg-slate-800   h-[380px]">
          <div className=" absolute top-[5%] left-[20%] w-[300px]  h-[170px]">
            <PieChart />
          </div>
          <div className="chartKeyComponent"></div>
        </div>
      </div>

      <div>
        <div className="relative rounded-md my-1 bg-slate-800  h-[89px]">
          <div className="absolute top-2 left-2 text-blue-600">
            Total Expenditure
          </div>
          <div className="text-6xl absolute right-2 top-4 text-white ">
            £ 56,211.01
          </div>
        </div>

        <div className="relative rounded-md my-1 bg-slate-800   h-[380px]">
          <div className=" absolute top-[5%] left-[20%] w-[300px]  h-[170px]">
            <PieChart />
          </div>
          <div className="chartKeyComponent"></div>
        </div>
      </div>
    </div>
  );
};

export default Charts;

const PieChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        label: ["Main Income", "Passive Income"],
        datasets: [
          {
            data: [1000, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} style={{ width: "50px", height: "50px" }} />
    </div>
  );
};
