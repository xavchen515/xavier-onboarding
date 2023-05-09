import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { monthdata } from "./tracker";

const VulnChart = () => {
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
          datasets: monthdata // Use imported data here
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

export default VulnChart;
