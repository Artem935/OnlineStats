// src/components/PieChart.jsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "../Style/MainPage.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  console.log(data)
  // Формируем данные для кругового графика
  const chartData = {
    labels: data.map(item => item.Event),
    datasets: [
      {
        label: 'Online Players',
        data: data.map(item => item.Impact),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(199, 199, 199, 0.7)',
        ],
        borderWidth: 0.4,
      },
    ],
  };
  const options = {

    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Позиционирование легенды слева
        align: 'center', // Выровнять легенду по началу
        labels: {
          color: 'rgb(191, 191, 191)', // Цвет текста легенды
          font: {
            size: 20, // Размер текста легенды (измените значение по вашему усмотрению)
          },
        },
      },
    }

  }
    
  return (
<Pie data={chartData} options={options} />
  );
};

export default PieChart;
