import React from 'react';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import ExtraInfo from './ExtraInfo/ExtraInfo';
import './style.css';
import Tempinfo from './Tempinfo/Tempinfo';
import WeatherTab from './WeatherTab/WeatherTab';

const WeatherApp = () => {
  return (
    <div className="container">
      <CurrentWeather />
      <Tempinfo />
      <ExtraInfo />
      <WeatherTab />
    </div>
  );
};

export default WeatherApp;
