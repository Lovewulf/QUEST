import React from 'react';
import { Link } from 'react-router-dom';

function AcademicsPopup() {
  const academics = [
    {
      mainSection: {
        name: 'Programs',
        links: [
          { name: 'Undergraduate', link: '/undergraduate' },
          { name: 'Postgraduate', link: '/postgraduate' },
        ],
      },


      directorates: {
        name: 'Directorates',
        links: [
          { name: 'Directorate of Post Graduate Studies', link: '/post-graduate-studies' },
          { name: 'Continuing Eductation', link: '/continuing' },
        ],
      },

      additionalSection: {
        name: 'Additional Resources',
        links: [
          { name: 'Acedemic Calender', link: '/post-graduate-studies' },
          { name: 'Office of the Research, Innovation and Commercialization ', link: '/research-innovation' },
        ],
      }
    },
    // ... other academic sections
  ];

  return (

    
    <div className="custom-popup">
      {academics.map((section, index) => (
        <div key={index} className="popup-row">
          <div className="popup-column">
            <h3 className="title-name">{section.mainSection.name}</h3>
            <ul>
              {section.mainSection.links.map((linkItem, linkIndex) => (
                <li key={linkIndex}>
                  <Link to={linkItem.link} className="small-text">{linkItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        
          <div className="popup-column">
            <h3 className="title-name">{section.directorates.name}</h3>
            <ul>
              {section.directorates.links.map((linkItem, linkIndex) => (
                <li key={linkIndex}>
                  <Link to={linkItem.link} className="small-text">{linkItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        


          
          <div className="popup-column">
            <h3 className="title-name">{section.additionalSection.name}</h3>
            <ul>
              {section.additionalSection.links.map((linkItem, linkIndex) => (
                <li key={linkIndex}>
                  <Link to={linkItem.link} className="small-text">{linkItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AcademicsPopup;


