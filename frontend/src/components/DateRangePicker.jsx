// src/components/DateRangePicker.js

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = ({ startDate, endDate, onDateChange }) => {
  return (
    <div className="date-range-picker">
      <p className='date-range-picker-text'>Start</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => onDateChange(date, 'start')}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy-MM-dd"
      />
      <p className='date-range-picker-text'>End</p>
      <DatePicker
        selected={endDate}
        onChange={(date) => onDateChange(date, 'end')}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
};

export default DateRangePicker;
