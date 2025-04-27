import { Link, useLocation } from "react-router-dom"; // Import Link for navigation and useLocation to get current path
import { Home, Search, Plus, Heart, User } from 'lucide-react'; // Importing icons from Lucide React

import './BottomNav.scss'; // Importing styles for the Bottom Navigation component

function BottomNav() {
  const location = useLocation(); // Get current route path

  return (
    <nav className="bottom-nav">
      {/* Home Link */}
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <Home size={24} /> {/* Home Icon */}
      </Link>

      {/* Search Link */}
      <Link to="/search" className={location.pathname === "/search" ? "active" : ""}>
        <Search size={24} /> {/* Search Icon */}
      </Link>

      {/* Plus Button - Center action button */}
      <button className="plus-btn">
        <Plus size={28} /> {/* Plus Icon */}
      </button>

      {/* Favorites Link */}
      <Link to="/favorites" className={location.pathname === "/favorites" ? "active" : ""}>
        <Heart size={24} /> {/* Heart Icon */}
      </Link>

      {/* Profile Link */}
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
        <User size={24} /> {/* User Icon */}
      </Link>
    </nav>
  );
}

export default BottomNav; // Exporting BottomNav component
