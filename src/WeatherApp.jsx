import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import './style.css';
import Tempinfo from './Tempinfo/Tempinfo';

const WeatherApp = () => {
  return (
    <div className="container">
      <CurrentWeather />
      <Tempinfo />
    </div>
  );
};

export default WeatherApp;
