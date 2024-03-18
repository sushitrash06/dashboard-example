import BarChart from '@/app/Atoms/BarChart';
import React from 'react';



function BalanceStatistic({dataBalance}) {
const labels = dataBalance?.map(item => item.month);
const debit = dataBalance?.map(item => item.debit);
const credit = dataBalance?.map(item => item.credit);  
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 2500
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {    
        display: false,
      },
      border: {
        display: false,
      },
    },
  }
};

const data = {
  labels,
  datasets: [
    {
      label: 'Debit',
      data: debit,
      backgroundColor: '#545BDC',
    },
    {
      label: 'Credit',
      data: credit,
      backgroundColor: '#a4a8ff',
    },
  ],
}; 
  return <BarChart options={options} data={data} />;
}

export default BalanceStatistic;
