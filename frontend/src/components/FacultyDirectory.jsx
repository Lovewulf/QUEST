import React, { useState, useEffect } from 'react';
import './FacultyDirectory.css';
import { Link } from 'react-router-dom';



function FacultyDirectory() {
  const [facultyData, setFacultyData] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Define the departments
  const departments = {
    'FoC&M': ['Civil Engineering', 'Mechanical Engineering', 'Building & Architectural', 'Industrial & Manufacturing'],
    'FEECE': ['Electrical Engineering', 'Computer Systems', 'Electronic Engineering', 'Telecommunication Eng.', 'Software Engineering', 'Electrical (Automation and Control)', 'Biomedical'],
    'FoS': ['Technology', 'Computer Science', 'Artificial Intelligence', 'Cyber Security', 'Data Science', 'English', 'Mathematics & Statistics', 'Physics', 'Chemistry'],
    'FoEE': ['Chemical Engineering', 'Environment Engineering', 'Energy Systems Engineering'],
    'FoT': ['Food Engineering Technology', 'Civil Technology', 'Electrical Technology', 'Mechanical Technology']
  };

  // Function to get the first name
  const getFirstName = (fullName) => {
    const cleanName = fullName.replace(/(Prof\.|Dr\.|Engr\.)\s?/gi, '');
    const parts = cleanName.split(' ');
    return parts[0];
  };

  
    useEffect(() => {
      fetch('http://localhost:3001/api/faculty-directory')
        .then(response => response.json())
        .then(data => {
          const filteredData = selectedDepartment ? data.filter(member => member.department === selectedDepartment) : data;
          // Sort data based on the first name without prefixes
          const sortedData = filteredData.sort((a, b) => getFirstName(a.name).localeCompare(getFirstName(b.name)));
          // Categorize based on the first letter of the first name without prefixes
          const categorizedData = sortedData.reduce((acc, member) => {
            const initial = getFirstName(member.name).charAt(0).toUpperCase();
            if (!acc[initial]) acc[initial] = [];
            acc[initial].push(member);
            return acc;
          }, {});
          setFacultyData(categorizedData);
        })
        .catch(error => console.error('Error fetching faculty data:', error));
    }, [selectedDepartment]);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleClearFilter = () => {
    setSelectedDepartment('');
  };

  return (
    <div className='faculty-directory'>
      <header className='height-100'>
        <div className='container h-10 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Faculty Directory</h1>
        </div>
      </header>
      <div className='container my-1'>
        <div className="filter-section">
          <label htmlFor="department-select">Departments: </label>
          <select id="department-select" onChange={handleDepartmentChange} className="department-select">
            <option value="">Choose Department</option>
            {Object.entries(departments).map(([faculty, deptArray]) => (
              <optgroup label={faculty} key={faculty}>
                {deptArray.map(dept => <option key={dept} value={dept}>{dept}</option>)}
              </optgroup>
            ))}

             
          </select>
          <button onClick={handleClearFilter} className="clear-button">Clear</button>
        </div>

        {Object.keys(facultyData).map(initial => (
          <div key={initial}>
            <h2 className="alphabet-header">{initial}</h2>
            <div className="faculty-row">
            {facultyData[initial].map((member, index) => (
  <div key={index} className="faculty-member">
    <Link to={`/faculty/${member.username}`} className="faculty-link">
      <h3 className="faculty-name">{member.name}</h3> {/* Display full name with prefixes */}
    </Link>
                  {member.fimages && (
                    <img src={`http://localhost:3001${member.fimages}`} alt="Faculty" className="faculty-image" />
                  )}
                   <p> </p>
                  <p className="faculty-designation">{member.designation}</p>
                  <p className="faculty-department">{member.department}</p>
                  <p className="faculty-currentPortfolio">{member.currentPortfolio}</p>
                 
                  {member.email && (
                    <p className="faculty-contact"><i className="fa fa-envelope"></i> {member.email}</p>
                  )}
                  {member.phoneNumber && (
                    <p className="faculty-contact"><i className="fa fa-phone"></i> {member.phoneNumber}</p>
                  )}
                  {member.officeHours && (
                    <p className="faculty-contact"><i className="fa fa-clock"></i> {member.officeHours}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyDirectory;
