import React from 'react';
import './CS.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    




    <div className="sidebar">
      





      <ul>
        <li><Link to="/cs">Home |</Link></li>
        <li><Link to="/cs/programs">Programs  |</Link></li>
        <li><Link to="/cs/faculty">Faculty |</Link></li>
        {/* Add more links for other sections as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;



