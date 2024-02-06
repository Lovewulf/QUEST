import React from 'react';
import { Link } from 'react-router-dom';

function DepartmentLinks({ departments }) {
  return (
    <ul>
      {departments.map((students, index) => (
        <li key={index}>
          <Link to={students.link} className="small-text">{students.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function StudentsPopup() {
  const students = [
    {
      name: 'Events and Activities',
      departments: [
        { name: 'Events & Activies Calender', link: '/OP' },
        { name: 'Picture Galary', link: '/ICH' },
        { name: 'students Letter', link: '/FST' },
        { name: 'Media', link: '/AIS' },
      
       
      ],
    },



    // ... other faculties
    {
      name: 'Advertisements and Tender Notices',
      departments: [
        { name: 'Advertisement List', link: '/BL' },
        { name: 'Tender Notices', link: '/BWL' },
        { name: 'Other Notifications', link: '/BWL' },
        
      ],
    },
    
    {
      name: 'Exams Schedules and Time Tables',
      departments: [
        { name: 'Exams Schedules', link: '/BL' },
        { name: 'Class Time Tables', link: '/BWL' },
        { name: 'Other Notifications', link: '/BWL' },
        
      ],
    },
    

  
  ];

  return (
    <div className="custom-popup">
      {students.map((students, index) => (
        <div key={index}>
          <h3 className="title-name">{students.name}</h3>
          <DepartmentLinks departments={students.departments} />
        </div>
      ))}
    </div>
  );
}




export default StudentsPopup;