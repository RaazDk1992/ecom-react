import React from 'react';
import '../../assets/styles/Divider.css'; // Import the CSS file for styling

const Divider = ({ text = "" }) => {
  return (
    <div className="divider-container">
      {text && <span className="divider-text" style={{color:"#0360a1"}}>{text}</span>}
      <div className="divider-line"></div>
    </div>
  );
};

export default Divider;
