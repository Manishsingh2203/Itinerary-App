import React from 'react'; // Import React library
import './StatusBar.scss'; // Import StatusBar styles
import { FaWifi, FaBatteryFull } from "react-icons/fa"; // Import WiFi and Battery icons
import { MdSignalCellular4Bar } from "react-icons/md"; // Import Mobile Signal icon

// StatusBar Component
function StatusBar() {
  return (
    <div className="status-bar"> {/* Main container for the status bar */}
      
      {/* Display the current time */}
      <span className="time">9:41</span>
      
      {/* Icons for network, WiFi, and battery */}
      <div className="icons">
        <MdSignalCellular4Bar className="icon" /> {/* Mobile Signal Icon */}
        <FaWifi className="icon" /> {/* WiFi Icon */}
        <FaBatteryFull className="icon" /> {/* Battery Icon */}
      </div>
    </div>
  );
}

export default StatusBar; // Export the StatusBar component
