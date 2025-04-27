import React from "react";
import "./FlightDetails.scss"; // Importing styles for the FlightDetails component
import planeImage from '../../assets/images/plane.jpg'; // Importing the plane image

// FlightDetails Component
function FlightDetails() {
  return (
    <div className="flight-details">
      
      {/* Header Section */}
      <div className="flight-header">
        <h4>Flight Details</h4> {/* Heading */}
        <span className="see-all">See all</span> {/* Link to view more flight details */}
      </div>

      {/* Flight Information Section */}
      <div className="flight-info">
        <p className="flight-date">26.01.2025, 10:50 am</p> {/* Flight Date and Time */}

        {/* Airport Codes and Cities */}
        <div className="airport-codes">
          {/* Departure Airport */}
          <div className="airport">
            <span className="code">DEL</span> {/* Airport Code */}
            <span className="city">Delhi, India</span> {/* City and Country */}
          </div>

          <span className="arrow">→</span> {/* Direction Arrow */}

          {/* Arrival Airport */}
          <div className="airport">
            <span className="code">NRT</span> {/* Airport Code */}
            <span className="city">Narita, Tokyo</span> {/* City and Country */}
          </div>
        </div>
      </div>

      {/* Plane Image Section */}
      <div className="plane-image">
         <img src={planeImage} alt="plane-image" /> {/* Plane Image */}
      </div>

    </div>
  );
}

export default FlightDetails; // Exporting FlightDetails component
