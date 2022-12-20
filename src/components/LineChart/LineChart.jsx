/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
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

function LineChart({ active }) {
  const handleOnChaneLabal = (props) => {
    if (props === 'w') {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    } else if (props === 'm') {
      return ['', 'Dec', ''];
    } else if (props === 'y') {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  };
  const handleOnChaneData = (props) => {
    if (props === 'w') {
      return [10, 7, 8, 12, 5, 9, 10];
    } else if (props === 'm') {
      return ['', 37, ''];
    } else if (props === 'y') {
      return [20, 10, 10, 30, 50, 70, 80, 10, 20, 30, 40, 50];
    }
  };
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
  // const hours = [2, 1, 1, 3, 5, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = {
    labels: handleOnChaneLabal(active),
    datasets: [
      {
        label: 'Hour',
        data: handleOnChaneData(active),
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
