// src/components/EventChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Регистрация компонентов chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EventChart = ({ data }) => {
  if (!data.length) {
    return <p>Loading...</p>;
  }

  const labels = data.map((row) => row.Date);
  const onlinePlayers = data.map((row) => parseInt(row.OnlinePlayers));
  const events = data.map((row) => row.Event);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Online Players',
        data: onlinePlayers,
        fill: false,
        borderColor: 'rgb(230, 196, 0)',
        tension: 0.4,
        pointBackgroundColor: events.map(event => event ? 'red' : 'rgb(191, 191, 191)'), // Изменение цвета точки
        pointHoverRadius: 10, // Радиус точки при наведении
        pointRadius: events.map(event => event ? 5 : 3) // Изменение размера точки для событий
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Цвет текста легенды
          font: {
            size: 22, // Размер текста легенды (измените значение по вашему усмотрению)
          },
        },
       
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const event = events[context.dataIndex];
            return event ? `Players: ${context.raw}, Event: ${event}` : `Players: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(191, 191, 191)', // Цвет текста меток оси X
          font: {
            size: 16, // Размер текста легенды (измените значение по вашему усмотрению)
          },
        },
        title: {
          display: true,
          text: 'Date',
          color: 'white', // Цвет текста заголовка оси X
          font: {
            size: 20, // Размер текста легенды (измените значение по вашему усмотрению)
          },
        },
      },
      y: {
        ticks: {
          color: 'rgb(191, 191, 191)', // Цвет текста меток оси Y
          font: {
            size: 16, // Размер текста легенды (измените значение по вашему усмотрению)
          },
        },
        title: {
          display: true,
          text: 'Players',
          color: 'white', // Цвет текста заголовка оси Y
          font: {
            size: 20, // Размер текста легенды (измените значение по вашему усмотрению)
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default EventChart;
