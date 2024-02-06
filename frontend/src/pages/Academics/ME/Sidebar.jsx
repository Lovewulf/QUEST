import React from 'react';
import './ME.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/me">Home |</Link></li>
        <li><Link to="/me/programs">Programs  |</Link></li>
        <li><Link to="/me/faculty">Faculty |</Link></li>
        {/* Add more links for other sections as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;