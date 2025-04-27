import { Routes, Route } from 'react-router-dom'; // Import routing components
import Onboarding from './pages/Onboarding/Onboarding'; // Import Onboarding page
import Dashboard from './pages/Dashboard/Dashboard'; // Import Dashboard page

// Main App Component
function App() {
  return (
    <Routes>
      {/* Onboarding Route (Default) */}
      <Route path="/" element={<Onboarding />} />

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App; // Export App component
