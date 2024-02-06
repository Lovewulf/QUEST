import React from 'react';
import { Link } from 'react-router-dom';

function DepartmentLinks({ departments }) {
  return (
    <ul>
      {departments.map((about, index) => (
        <li key={index}>
          <Link to={about.link} className="small-text">{about.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function AboutPopup() {
  const about = [
    {
      name: 'Events and Activities',
      departments: [
        { name: 'Events & Activies Calender', link: '/OP' },
        { name: 'Picture Galary', link: '/ICH' },
        { name: 'about Letter', link: '/FST' },
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
      {about.map((about, index) => (
        <div key={index}>
          <h3 className="title-name">{about.name}</h3>
          <DepartmentLinks departments={about.departments} />
        </div>
      ))}
    </div>
  );
}




export default AboutPopup;