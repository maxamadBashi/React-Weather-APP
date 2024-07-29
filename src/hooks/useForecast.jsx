import { useState, useEffect } from "react";
import axios from "axios";

export default function useForecast({ city }) {
  // State to hold the forecast data
  const [forecastData, setForecastData] = useState(null);
  // State to hold any error that occurs during fetching data
  const [forecastError, setForecastError] = useState(null);
  // State to manage the loading status of the data fetching
  const [forecastLoading, setForecastLoading] = useState(true);

  // Your API key for OpenWeatherMap
  const apiKey = "bd5e378503939ddaee76f12ad7a97608";
  // The URL for the OpenWeatherMap API
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/daily";

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Set loading state to true before starting the fetch
        setForecastLoading(true);
        // Clear any previous errors
        setForecastError(null);
        // Make a GET request to the API with the specified parameters
        const response = await axios.get(apiUrl, {
          params: {
            q: city,
            cnt: 7, // Number of days in the forecast
            appid: apiKey,
            units: "metric", // Use metric units
          },
        });
        // Set the fetched data to the state
        setForecastData(response.data);
      } catch (error) {
        // Set any error that occurs during the fetch to the state
        setForecastError(error);
      } finally {
        // Set loading state to false after the fetch completes
        setForecastLoading(false);
      }
    };

    // Call the fetchData function to start the data fetching process
    fetchData();

    // Cleanup function (not needed in this case, but included for completeness)
    return () => {};
  }, [city]); // Re-run the effect whenever the city changes

  // Return the fetched data, loading state, and error state
  return { forecastData, forecastLoading, forecastError };
}
