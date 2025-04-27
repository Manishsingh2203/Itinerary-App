import TripCard from "../../components/TripCard/TripCard"; // Trip summary card
import FlightDetails from "../../components/FlightDetails/FlightDetails"; // Flight information section
import Accommodation from "../../components/Accommodation/Accommodation"; // Hotel/accommodation info
import Activities from "../../components/Activities/Activities"; // Planned activities list
import BottomNav from "../../components/BottomNav/BottomNav"; // Bottom navigation bar
import StatusBar from "../../components/StatusBar/StatusBar"; // iOS-style top status bar
import { useState } from "react"; // React Hook for state
import "./Dashboard.scss"; // Dashboard specific styles

// Dashboard Component
function Dashboard() {
  // State to manage whether third pane is open
  const [openThirdPane, setOpenThirdPane] = useState(false);
  
  // State to toggle dark mode
  const [darkMode, setDarkMode] = useState(false);
  
  // (Currently unused) state for showing control menu
  const [showControlMenu] = useState(false);

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      
      {/*  Top StatusBar */}
      <StatusBar />

      {/*  Dashboard Header */}
      <header className="dashboard__header">
        <h1>Hello Chhavi!</h1>
        <p>Ready for your trip?</p>
      </header>

      {/*  Upcoming Trip Section Title */}
      <h3>Your Upcoming Trip</h3>

      {/*  TripCard (Clickable to open more details) */}
      <TripCard onClick={() => setOpenThirdPane(true)} />

      {/*  Flight Details Section */}
      <FlightDetails />

      {/*  Accommodation Section */}
      <Accommodation />

      {/*  Activities Section */}
      <Activities />

      {/*  Third Pane (Expandable Details Area) */}
      {openThirdPane && (
        <div className="third-pane">
          <button className="close-btn" onClick={() => setOpenThirdPane(false)}>Close</button>
          <h3>Third Pane Details</h3>
          <p>More info about flights, hotels, or activities...</p>
        </div>
      )}

      {/*  Bottom Navigation */}
      <BottomNav />

      {/*  Control Menu (Switch Theme Button) */}
      {showControlMenu && (
        <div className="control-menu">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
