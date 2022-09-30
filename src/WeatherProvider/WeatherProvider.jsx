import React, { createContext, useEffect, useState } from 'react';

export const WeatherContext = createContext({});

const WeatherProvider = ({ children }) => {
  const WeatherapiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const currentWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/weather?appid=${WeatherapiKey}&q=seoul&units=metric`;
      const currentWeatherInfo = await fetch(currentWeatherInfoAPI);
      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, pressure, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      } = await currentWeatherInfo.json();

      const hourlyWeatherInfoAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,daily&appid=${WeatherapiKey}&units=metric`;
      const hourlyWeatherInfo = await fetch(hourlyWeatherInfoAPI);
      const { hourly } = await hourlyWeatherInfo.json();
      setWeatherInfo({
        name,
        temp,
        humidity,
        weatherState,
        speed,
        deg,
        hourly,
        sunset,
        sunrise,
        temp_max,
        temp_min,
        feels_like,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <div>
      <WeatherContext.Provider value={{ ...weatherInfo }}>
        {children}
      </WeatherContext.Provider>
    </div>
  );
};

export default WeatherProvider;
