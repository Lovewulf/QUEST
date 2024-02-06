import React from 'react';
import { Link } from 'react-router-dom';

function DepartmentLinks({ departments }) {
  return (
    <ul>
      {departments.map((news, index) => (
        <li key={index}>
          <Link to={news.link} className="small-text">{news.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function NewsPopup() {
  const news = [
    {
      name: 'Events and Activities',
      departments: [
        { name: 'Events & Activies Calender', link: '/OP' },
        { name: 'Picture Galary', link: '/ICH' },
        { name: 'News Letter', link: '/FST' },
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
      {news.map((news, index) => (
        <div key={index}>
          <h3 className="title-name">{news.name}</h3>
          <DepartmentLinks departments={news.departments} />
        </div>
      ))}
    </div>
  );
}




export default NewsPopup;