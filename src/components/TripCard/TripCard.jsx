import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Importing an arrow icon from lucide-react
import tripImage from '../../assets/images/tokyo.jpg'; // Importing trip background image
import './TripCard.scss'; // Importing styles for TripCard

// TripCard Component
function TripCard() {
  return (
    <div className="trip-card">
      
      {/* Background Image Section */}
      <div className="background-image">
        <img src={tripImage} alt="Tokyo Trip" /> {/* Trip background image */}
        
        {/* Overlay content */}
        <div className="overlay">
          
          {/* Header section inside the card */}
          <div className="card-header">
            <h2>TOKYO</h2> {/* Trip destination */}
            <p className="date-range">27.01.2025 - 02.02.2025</p> {/* Trip date range */}
          </div>

          {/* Arrow icon to indicate link or forward action */}
          <div className="arrow-icon">
            <ArrowUpRight size={20} />
          </div>

          {/* Trip details section */}
          <div className="card-details">
            {/* Duration */}
            <div className="detail-item">
              <span className="detail-icon">🕒</span>
              <span className="detail-value">8 Days</span>
            </div>

            {/* Group Info */}
            <div className="detail-item">
              <span className="detail-icon">👥</span>
              <span className="detail-value">4 (2M, 2F)</span>
            </div>

            {/* Number of Activities */}
            <div className="detail-item">
              <span className="detail-icon">🎯</span>
              <span className="detail-value">14 Activities</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default TripCard; // Exporting TripCard component
