"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PopulationChart({ data }: { data: any }) {
  const chartData = {
    labels: data.map((item: { year: number }) => item.year.toString()),
    datasets: [
      {
        label: "Population",
        data: data.map((item: { value: number }) => item.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Population Growth Over Time
      </h2>
      <Line data={chartData} />
    </div>
  );
}
