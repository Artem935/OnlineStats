// src/App.js

import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Импорт именованного экспорта напрямую
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Papa from 'papaparse';
import { parseISO, isAfter, isBefore } from 'date-fns';
import DateRangePicker from '../components/DateRangePicker';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import EventChart from '../components/EventChart';
import "../Style/MainPage.css";
import csvData from "../data/Online_Gaming_Data.csv";
import csvData1 from "../data/significant_events.csv";
import PieChart from '../components/PieChar';

const MainPage = () => {
  const [cookies, , removeCookie] = useCookies(['token']); 
  const [eventData, setEventData] = useState([]);
  const [eventData1, setEventData1] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState(new Date('2018-01-01'));
  const [endDate, setEndDate] = useState(new Date('2024-12-31'));
  const username = jwtDecode(cookies.token).username
  
  const navigate = useNavigate();
  console.log(username)
  useEffect(() => {
    if (cookies.token) {
      console.log('Decoded JWT Token:', jwtDecode(cookies.token));
    } else {
      console.log('No token found in cookies.');
      navigate('/login');
    }

    Papa.parse(csvData, {
      download: true,
      header: true,
      complete: (results) => {
        console.log(results.data);
        setEventData(results.data);
      },
    });
    Papa.parse(csvData1, {
      download: true,
      header: true,
      complete: (results) => {
        console.log(results.data);
        setEventData1(results.data);
      },
    });
  }, [cookies, navigate]);

  useEffect(() => {
    const filtered = eventData.filter((row) => {
      if (!row.Date) return false; // Проверка на наличие значения даты
      const date = parseISO(row.Date);
      return isAfter(date, startDate) && isBefore(date, endDate);
    });
    setFilteredData(filtered);
  }, [eventData, startDate, endDate]);



  const handleDateChange = (date, type) => {
    if (type === 'start') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const downloadFile = () => {
    console.log("Click");
    window.location.href = 'https://drive.google.com/uc?export=download&id=10G3CdI7ZJoGPflbgfdJjGaQ7heZavJm2';
  };

  return (
    <div className="MainPage">
      <Header username = {username} />

      {/* {cookies.token && <p>Decoded Token: {JSON.stringify(jwtDecode(cookies.token))}</p>} */}
      <div className="main-content">
        <p className='preview '>Analysis of online gaming in the world</p>
        <div className="chart-container">
        <h2>Line graph of Online Players</h2>
        <DateRangePicker startDate={startDate} endDate={endDate} onDateChange={handleDateChange} />
          <EventChart data={filteredData} />
          <a className='download-link' href="https://drive.google.com/uc?export=download&id=1b6EBY7AdTlb01n1nTDWxML5Icydu-okj">Download data</a>
        </div>
        <div className='pie-chart-container'>
          <h2>Pie Chart of events impact </h2>
          <div className="pie-chart">
              <PieChart data={eventData1} />
          </div>
          <a className="download-link" href="https://drive.google.com/uc?export=download&id=1nUlAEJ3M9yST9Gn63n5WOujXXFACLJmZ">Download data</a>
        </div>
         
    </div>
      <MainContent />
      <Footer />
    </div>  
  );
};

export default MainPage;
