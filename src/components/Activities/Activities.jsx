import React from "react";
import './Activities.scss'; // Importing styles specific to the Activities component

// Importing images for activities
import sensoTemple from '../../assets/images/senso-temples.jpg';
import tokyoSkyTree from '../../assets/images/tokyo-sky-tree.jpg';
import kimonoWearing from '../../assets/images/kimono-wearing.jpg';

function Activities() {
  return (
    <div className="activities">
      
      {/* Header Section */}
      <div className="activities-header">
        <h2>Activities</h2>
        <a href="#" className="see-all">See all</a> {/* Link to view all activities */}
      </div>

      {/* Day Plan Buttons */}
      <div className="day-plan">
        <button className="active">Day Plan</button> {/* Active day plan button */}
        <button>14 Activities</button> {/* Button showing total activities */}
      </div>

      {/* Date Selector Section */}
      <div className="date-selector">
        {/* Each date block */}
        <div className="date active">
          <span className="month">JAN</span>
          <span className="day">27</span>
        </div>
        {/* Other dates */}
        <div className="date">28</div>
        <div className="date">29</div>
        <div className="date">30</div>
        <div className="date">31</div>
        <div className="date">FEB 1</div>
      </div>

      {/* Activities for Selected Day */}
      <div className="day-activities">
        <h4>Day 1 &nbsp; <span>27.01.2025</span> <span className="activity-count">3 Activities</span></h4>

        {/* Activity Card 1 */}
        <div className="activity-card">
          <img src={sensoTemple} alt="Senso-ji Temple" /> {/* Activity image */}
          <div className="details">
            <h5>Senso-ji Temple & Nakamise Shopping Street</h5> {/* Activity title */}
            <p><strong>Timing:</strong> 8:15 am Morning</p> {/* Activity timing */}
            <p><strong>Duration:</strong> 3 hours</p> {/* Activity duration */}
            <p><strong>Pick up:</strong> From Hotel</p> {/* Pick-up point */}
          </div>
        </div>

        {/* Activity Card 2 */}
        <div className="activity-card">
          <img src={tokyoSkyTree} alt="Tokyo Sky Tree" /> {/* Activity image */}
          <div className="details">
            <h5>Tokyo Sky Tree</h5> {/* Activity title */}
            <p><strong>Timing:</strong> 1:00 pm Afternoon</p> {/* Activity timing */}
            <p><strong>Duration:</strong> 3 hours</p> {/* Activity duration */}
            <p><strong>Pick up:</strong> From Nakamise Street</p> {/* Pick-up point */}
          </div>
        </div>

        {/* Activity Card 3 */}
        <div className="activity-card">
          <img src={kimonoWearing} alt="Kimono Wearing" /> {/* Activity image */}
          <div className="details">
            <h5>Kimono Wearing</h5> {/* Activity title */}
            <p><strong>Timing:</strong> Anytime before 8:00pm</p> {/* Activity timing */}
            <p><strong>Duration:</strong> 1-2 hours</p> {/* Activity duration */}
            <p><strong>Pick up:</strong> From Hotel</p> {/* Pick-up point */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Activities; // Exporting Activities component
