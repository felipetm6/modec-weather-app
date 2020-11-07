import React, { ReactNode } from 'react';
import { ReactComponent as BrokenCloudsIcon } from 'images/broken-clouds-icon.svg';
import { ReactComponent as ClearSkiesDayIcon } from 'images/clear-skies-day-icon.svg';
import { ReactComponent as ClearSkiesNightIcon } from 'images/clear-skies-night-icon.svg';
import { ReactComponent as CloudyIcon } from 'images/cloudy-icon.svg';
import { ReactComponent as MistIcon } from 'images/fog-icon.svg';
import { ReactComponent as RainIcon } from 'images/rain-icon.svg';
import { ReactComponent as ScatteredCloudsDayIcon } from 'images/scattered-clouds-day-icon.svg';
import { ReactComponent as ScatteredCloudsNightIcon } from 'images/scattered-clouds-night-icon.svg';
import { ReactComponent as ShowerRainIcon } from 'images/shower-rain-icon.svg';
import { ReactComponent as SnowIcon } from 'images/snow-icon.svg';
import { ReactComponent as ThunderstormIcon } from 'images/thunderstorm-icon.svg';
import { WeatherIconCode } from 'models/weather';

export default (iconCode: WeatherIconCode): ReactNode =>
  ({
    '01d': <ClearSkiesDayIcon />,
    '01n': <ClearSkiesNightIcon />,
    '02d': <ScatteredCloudsDayIcon />,
    '02n': <ScatteredCloudsNightIcon />,
    '03d': <CloudyIcon />,
    '03n': <CloudyIcon />,
    '04d': <BrokenCloudsIcon />,
    '04n': <BrokenCloudsIcon />,
    '09d': <ShowerRainIcon />,
    '09n': <ShowerRainIcon />,
    '10d': <RainIcon />,
    '10n': <RainIcon />,
    '11d': <ThunderstormIcon />,
    '11n': <ThunderstormIcon />,
    '13d': <SnowIcon />,
    '13n': <SnowIcon />,
    '50d': <MistIcon />,
    '50n': <MistIcon />,
  }[iconCode]);
