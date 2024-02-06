import React from 'react';
import { Link } from 'react-router-dom';



function AdmissionsPopup() {
  return (
    <div className="faculty-popup">
      {/* Add links to different faculty pages */}
      <Link to="/focm">Engineering</Link>
      <Link to="/feece">FEECE</Link>
      {/* Add other faculties */}
    </div>
  );
}

export default AdmissionsPopup;