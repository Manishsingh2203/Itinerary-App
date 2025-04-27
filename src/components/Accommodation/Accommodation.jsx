import React from "react";
import './Accommodation.scss'; // Importing styles for the Accommodation component

// Importing hotel images
import hotel1 from '../../assets/images/hotel1.jpg';
import hotel2 from '../../assets/images/hotel2.jpg';

function Accommodation() {
    return (
        <div className="accommodation">
            {/* Header Section */}
            <div className="accommodation-header">
                <h3>Accommodation</h3>
                <a href="#" className="see-all">See all</a> {/* Link to view all accommodations */}
            </div>

            {/* Accommodation Cards Grid */}
            <div className="accommodation-grid">

                {/* Accommodation Card 1 */}
                <div className="accommodation-card">
                    <img src={hotel1} alt="Shinagawa" /> {/* Hotel image */}
                    <div className="card-content">
                        <div className="rating">⭐ 4.0 Very Good</div> {/* Hotel rating */}
                        <h5>Shinagawa Prince Hotel</h5> {/* Hotel name */}
                        <p><strong>Check in:</strong> 26.01.2025, 11:15 pm</p> {/* Check-in info */}
                        <p><strong>Check out:</strong> 28.01.2025, 11:15 am</p> {/* Check-out info */}
                        <div className="status-row">
                            <span className="nights">2 Nights</span> {/* Number of nights */}
                            <span className="status confirmed">✔ Confirmed</span> {/* Booking status */}
                        </div>
                    </div>
                </div>

                {/* Accommodation Card 2 */}
                <div className="accommodation-card">
                    <img src={hotel2} alt="Mercure Hotel" /> {/* Hotel image */}
                    <div className="card-content">
                        <div className="rating">⭐ 4.1 Very Good</div> {/* Hotel rating */}
                        <h5>Mercure Tokyo Hotel</h5> {/* Hotel name */}
                        <p><strong>Check in:</strong> 28.01.2025, 6:00 pm</p> {/* Check-in info */}
                        <p><strong>Check out:</strong> 30.01.2025, 11:00 am</p> {/* Check-out info */}
                        <div className="status-row">
                            <span className="nights">2 Nights</span> {/* Number of nights */}
                            <span className="status pending">⏳ Pending</span> {/* Booking status */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Accommodation; // Exporting the component for use elsewhere
