import React from 'react';
import './CE.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/ce">Home |</Link></li>
        <li><Link to="/ce/programs">Programs  |</Link></li>
        <li><Link to="/ce/faculty">Faculty |</Link></li>
        {/* Add more links for other sections as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;