import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './component/cover-page'; 
import SearchBar from './component/SearchBar';
import Calendar from "./component/calendar";
import Footer from "./component/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Calendar></Calendar>
      <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
