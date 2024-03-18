import LineChart from '@/app/Atoms/LineChart';
import React from 'react';



function ThisMonthStatistic({dataBalance}) {
  const debit = dataBalance?.map(item => parseFloat(item.Debit) || 0); // Menggunakan parseFloat untuk mengkonversi string ke angka
  const credit = dataBalance?.map(item => parseFloat(item.Credit) || 0);
  const labels = dataBalance?.map(item => item.Date);

  console.log(debit,'ini data')
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
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      display: false
    },
    x: {
      grid: {    
        display: false,
      },
      border: {
        display: false,
      },
      display: false
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
      fill: true,
      tension: 0.4,
      borderColor: '#545BDC',
      pointRadius: 1

    },
    {
      label: 'Credit',
      data: credit,
      backgroundColor: '#a4a8ff',
      fill: true,
      tension: 0.5,
      borderColor: '#a4a8ff',
      pointRadius: 1
    },
  ],
}; 
  return <LineChart options={options} data={data} />;
}

export default ThisMonthStatistic;
