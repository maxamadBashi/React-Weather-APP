import { useState, useEffect } from "react";
import useIcon from "../hooks/useIcon";
import DataList from "./DataList";

export default function WeatherSection({ weatherData }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const {
    name: city,
    sys: { country },
    weather: [{ description }],
    main: { temp: temperature, humidity },
    wind: { speed: wind },
  } = weatherData;

  const icon = useIcon({ description });
  const flag = `fi fi-${country.toLowerCase()} rounded`;

  const items = [
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg",
      primary: `${temperature.toFixed()}°`,
    },
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg",
      primary: `${humidity} %`,
    },
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg",
      primary: `${wind.toFixed()} m/s`,
    },
  ];
}