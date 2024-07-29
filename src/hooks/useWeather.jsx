import { useState, useEffect } from "react";
import axios from "axios";

export default function useWeather({ city }) {
  // State to hold the current weather data
  const [weatherData, setWeatherData] = useState(null);
  // State to hold any error that occurs during fetching data
  const [weatherError, setWeatherError] = useState(null);
  // State to manage the loading status of the data fetching
  const [weatherLoading, setWeatherLoading] = useState(true);

  // Your API key for OpenWeatherMap
  const apiKey = "ebac22e0a3d2dc0b9869d7b9bd94d79e";
  // The URL for the OpenWeatherMap API
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Set loading state to true before starting the fetch
        setWeatherLoading(true);
        // Clear any previous errors
        setWeatherError(null);
        // Make a GET request to the API with the specified parameters
        const response = await axios.get(apiUrl, {
          params: {
            q: city,
            appid: apiKey,
            units: "metric", // Use metric units
          },
        });
        // Set the fetched data to the state
        setWeatherData(response.data);
      } catch (error) {
        // Set any error that occurs during the fetch to the state
        setWeatherError(error);
      } finally {
        // Set loading state to false after the fetch completes
        setWeatherLoading(false);
      }
    };

    // Call the fetchData function to start the data fetching process
    fetchData();

    // Cleanup function (not needed in this case, but included for completeness)
    return () => {};
  }, [city]); // Re-run the effect whenever the city changes

  // Return the fetched data, loading state, and error state
  return { weatherData, weatherLoading, weatherError };
}
