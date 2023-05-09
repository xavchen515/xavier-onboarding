import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { weekdata } from "./tracker";

const WeekChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Dining Out",
            "Entertainment",
            "Groceries",
            "Personal Care",
            "Transportation",
            "Utilities",
            "Others"
          ],
          datasets: weekdata
        }}
        height={500}
        width={750}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default WeekChart;
