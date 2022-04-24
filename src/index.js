import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/moller.css'
import './css/maizi.css'
import './css/blogpost.css'
import './css/responsive.css'
import {Provider} from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App/>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

