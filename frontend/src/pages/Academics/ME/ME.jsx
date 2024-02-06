import React from 'react';
import './ME.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Programs from './Programs';
import Faculty from './Faculty';

const ME = () => {
  return (
    <div className="me-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route index element={
            <>
              <h1>Welcome to the Mechanical Engineering Engineering Department</h1>
              <div style={{ height: '300px' }}></div> {/* Placeholder for Image */}

              <h3>Introduction</h3>
              <p>
                Computer engineering is one of the fastest growing engineering disciplines which encompasses nearly every aspect of modern life. Being an integral part of our daily life, computer technology has an increasing demand for highly skilled professionals to keep up pace with its rampant growth and innovation.

                Keeping in view the significance and impact of this field, the CSE department, as per its mission, strives to develop and maintain a high-quality, comprehensive, rigorous and accredited teaching program to prepare graduates of competence, conscience, and compassion to excel in the field of computing. In order to achieve this goal, we combine the theoretical foundations of computing with the practical engineering knowledge vital to industry, to provide a broad and integrated curriculum. Equipped with modern state-of-the-art laboratories, trained technical staff, and highly qualified faculty, the department of Computer Systems Engineering offers following degree programs:

                1. Bachelor of Engineering (Computer Systems Engineering)
                2. Master of Engineering (Computer Systems Engineering)
                3. Master of Engineering (Computer Communication & Networks)
                4. Ph.D. (Computer Systems Engineering)
              </p>
              <div style={{ height: '300px' }}></div> {/* Placeholder for Image */}

              <h3>Vision Statement</h3>
              <p>
                To produce highly skilled computer engineers to meet the latest trends in the field of computing and to contribute effectively in the social, economic and technological progress of the country.
              </p>
              <div style={{ height: '300px' }}></div> {/* Placeholder for Image */}

              <h3>Mission Statement</h3>
              <p>
                To provide state-of-the-art education through contemporary techniques in the computing disciplines to produce outstanding professionals and better humans who could not only contribute effectively to the national progress, but can also promulgate and conceive computing knowledge.
              </p>
              <div style={{ height: '300px' }}></div> {/* Placeholder for Image */}

              <h3>Program Educational Objectives (PEOs)</h3>
              <p>
                <li>To produce adept computer professionals who have profound knowledge and proficiency in computer engineering and modern technological tools.</li>

               <li>To enable our graduates to be employed as practicing engineers in the fields of analysis, design, and application-specific computing systems for solving real-world and complex problems to contribute towards the socio-economic and technological growth of the country.</li>

               <li>To develop and refine the ethical, communication, management and leadership skills in the students to prepare them for assuming responsible positions within an organization.</li>

               <li>To enable our graduates for a self-motivated pursuit of knowledge throughout their life in individual and team environment for sustainable development.</li>
              </p>
              <p>
                For more information, please <a href="#">click to visit CSE department website</a>.
              </p>
            </>
          } />
          <Route path="programs" element={<Programs />} />
          <Route path="faculty" element={<Faculty />} />
        </Routes>
      </div>
    </div>
  );
};

export default ME;
