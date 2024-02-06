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

function ResearchPopup() {
  const hostels = [
    {
      name: 'Hostels and Accomodations',
      departments: [
        { name: 'Office of the Provohost', link: '/OP' },
        { name: 'In-campus Hostels and Accomodations', link: '/ICH' },
        { name: 'Fee Structure', link: '/FST' },
        { name: 'Accomodations for International Students', link: '/AIS' },
      
       
      ],
    },



    // ... other faculties
    {
      name: 'In-campus Hostels, and Blocks',
      departments: [
        { name: 'Blocks List', link: '/BL' },
        { name: 'Block-wiese Wardens List', link: '/BWL' },
        
      ],
    },
    
    

  
  ];

  return (
    <div className="custom-popup">
      {hostels.map((hostels, index) => (
        <div key={index}>
          <h3 className="title-name">{hostels.name}</h3>
          <DepartmentLinks departments={hostels.departments} />
        </div>
      ))}
    </div>
  );
}


export default ResearchPopup;