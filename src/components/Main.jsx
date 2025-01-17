import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";
import WeatherSection from "./WeatherSection";
import ForecastList from "./ForecastList";

export default function Main({ city }) {
  // If no city is provided, render a message prompting the user to enter a city
  if (!city) {
    return (
      <main className="max-w-screen-md p-4 flex flex-1 flex-col justify-center items-center">
        <section className="w-64 h-32 p-4 flex flex-col justify-center items-center border border-white border-opacity-25 rounded-xl bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
          <span className="text-xl">Enter city...</span>
        </section>
      </main>
    );
  }

  // Use custom hooks to fetch weather and forecast data
  const { weatherData, weatherLoading, weatherError } = useWeather({ city });
  const { forecastData, forecastLoading, forecastError } = useForecast({ city });

  return (
    <main className="max-w-screen-md p-4 flex flex-1 flex-col justify-center items-center gap-4">
      {/* Show a loading spinner while both weather and forecast data are being fetched */}
      {weatherLoading && forecastLoading && (
        <img className="w-32" src="loading.svg" alt="Loading"></img>
      )}
      {/* Show an error message if both weather and forecast data fail to load */}
      {weatherError && forecastError && (
        <section className="w-64 h-32 p-4 flex flex-col justify-center items-center border border-error border-opacity-75 rounded-xl bg-error bg-opacity-75 shadow-[0_0_16px_0_rgba(255,0,0,0.75)] backdrop-blur">
          <span className="text-xl">Error</span>
          <span className="opacity-75">City not found</span>
        </section>
      )}
      {/* Render WeatherSection if weather data is successfully fetched */}
      {!weatherLoading && !weatherError && (
        <WeatherSection weatherData={weatherData} />
      )}
      {/* Render ForecastList if forecast data is successfully fetched */}
      {!forecastLoading && !forecastError && (
        <ForecastList forecastData={forecastData} />
      )}
    </main>
  );
}
