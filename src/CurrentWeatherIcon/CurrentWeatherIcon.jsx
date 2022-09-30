import React from 'react';
import {
  WiDayThnderstorm,
  WiDaySnow,
  WiDayCloudy,
  WiDaySunny,
  WiDust,
  WiDayRain,
  WiDaySprinkle,
  WiNa,
} from 'react-icons/wi';

function CurrentWeatherIcon({ weatherState, ...props }) {
  switch (weatherState) {
    case 'ThunderStorm':
      return <WiDayThnderstorm {...props} />;
    case 'Snow':
      return <WiDaySnow {...props} />;
    case 'Clouds':
      return <WiDayCloudy {...props} />;
    case 'Clear':
      return <WiDaySunny {...props} />;
    case 'Haze':
      return <WiDust {...props} />;
    case 'Mist':
      return <WiDust {...props} />;
    case 'Smoke':
      return <WiDust {...props} />;
    case 'Dust':
      return <WiDust {...props} />;
    case 'Fod':
      return <WiDust {...props} />;
    case 'Sand':
      return <WiDust {...props} />;
    case 'Ash':
      return <WiDust {...props} />;
    case 'Squall':
      return <WiDust {...props} />;
    case 'Tornado':
      return <WiDust {...props} />;
    case 'Rain':
      return <WiDayRain {...props} />;
    case 'Drizzle':
      return <WiDaySprinkle {...props} />;
    default:
      return <WiNa {...props} />;
  }
}

export default CurrentWeatherIcon;
