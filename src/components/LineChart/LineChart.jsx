/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './linechart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function LineChart() {
  ChartJS.defaults.color = 'white';
  ChartJS.defaults.font.size = 14;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April'];
  const calories = [2000, 1700, 1500, 3000];
  const data = {
    labels,
    datasets: [
      {
        label: 'Chart',
        data: calories,
        borderColor: 'rgb(255, 237, 99)',
        backgroundColor: 'rgb(255, 237, 99)',
      },
    ],
  };
  return (
    <Line options={options} data={data} />
  );
}

export default LineChart;
