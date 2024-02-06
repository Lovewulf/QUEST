import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import FacultyPopup from './components/FacultyPopup';
import AcademicsPopup from './components/AcademicsPopup';
import AdmissionsPopup from './components/AdmissionsPopup';
import ResearchPopup from './components/ResearchPopup';
import StudentsPopup from './components/StudentsPopup';
import FacilitiesPopup from './components/FacilitiesPopup';
import HostelsPopup from './components/HostelsPopup';
import NewsPopup from './components/NewsPopup';
import AboutPopup from './components/AboutPopup';

function CustomNavbar() {
  const [showPopup, setShowPopup] = useState({
    faculties: false,
    academics: false,
    admissions: false,
    research: false,
    students: false,
    facilities: false,
    hostels: false,
    news: false,
    about: false,
  });

  const handleMouseEnter = (popup) => {
    setShowPopup({ ...showPopup, [popup]: true });
  };

  const handleMouseLeave = (popup) => {
    setShowPopup({ ...showPopup, [popup]: false });
  };


  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">QUEST | Nawabshah</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('academics')} onMouseLeave={() => handleMouseLeave('academics')}>
              <span className="nav-link">Academics</span>
              {showPopup.academics && <AcademicsPopup />}
            </div>
            {/* Repeat for other popups */}
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('faculties')} onMouseLeave={() => handleMouseLeave('faculties')}>
              <span className="nav-link">Faculties</span>
              {showPopup.faculties && <FacultyPopup />}
            </div>
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('research')} onMouseLeave={() => handleMouseLeave('research')}>
              <span className="nav-link">Research</span>
              {showPopup.research && <ResearchPopup />}
            </div>
            <div className="nav-item" onMouseEnter={() => handleMouseEnter('students')} onMouseLeave={() => handleMouseLeave('students')}>
              <span className="nav-link">Student Life</span>
              {showPopup.students && <StudentsPopup />}
            </div>

            <div className="nav-item" onMouseEnter={() => handleMouseEnter('news')} onMouseLeave={() => handleMouseLeave('news')}>
              <span className="nav-link">News and Events</span>
              {showPopup.news && <NewsPopup />}
            </div>

            <div className="nav-item" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={() => handleMouseLeave('about')}>
              <span className="nav-link">About</span>
              {showPopup.about && <AboutPopup />}
            </div>


            
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;



