// Import React library for building user interfaces
import React from 'react';

// Import ReactDOM for rendering React components into the DOM
import ReactDOM from 'react-dom/client';

// Import BrowserRouter and alias it as Router for client-side routing
import { BrowserRouter as Router } from 'react-router-dom';

// Import the main App component
import App from './App';

// Import global SCSS styles
import './styles/main.scss';

// Render the App component wrapped inside Router and StrictMode for routing and highlighting potential problems
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Helps to catch errors and warnings in development */}
    <Router> {/* Provides routing capabilities across the app */}
      <App /> {/* Main application component */}
    </Router>
  </React.StrictMode>
);
