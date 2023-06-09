import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./store";
import Home from "./Home";
import "bootswatch/dist/lux/bootstrap.min.css";
import './assets/styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home/>
    </Provider>
  </React.StrictMode>,
);
