import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = ({ options, data }) => {
  return <Line
  width={40}
  height={25}
  options={options} 
  data={data} />;
};

export default LineChart;
