import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for client-side routing
import App from './App'; // Import main App component

// Render the App component inside the root DOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
