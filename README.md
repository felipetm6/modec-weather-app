# Awesome Weather App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), with the intent to fulfill
a job's hard skill challenge to work as a React Developer for **Modec**.  

The project was developed with **React** and **Typescript**, using both **OpenWeatherMap API** and **Google 
Maps** to fetch locations and their current weather. The purpose of the challenge is to 
fetch the current weather in a city based on latitude and longitude, and display this
 information alongside 14 other cities.

It is necessary to provide the necessary API keys to execute this project as expected. Create a `.env` file in your root repository after cloning this project and setup the following keys:

```
REACT_APP_GOOGLE_MAPS_KEY=(with your Google Maps API key inserted here)
REACT_APP_WEATHER_API_KEY=(with your OpenWeatherMap API key inserted here)
```

## Content of this project

The aforementioned challenge was completed using the following technologies:

- **React**, as a basic request for the challenge;
- **TypeScript**, to ensure type safety and provide better control over the whole code;
- **Styled Components**, to provide an easier and compartmentalized way to style the project;
- **OpenWeatherMap**, as a basic request for the challenge, to provide the data related to a city's weather in real time;
- **Google Maps**, as a solution for the requested map, to provide a way for the user to select which city to fetch weather data;
- **Nord Theme**, to provide a visual guide over colors and overall styles;

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
