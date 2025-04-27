import './InputField.scss'; // Importing styles for the InputField component
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'; // Importing icons from react-icons

// InputField Component
function InputField({ placeholder, value, onChange, icon, type = "text", options = [] }) {

  // Function to return the appropriate icon based on the 'icon' prop
  const getIcon = () => {
    if (icon === 'location') return <FaMapMarkerAlt className="icon" />;
    if (icon === 'calendar') return <FaCalendarAlt className="icon" />;
    return null; // No icon by default
  };

  return (
    <div className="input-with-icon">
      {/* Display selected icon */}
      <span className="icon">{getIcon()}</span>

      {/* Render input or select field based on 'type' */}
      {type === "text" ? (
        <input
          type="text" // Input field for text
          placeholder={placeholder} // Placeholder text
          value={value} // Current input value
          onChange={onChange} // Function to handle changes
        />
      ) : (
        <select value={value} onChange={onChange}> {/* Dropdown field for selection */}
          <option value="">Select Duration</option> {/* Default option */}
          {options.map((opt, index) => ( // Map through options and create select choices
            <option key={index} value={opt}>{opt}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default InputField; // Exporting InputField component
