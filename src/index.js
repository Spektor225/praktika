import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import { GlobalLogin } from './Global_login/Global_login';
// import { GlobalMain } from './Global_main/Glodal_main';

import { GlobalWindowMain } from './Window_main/Global_window_main';
import "./Glodal/global.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <GlobalLogin /> */}
    {/* <GlobalMain /> */}

    <GlobalWindowMain />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
