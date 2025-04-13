// src/main.jsx (or src/index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Or your main CSS file
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your App component with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);