import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes.js';
import './index.css';
//import { GiCottonFlower } from "react-icons/gi";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
