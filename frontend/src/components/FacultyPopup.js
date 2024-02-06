import React from 'react';
import { Link } from 'react-router-dom';

function DepartmentLinks({ departments }) {
  return (
    <ul>
      {departments.map((dept, index) => (
        <li key={index}>
          <Link to={dept.link} className="small-text">{dept.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function FacultyPopup() {
  const faculties = [
    {
      name: 'Faculty of Civil and Mechanical Engineering (FoC&M)',
      departments: [
        { name: 'Civil Engineering', link: '/CE' },
        { name: 'Mechanical Engineering', link: '/ME' },
        { name: 'Building & Architectural', link: '/BA' },
        // ... other departments
      ],
    },



    // ... other faculties
    {
      name: 'Faculty of Electrical, Electronic & Computer Systems Engineering (FEECE)',
      departments: [
        { name: 'Electrical Engineering', link: '/EL' },
        { name: 'Computer Systems Engineering', link: '/CS' },
        { name: 'Electronic Engineering', link: '/ES' },
        { name: 'Telecommunication Engineering', link: '/TC' },
        { name: 'Software Engineering', link: '/SW' },
        { name: 'Electrical (Automation and Control)', link: '/AC' },
        { name: 'Biomedical Engineering', link: '/BM' },
      
      ],
    },
    
    {
      name: 'Faculty of Science (FoS)',
      departments: [
        { name: 'Information Technology', link: '/IT' },
        { name: 'Computer Science', link: '/CoS' },
        { name: 'Artificial Intelligence', link: '/AI' },
        { name: 'Cyber Security', link: '/AI' },
        { name: 'Data Science', link: '/DS' },
        { name: 'English', link: '/ENG' },
        { name: 'Mathematics & Statistics', link: '/MTS' },
        { name: 'Physics', link: '/PH' },
        { name: 'Chemistry', link: '/CH' },
      
      ],
    },


    {
      name: 'Faculty of Environmental Engineering (FoEE)',
      departments: [
        { name: 'Chemical Engineering', link: '/CH' },
        { name: 'Environment Engineering', link: '/EE' },
        { name: 'Energy Systems Engineering', link: '/EN' },
       
      
      ],
    },



    {
      name: 'Faculty of Technology (FoT)',
      departments: [
      
        { name: 'Food Engineering Technology', link: '/FT' },
        { name: 'Civil Technology', link: '/CT' },
        { name: 'Electrical Technology', link: '/ET' },
        { name: 'Mechanical Technology', link: '/MT' },
     
      
      ],
    },


  
  ];

  return (
    <div className="custom-popup">
      {faculties.map((faculty, index) => (
        <div key={index}>
          <h3 className="title-name">{faculty.name}</h3>
          <DepartmentLinks departments={faculty.departments} />
        </div>
      ))}
    </div>
  );
}

export default FacultyPopup;
