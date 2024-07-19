import { useState, useEffect } from "react";
import axios from "axios";

export default function useWeather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);

  const apiKey = "ebac22e0a3d2dc0b9869d7b9bd94d79e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
}
