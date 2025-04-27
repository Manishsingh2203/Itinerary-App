import './Button.scss'; // Importing styles for the Button component

// Reusable Button component
function Button({ text, onClick, active }) {
  return (
    <button 
      className={`button ${active ? 'active' : ''}`} // Apply 'active' class if active prop is true
      onClick={onClick} // Attach click event handler
    >
      {text} {/* Display button text */}
    </button>
  );
}

export default Button; // Exporting Button component
