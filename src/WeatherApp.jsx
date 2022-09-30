import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import ExtraInfo from './ExtraInfo/ExtraInfo';
import './style.css';
import Tempinfo from './Tempinfo/Tempinfo';

const WeatherApp = () => {
  return (
    <div className="container">
      <CurrentWeather />
      <Tempinfo />
      <ExtraInfo />
    </div>
  );
};

export default WeatherApp;
