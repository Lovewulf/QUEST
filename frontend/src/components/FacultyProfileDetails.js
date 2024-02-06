import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './FacultyDirectory.css';


const FacultyProfileDetails = () => {
    const [facultyData, setFacultyData] = useState(null);
    const [error, setError] = useState(null);
    const { facultyUsername } = useParams();

    useEffect(() => {
        // Make sure the URL matches your server's endpoint
        fetch(`http://localhost:3001/api/faculty/${facultyUsername}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFacultyData(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setError(error.toString());
            });
    }, [facultyUsername]);

    const renderPublications = () => {
        // Assuming that publications are part of the facultyData
        if (facultyData && facultyData.publications && facultyData.publications.length > 0) {
            return facultyData.publications.map((publication, index) => (
                <li key={index}>{publication.title} - {publication.details}</li>
            ));
        }
        return <p>No publications available.</p>;
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!facultyData) {
        return <div>Loading...</div>;
    }


    return (

    
      <div>{/* Profile details */}

        <div className='faculty-detail'>
        <header className='height-100'>
            <div className='container h-10 d-flex flex-column align-items-center justify-content-center text-light'>
        <h1 className='text-center fw-semibold'>{facultyData.name}</h1>
            </div>
        </header>
    <div className='container my-5'>  
        
    <div className='faculty-profile-container'>
        <div className='left-column'>
          {facultyData.fimages && (
            <img src={`http://localhost:3001${facultyData.fimages}`} alt="Faculty" className="faculty-image" />
          )}<p></p>
          
          <p><strong> {facultyData.designation}</strong><strong> {facultyData.department}</strong></p>
          <p><strong></strong> {facultyData.currentPortfolio}</p>
          
          <p class="contact-info"><strong>Email:</strong> {facultyData.email}</p>
<p class="contact-info"><strong>Phone Number:</strong> {facultyData.phoneNumber}</p>

<p class="profile-links">
  {facultyData.GoogleScholar && (
    <a href={facultyData.GoogleScholar} target="_blank" rel="noopener noreferrer">
      <i class="bi bi-journal"></i> Google Scholar
    </a>
  )}
</p>

<p class="profile-links">
  {facultyData.Scopus && (
    <a href={facultyData.Scopus} target="_blank" rel="noopener noreferrer">
      <i class="bi bi-journal-medical"></i> Scopus
    </a>
  )}
</p>

<p class="profile-links">
  {facultyData.ORCID && (
    <a href={facultyData.ORCID} target="_blank" rel="noopener noreferrer">
      <i class="bi bi-person-badge"></i> ORCID
    </a>
  )}
</p>

<p class="profile-links">
  {facultyData.LinkedIn && (
    <a href={facultyData.LinkedIn} target="_blank" rel="noopener noreferrer">
      <i class="bi bi-linkedin"></i> LinkedIn
    </a>
  )}
</p>

<p class="profile-links">
  {facultyData.personalWebsite && (
    <a href={facultyData.personalWebsite} target="_blank" rel="noopener noreferrer">
      Personal Website
    </a>
  )}
</p>


          <p><strong>Office Hours:</strong> {facultyData.officeHours}</p>
        </div>


        <div className='vertical-line'></div> {/* This is the vertical line */}

        <div className='right-column'>
        
         
        
        <p><strong>Biography:</strong></p> 
        <p>{facultyData.objectives}</p> {/* Add Biography if available */}
        <hr />
          <p><strong>Qualification:</strong> <p></p>{facultyData.qualification}</p>
           <hr />
          
          <p><strong>Diplomas:</strong> <p></p>{facultyData.diplomas}</p> <hr />
          <p><strong>Professional Background:</strong> <p></p> {facultyData.professionalBackground}</p> <hr />
          <p><strong>Areas of Expertise:</strong> <p></p>{facultyData.areasOfExpertise}</p> <hr />

          <h3>Publications</h3>
          <ul>{renderPublications()}</ul> <hr />


          <p><strong>Professional Skills:</strong> <p></p> {facultyData.professionalSkills}</p> <hr />
          <p><strong>Research Impact:</strong> <p></p>{facultyData.researchImpact}</p> <hr />
          <p><strong>Funded Projects:</strong> <p></p>{facultyData.fundedProjects}</p> <hr />
          <p><strong>Patents:</strong><p></p> {facultyData.patents}</p> <hr />
          <p><strong>Courses Currently Teaching:</strong><p></p> {facultyData.coursesCurrentlyTeaching}</p> <hr />
          <p><strong>Courses Taught Previously:</strong><p></p> {facultyData.coursesTaughtPreviously}</p> <hr />
          <p><strong>Supervised Completed Theses:</strong> <p></p>{facultyData.supervisedCompletedTheses}</p> <hr />
          <p><strong>Currently Supervising Theses:</strong> <p></p>{facultyData.currentlySupervisingTheses}</p> <hr />
          <p><strong>Proposed Research Topics:</strong><p></p> {facultyData.proposedResearchTopics}</p> <hr />
          <p><strong>Professional Memberships:</strong><p></p> {facultyData.professionalMemberships}</p> <hr />
          <p><strong>Awards & Distinctions:</strong> <p></p>{facultyData.awardsDistinctions}</p> <hr />
          <p><strong>Nominations:</strong><p></p> {facultyData.nominations}</p> <hr />
          <p><strong>Professional Certificates:</strong> <p></p>{facultyData.professionalCertificates}</p> <hr />
          <p><strong>Volunteer Work:</strong><p></p> {facultyData.volunteerWork}</p> <hr />
          <p><strong>Other Distinctions:</strong><p></p> {facultyData.otherDistinctions}</p> <hr />
          <p><strong>Personal Interests:</strong><p></p> {facultyData.personalInterests}</p> <hr />
          <p><strong>Office Hours:</strong><p></p> {facultyData.officeHours}</p> <hr />
          <p><strong>Personal Website:</strong><p></p> {facultyData.personalWebsite}</p> <hr />
         
      </div>
      </div>
      </div>
      </div>
      </div>

     
  );
  
};

export default FacultyProfileDetails;