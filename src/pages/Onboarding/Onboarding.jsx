import { useState } from 'react'; // Import useState hook for local state management
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faUser, faHeart, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons'; // Import icons
import StatusBar from "../../components/StatusBar/StatusBar"; // import StatusBar!
import './Onboarding.scss'; // Import onboarding styles

// Onboarding Component
function Onboarding() {
  const navigate = useNavigate(); // Hook to navigate between pages

  // State variables
  const [destination, setDestination] = useState(''); 
  const [duration, setDuration] = useState(''); 
  const [travelWith, setTravelWith] = useState(''); 

  const handleSubmit = () => {
    navigate('/dashboard'); 
  };

  const travelOptions = [
    { label: 'Solo', icon: faUser },
    { label: 'Couple', icon: faHeart },
    { label: 'Family', icon: faUsers },
    { label: 'Friends', icon: faUserFriends },
  ];

  return (
    <div className="onboarding">
      {/*  the StatusBar at the top */}
      <StatusBar />

      {/* Title and Subtitle */}
      <h2 className="title">Plan Your Journey, Your Way!</h2>
      <p className="subtitle">Let's create your personalised travel experience</p>

      {/* Destination Input */}
      <div className="form-section">
        <h3 class="man" >Where would you like to go?</h3>
        <div className="input-container">
          <span className="input-icon">📍</span> 
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="text-input"
          />
        </div>
      </div>

      {/* Duration Selection */}
      <div className="form-section">
        <h3>How long will you stay?</h3>
        <div className="input-container">
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="text-input"
          >
            <option value="">Select Duration</option>
            <option value="1-3 Days">1-3 Days</option>
            <option value="4-7 Days">4-7 Days</option>
            <option value="1-2 Weeks">1-2 Weeks</option>
            <option value="More than 2 Weeks">More than 2 Weeks</option>
          </select>
        </div>
      </div>

      {/* Travel Group Options */}
      <div className="form-section">
        <h3>Who are you traveling with?</h3>
        <div className="travel-options">
          {travelOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => setTravelWith(option.label)}
              className={`travel-button ${travelWith === option.label ? 'selected' : ''}`}
            >
              <FontAwesomeIcon icon={option.icon} className="travel-icon" />
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <button className="continue-button" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
}

export default Onboarding;
