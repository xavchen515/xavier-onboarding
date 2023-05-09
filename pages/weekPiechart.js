import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { piedata } from "./tracker";

const WeekPieChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: [
            "Dining Out",
            "Entertainment",
            "Groceries",
            "Personal Care",
            "Transportation",
            "Utilities",
            "Others",
          ],
          datasets: piedata,
          backgroundColor: [
            "blue",
            "red",
            "orange",
            "yellow",
            "green",
            "grey",
            "purple",
          ],
        }}
        height={500}
        width={750}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default WeekPieChart;
