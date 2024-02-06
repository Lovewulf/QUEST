import React from 'react';
import './CS.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Programs from './Programs';
import Faculty from './Faculty';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'; 
const CS = () => {
  return (

    <div className='cs'>
        <header className='height-100'>
            <div className='container h-10 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Computer Systems Engineering</h1>
               
            </div>
        </header>
        
    <div className='container my-1'>  

  
      
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route index element={
            <>
              
              <h3>Overview</h3>
              <p></p>
              <p>
                Computer engineering is one of the fastest growing engineering disciplines which encompasses nearly every aspect of modern life. Being an integral part of our daily life, computer technology has an increasing demand for highly skilled professionals to keep up pace with its rampant growth and innovation.
                <p></p>
                Keeping in view the significance and impact of this field, the CSE department, as per its mission, strives to develop and maintain a high-quality, comprehensive, rigorous and accredited teaching program to prepare graduates of competence, conscience, and compassion to excel in the field of computing. In order to achieve this goal, we combine the theoretical foundations of computing with the practical engineering knowledge vital to industry, to provide a broad and integrated curriculum. Equipped with modern state-of-the-art laboratories, trained technical staff, and highly qualified faculty, the department of Computer Systems Engineering offers following degree programs:
                <p></p>
                <li> Bachelor of Engineering (Computer Systems Engineering) </li>
                <li> Master of Engineering (Computer Systems Engineering) </li>
                <li> Master of Engineering (Computer Communication & Networks) </li>
                <li> Ph.D. (Computer Systems Engineering) </li>
              </p>
        

              
      
              <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Program Educational Objectives (PEOs)</Accordion.Header>
                    <Accordion.Body>
                    <li>To produce adept computer professionals who have profound knowledge and proficiency in computer engineering and modern technological tools.</li>

               <li>To enable our graduates to be employed as practicing engineers in the fields of analysis, design, and application-specific computing systems for solving real-world and complex problems to contribute towards the socio-economic and technological growth of the country.</li>

               <li>To develop and refine the ethical, communication, management and leadership skills in the students to prepare them for assuming responsible positions within an organization.</li>

               <li>To enable our graduates for a self-motivated pursuit of knowledge throughout their life in individual and team environment for sustainable development.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Vision Statement</Accordion.Header>
                    <Accordion.Body>
                    To produce highly skilled computer engineers to meet the latest trends in the field of computing and to contribute effectively in the social, economic and technological progress of the country.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Mission Statement</Accordion.Header>
                    <Accordion.Body>
                    To provide state-of-the-art education through contemporary techniques in the computing disciplines to produce outstanding professionals and better humans who could not only contribute effectively to the national progress, but can also promulgate and conceive computing knowledge.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How does QUEST support students financially?</Accordion.Header>
                    <Accordion.Body>
                    We offer various financial assistance options, including scholarships and loans from both government and private organizations. Our Financial Aid office works diligently to support meritorious and needy students, ensuring that financial constraints do not hinder educational pursuits.
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>What are the library and IT facilities like at QUEST?</Accordion.Header>
                    <Accordion.Body>
                    Our Central Library is well-stocked with a vast collection of books and journals, and it's equipped with a state-of-the-art reading environment. We also offer extensive IT services, including high-speed internet, a digital library, and hardware and software support, to facilitate advanced learning and research.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
              
            </>
          } />
          <Route path="programs" element={<Programs />} />
          <Route path="faculty" element={<Faculty />} />
        </Routes>
      </div>
    </div>
   
    </div>
    
  );
};



export default CS;
