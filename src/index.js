import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UVI from './components/UVI';
import PSI from './components/PSI';
import AreaInput from './components/AreaInput';
import TwentyFourHourForecast from './components/TwentyFourHourForecast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TwentyFourHourForecast />
    <App />
    <PSI />
    <UVI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
