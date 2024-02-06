import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CS.css';

const Faculty = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);

  // Function to fetch and sort faculty by department
  const fetchFacultyByDepartment = async (department) => {
    try {
      const response = await fetch(`http://localhost:3001/api/faculty/department/${department}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();

      // Sorting logic
      const rankOrder = ["Professor", "Associate Professor", "Assistant Professor", "Lecturer"];
      data = data.sort((a, b) => {
        return rankOrder.indexOf(a.designation) - rankOrder.indexOf(b.designation);
      });

      setFacultyMembers(data);
    } catch (error) {
      console.error('Error fetching faculty:', error);
    }
  };

  useEffect(() => {
    fetchFacultyByDepartment("Computer Systems"); 
  }, []);

  return (
    <div className="faculty">
      
      <h3>Faculty Members</h3>
      <ul>
        
        {facultyMembers.length > 0 ? (
          facultyMembers.map(member => (
            <li key={member.id} className="faculty-list-item">
              {/* Replace <a> with <Link> */}
              <Link to={`/faculty/${member.username}`} className="faculty-link">
                <strong>{member.name}</strong> - {member.designation}
              </Link>
              {member.fimages && (
          <img src={`http://localhost:3001${member.fimages}`} alt="Faculty" className="faculty-image" />
          )}
             <br /><br />
             <p className="faculty-currentPortfolio">{member.currentPortfolio}</p> 
              Email: {member.email}<br />
              Phone: {member.phoneNumber}<br />
              Qualifications: {member.qualification}
              <br /><br /><br /><br /><br />
            </li>
          ))
        ) : (
          <p>No faculty members found in this department.</p>
        )}
      </ul>
      
      <p>
        For more information on faculty members, <Link to="/facultydirectory">visit the faculty page</Link>.
      </p>
    </div>
  );
};

export default Faculty;
