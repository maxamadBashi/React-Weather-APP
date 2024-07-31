React Weather App

This project is a weather application built with React and Tailwind CSS. It allows users to search for and view the weather forecast for various locations.

Installation

To run this application locally, follow these steps:

1. Clone the repository:

   bash
   git clone https://github.com/maxamadBashi/React-Weather-APP
   

2. Navigate to the project directory:

   bash
   cd React-Weather-App-main
   

3. Install the dependencies:

   bash
   npm install
   

4. Start the development server:

   bash
   npm run dev
   

5. Open your browser and visit:

   bash
   http://localhost:5173/React-Weather-App/
   

 Features

- Search for current weather and forecast by city name
- Display weather details including temperature, humidity, and wind speed
- Responsive design with a clean and intuitive interface
- Loading animations and error handling

 File Structure

- .eslintrc.cjs: ESLint configuration.
- .gitignore: Specifies files to be ignored by Git.
- LICENSE: License information for the project.
- README.md: Project documentation.
- index.html: Entry point for the web application.
- package-lock.json: Describes the exact dependency tree.
- package.json: Project metadata and dependencies.
- postcss.config.js: Configuration for PostCSS.
- tailwind.config.js: Configuration for Tailwind CSS.
- vite.config.js: Configuration for Vite.
- .github/workflows/deploy.yml: GitHub Actions workflow for deployment.
- public/: Contains static assets.
  - loading.svg: Loading animation.
- src/: Source code for the application.
  - App.jsx: Main application component.
  - main.jsx: Entry point for the React application.
  - assets/styles/index.css: Main stylesheet.
  - components/: Contains React components.
    - DataItem.jsx: Component for displaying a single data item.
    - DataList.jsx: Component for displaying a list of data items.
    - Footer.jsx: Footer component.
    - ForecastItem.jsx: Component for displaying a single forecast item.
    - ForecastList.jsx: Component for displaying a list of forecast items.
    - Header.jsx: Header component.
    - Main.jsx: Main content component.
    - Search.jsx: Search bar component.
    - WeatherSection.jsx: Component for displaying weather information.
  - hooks/: Contains custom React hooks.
    - useForecast.jsx: Hook for fetching weather forecast data.
    - useIcon.jsx: Hook for determining the correct weather icon.
    - useWeather.jsx: Hook for fetching current weather data.

Usage

1. Search for a city:
   - Enter the city name in the search bar and press enter or click the search button.

2. View weather details:
   - The application will display the current weather and a forecast for the searched city.

 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

 Contributing

Contributions are welcome! Please fork the repository and open a pull request to contribute.

 Contact

For any questions or feedback, please contact the project maintainer.


This README provides an overview of the project, its features, installation steps, file structure, usage, license, contributing guidelines, and contact information.
