import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GenericStyles.css';
import Faculties from '../pages/Faculties/Faculties';

const FacultyProfile = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [facultyData, setFacultyData] = useState({
    
    
        username: '',
        name: '',
        designation: '',
        qualification: '',
        objectives: '',
        email: '',
        fimages: '',
        phoneNumber: '',
        department: '',
        publications: [],
        // Add all new fields with initial empty values
        currentPortfolio: '',
        diplomas: '',
        professionalBackground: '',
        areasOfExpertise: '',
        currentResearchInterests: '',
        professionalSkills: '',
        researchImpact: '',
        fundedProjects: '',
        patents: '',
        coursesCurrentlyTeaching: '',
        coursesTaughtPreviously: '',
        supervisedCompletedTheses: '',
        currentlySupervisingTheses: '',
        proposedResearchTopics: '',
        professionalMemberships: '',
        awardsDistinctions: '',
        nominations: '',
        professionalCertificates: '',
        volunteerWork: '',
        otherDistinctions: '',
        personalInterests: '',
        officeHours: '',
        GoogleScholar: '',
        ORCID: '',
        LinkedIn: '',
        Scopus: '',
        personalWebsite: ''
    });

    const { id } = useParams();


    // Define the uploadImage function here
    const uploadImage = async () => {
        if (!selectedImage) {
            alert('Please select an image first.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage); // Make sure 'image' matches the name expected by the server
        formData.append('facultyId', facultyData.id); // Assuming faculty ID is stored in facultyData

        try {
            const response = await fetch('http://localhost:3001/api/faculty/uploadImage', {
                method: 'POST',
                body: formData, // FormData will set the content type to 'multipart/form-data' automatically
            });

            if (!response.ok) throw new Error('Failed to upload image.');

            const result = await response.json();
            alert(`Image uploaded successfully: ${result.imageUrl}`);

            // Update the facultyData state with the new image URL if necessary
            setFacultyData(prevState => ({
                ...prevState,
                fimages: result.imageUrl
            }));
        } catch (error) {
            console.error('Image upload error:', error);
            alert('Image upload failed.');
        }
    };

    
    
    const [showPublicationModal, setShowPublicationModal] = useState(false);
    const [showModifyModal, setShowModifyModal] = useState(false);
    const [newPublication, setNewPublication] = useState({ type: '', details: '' });
    const [modifyingPublication, setModifyingPublication] = useState({ id: null, details: '' });
    const [tempValues, setTempValues] = useState({ 
    name: '', 
    email: '', 
    fimages: '',
    designation: '', 
    qualification: '', 
    objectives: '', 
    phoneNumber: '', 
    department: '',

    // Add all new fields with initial empty values
    currentPortfolio: '',
    diplomas: '',
    professionalBackground: '',
    areasOfExpertise: '',
    currentResearchInterests: '',
    professionalSkills: '',
    researchImpact: '',
    fundedProjects: '',
    patents: '',
    coursesCurrentlyTeaching: '',
    coursesTaughtPreviously: '',
    supervisedCompletedTheses: '',
    currentlySupervisingTheses: '',
    proposedResearchTopics: '',
    professionalMemberships: '',
    awardsDistinctions: '',
    nominations: '',
    professionalCertificates: '',
    volunteerWork: '',
    otherDistinctions: '',
    personalInterests: '',
    officeHours: '',
    GoogleScholar: '',
    ORCID: '',
    LinkedIn: '',
    Scopus: '',
    personalWebsite: ''
});
    
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/faculty/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Add this line to inspect the publications data
                console.log("Publications Data:", data.publications);
    
                setFacultyData(data);
                setTempValues({
                    name: data.name || '', 
                    email: data.email || '', 
                    fimages: data.fimages || '', 
                    phoneNumber: data.phoneNumber || '', 
                    department: data.department || '',
                    designation: data.designation || '', 
                    qualification: data.qualification || '',
                    objectives: data.objectives || '',
                
                    // Include all new fields
                    currentPortfolio: data.currentPortfolio || '',
                    diplomas: data.diplomas || '',
                    professionalBackground: data.professionalBackground || '',
                    areasOfExpertise: data.areasOfExpertise || '',
                    currentResearchInterests: data.currentResearchInterests || '',
                    professionalSkills: data.professionalSkills || '',
                    researchImpact: data.researchImpact || '',
                    fundedProjects: data.fundedProjects || '',
                    patents: data.patents || '',
                    coursesCurrentlyTeaching: data.coursesCurrentlyTeaching || '',
                    coursesTaughtPreviously: data.coursesTaughtPreviously || '',
                    supervisedCompletedTheses: data.supervisedCompletedTheses || '',
                    currentlySupervisingTheses: data.currentlySupervisingTheses || '',
                    proposedResearchTopics: data.proposedResearchTopics || '',
                    professionalMemberships: data.professionalMemberships || '',
                    awardsDistinctions: data.awardsDistinctions || '',
                    nominations: data.nominations || '',
                    professionalCertificates: data.professionalCertificates || '',
                    volunteerWork: data.volunteerWork || '',
                    otherDistinctions: data.otherDistinctions || '',

                    GoogleScholar: data.GoogleScholar|| '',
                    LinkedIn: data.LinkedIn || '',
                    ORCID: data.ORCID || '',
                    Scopus: data.Scopus || '',

                    officeHours: data.officeHours || '',
                    personalWebsite: data.personalWebsite || ''
                });

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [id]);

    
    

    const handleUpdate = async (field) => {
        try {
            const updatedData = { ...facultyData, [field]: tempValues[field] };
            const response = await fetch(`http://localhost:3001/updateFaculty`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) throw new Error(await response.text());
            setFacultyData(updatedData);
            alert(`${field} updated successfully`);
        } catch (error) {
            console.error('Update error:', error);
            alert('Update failed: ' + error.message);
        }
    };

    const addPublication = async () => {
        try {
            const response = await fetch('http://localhost:3001/addPublication', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    facultyId: id, 
                    publicationType: newPublication.type, 
                    details: newPublication.details 
                })
            });

            if (!response.ok) throw new Error(await response.text());
            const addedPublication = await response.json();
            setFacultyData({
                ...facultyData,
                publications: [...facultyData.publications, addedPublication]
            });
            setNewPublication({ type: '', details: '' });
            setShowPublicationModal(false);
        } catch (error) {
            console.error('Error adding publication:', error);
            alert('Error adding publication: ' + error.message);
        }
    };

    const deletePublication = async (pubId) => {
        try {
            const response = await fetch(`http://localhost:3001/deletePublication/${pubId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });
    
            if (!response.ok) throw new Error(await response.text());
    
            // Filter out the deleted publication from the state
            setFacultyData({
                ...facultyData,
                publications: facultyData.publications.filter(pub => pub.id !== pubId)
            });
    
            alert('Publication deleted successfully');
        } catch (error) {
            console.error('Error deleting publication:', error);
            alert('Error deleting publication: ' + error.message);
        }
    };
    
    const openModifyModal = (publication) => {
        setModifyingPublication({ id: publication.id, details: publication.details });
        setShowModifyModal(true);
    };

    const modifyPublication = async () => {
        try {
            const response = await fetch(`http://localhost:3001/modifyPublication/${modifyingPublication.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ details: modifyingPublication.details })
            });

            if (!response.ok) throw new Error(await response.text());

            const modifiedPublication = await response.json();

            setFacultyData({
                ...facultyData,
                publications: facultyData.publications.map(pub =>
                    pub.id === modifyingPublication.id ? modifiedPublication : pub
                )
            });

            setShowModifyModal(false);
            alert('Publication modified successfully');
        } catch (error) {
            console.error('Error modifying publication:', error);
            alert('Error modifying publication: ' + error.message);
        }
    };

    

   // Group publications by type
const groupedPublications = facultyData.publications.reduce((acc, publication) => {
    // Default to 'Other' if publication_type is undefined or empty
    const type = publication.publication_type || 'Other';
    acc[type] = acc[type] || [];
    acc[type].push({ ...publication, details: publication.details });
    return acc;
}, {});

    return (
        <div className='faculty-Profile'>
        <header className='height-100'>
            
                <h1 className='text-center fw-semibold'>Faculty Profile</h1>
                <h2 className='text-center w-100 mb-5'>Welcome, {facultyData.username}!</h2>
                <h3 className='text-center w-100 mb-2'>Please Enter your details.</h3>
           
        </header>
    <div className='container my-5'>  
            <div className="form">
                {/* Update faculty details */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={tempValues.name}
                        onChange={(e) => setTempValues({ ...tempValues, name: e.target.value })}
                    />
                    <button onClick={() => handleUpdate('name')}>Update Name</button>
                </div>

                <div>
                <label htmlFor="imageUpload">Profile Image:</label>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <button onClick={uploadImage}>Upload Image</button>
            </div>


                

                {/* Shiraz New field for Designation */}
                <div>
                    <label>Designation:</label>
                    <input
                        type="text"
                        value={tempValues.designation}
                        onChange={(e) => setTempValues({ ...tempValues, designation: e.target.value })}
                    />
                    <button onClick={() => handleUpdate('designation')}>Update Designation</button>
                </div>

                


                {/* New field for Qualification */}
                <div>
                    <label>Qualifications:</label>
                    <textarea
                        value={tempValues.qualification}
                        onChange={(e) => setTempValues({ ...tempValues, qualification: e.target.value })}
                        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                    />
                    <button onClick={() => handleUpdate('qualification')}>Update Qualifications</button>
                </div>

                {/* New field for Objectives */}
                <div>
                    <label>Objectives:</label>
                    <textarea
                        value={tempValues.objectives}
                        onChange={(e) => setTempValues({ ...tempValues, objectives: e.target.value })}
                        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                    />
                    <button onClick={() => handleUpdate('objectives')}>Update Objectives</button>
                </div>

            


                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={tempValues.email}
                        onChange={(e) => setTempValues({ ...tempValues, email: e.target.value })}
                    />
                    <button onClick={() => handleUpdate('email')}>Update Email</button>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={tempValues.phoneNumber}
                        onChange={(e) => setTempValues({ ...tempValues, phoneNumber: e.target.value })}
                    />
                    <button onClick={() => handleUpdate('phoneNumber')}>Update Phone Number</button>
                </div>
                
                        {/* New field for Current Portfolio */}
<div>
    <label>Current Portfolio:</label>
    <textarea
        value={tempValues.currentPortfolio}
        onChange={(e) => setTempValues({ ...tempValues, currentPortfolio: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('currentPortfolio')}>Update Current Portfolio</button>
</div>

{/* New field for Diplomas */}
<div>
    <label>Diplomas:</label>
    <textarea
        value={tempValues.diplomas}
        onChange={(e) => setTempValues({ ...tempValues, diplomas: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('diplomas')}>Update Diplomas</button>
</div>

{/* Repeat this structure for each new field */}
{/* Example for Professional Background */}
<div>
    <label>Professional Background:</label>
    <textarea
        value={tempValues.professionalBackground}
        onChange={(e) => setTempValues({ ...tempValues, professionalBackground: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('professionalBackground')}>Update Professional Background</button>
</div>

{/* Example for Areas Of Expertise */}
<div>
    <label>Areas Of Expertise:</label>
    <textarea
        value={tempValues.areasOfExpertise}
        onChange={(e) => setTempValues({ ...tempValues, areasOfExpertise: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('areasOfExpertise')}>Update Areas Of Expertise</button>
</div>

{/* Continue this pattern for each new field */}
{/* New field for Current Research Interests */}
<div>
                <label>Current Research Interests:</label>
                <textarea
                    value={tempValues.currentResearchInterests}
                    onChange={(e) => setTempValues({ ...tempValues, currentResearchInterests: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('currentResearchInterests')}>Update Current Research Interests</button>
            </div>

            {/* New field for Professional Skills */}
            <div>
                <label>Professional Skills:</label>
                <textarea
                    value={tempValues.professionalSkills}
                    onChange={(e) => setTempValues({ ...tempValues, professionalSkills: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('professionalSkills')}>Update Professional Skills</button>
            </div>

            {/* New field for Office Hours */}
            <div>
                <label>Office Hours:</label>
                <input
                    type="text"
                    value={tempValues.officeHours}
                    onChange={(e) => setTempValues({ ...tempValues, officeHours: e.target.value })}
                    style={{ width: '100%', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('officeHours')}>Update Office Hours</button>
            </div>

            {/* Repeat for all remaining fields like Research Impact, Funded Projects, etc. */}

            {/* Example for Research Impact */}
            <div>
                <label>Research Impact:</label>
                <textarea
                    value={tempValues.researchImpact}
                    onChange={(e) => setTempValues({ ...tempValues, researchImpact: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('researchImpact')}>Update Research Impact</button>
            </div>

            {/* New field for Funded Projects */}
<div>
    <label>Funded Projects:</label>
    <textarea
        value={tempValues.fundedProjects}
        onChange={(e) => setTempValues({ ...tempValues, fundedProjects: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('fundedProjects')}>Update Funded Projects</button>
</div>

{/* New field for Courses Currently Teaching */}
<div>
                <label>Courses Currently Teaching:</label>
                <textarea
                    value={tempValues.coursesCurrentlyTeaching}
                    onChange={(e) => setTempValues({ ...tempValues, coursesCurrentlyTeaching: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('coursesCurrentlyTeaching')}>Update Courses Currently Teaching</button>
           
            </div>

            {/* New field for Courses Taught Previously */}
            <div>
                <label>Courses Taught Previously:</label>
                <textarea
                    value={tempValues.coursesTaughtPreviously}
                    onChange={(e) => setTempValues({ ...tempValues, coursesTaughtPreviously: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('coursesTaughtPreviously')}>Update Courses Taught Previously</button>
            </div>

            {/* New field for Supervised Completed Theses */}
            <div>
                <label>Supervised Completed Theses:</label>
                <textarea
                    value={tempValues.supervisedCompletedTheses}
                    onChange={(e) => setTempValues({ ...tempValues, supervisedCompletedTheses: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('supervisedCompletedTheses')}>Update Supervised Completed Theses</button>
            </div>

            {/* New field for Currently Supervising Theses */}
            <div>
                <label>Currently Supervising Theses:</label>
                <textarea
                    value={tempValues.currentlySupervisingTheses}
                    onChange={(e) => setTempValues({ ...tempValues, currentlySupervisingTheses: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('currentlySupervisingTheses')}>Update Currently Supervising Theses</button>
            </div>

            {/* New field for Proposed Research Topics */}
            <div>
                <label>Proposed Research Topics:</label>
                <textarea
                    value={tempValues.proposedResearchTopics}
                    onChange={(e) => setTempValues({ ...tempValues, proposedResearchTopics: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('proposedResearchTopics')}>Update Proposed Research Topics</button>
            </div>

            {/* New field for Professional Memberships */}
            <div>
                <label>Professional Memberships:</label>
                <input
                    type="text"
                    value={tempValues.professionalMemberships}
                    onChange={(e) => setTempValues({ ...tempValues, professionalMemberships: e.target.value })}
                    style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
                />
                <button onClick={() => handleUpdate('professionalMemberships')}>Update Professional Memberships</button>
            </div>

        {/* New field for Awards and Distinctions */}
        <div>
            <label>Awards and Distinctions:</label>
            <input
                type="text"
                value={tempValues.awardsDistinctions}
                onChange={(e) => setTempValues({ ...tempValues, awardsDistinctions: e.target.value })}
                style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
            />
            <button onClick={() => handleUpdate('awardsDistinctions')}>Update Awards and Distinctions</button>
        </div>

        {/* New field for Nominations */}
        <div>
            <label>Nominations:</label>
            <input
                type="text"
                value={tempValues.nominations}
                onChange={(e) => setTempValues({ ...tempValues, nominations: e.target.value })}
                style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
            />
            <button onClick={() => handleUpdate('nominations')}>Update Nominations</button>
        </div>

        {/* New field for Professional Certificates */}
        <div>
            <label>Professional Certificates:</label>
            <input
                type="text"
                value={tempValues.professionalCertificates}
                onChange={(e) => setTempValues({ ...tempValues, professionalCertificates: e.target.value })}
                style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
            />
            <button onClick={() => handleUpdate('professionalCertificates')}>Update Professional Certificates</button>
        </div>

        {/* New field for Volunteer Work */}
        <div>
            <label>Volunteer Work:</label>
            <textarea
                value={tempValues.volunteerWork}
                onChange={(e) => setTempValues({ ...tempValues, volunteerWork: e.target.value })}
                style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
            />
            <button onClick={() => handleUpdate('volunteerWork')}>Update Volunteer Work</button>
        </div>

        {/* New field for Other Distinctions */}
        <div>
            <label>Other Distinctions:</label>
            <textarea
                value={tempValues.otherDistinctions}
                onChange={(e) => setTempValues({ ...tempValues, otherDistinctions: e.target.value })}
                style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
            />
            <button onClick={() => handleUpdate('otherDistinctions')}>Update Other Distinctions</button>
        </div>

        {/* New field for Personal Interests */}
        <div>
            <label>Personal Interests:</label>
            <textarea
                value={tempValues.personalInterests}
                onChange={(e) => setTempValues({ ...tempValues, personalInterests: e.target.value })}
                style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
            />
            <button onClick={() => handleUpdate('personalInterests')}>Update Personal Interests</button>
        </div>

{/* New field for Patents */}
<div>
    <label>Patents:</label>
    <input
        type="text"
        value={tempValues.patents}
        onChange={(e) => setTempValues({ ...tempValues, patents: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('patents')}>Update Patents</button>
</div>


<div>
    <label>Google Scholar:</label>
    <input
        type="text"
        value={tempValues.GoogleScholar}
        onChange={(e) => setTempValues({ ...tempValues, GoogleScholar: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('GoogleScholar')}>Update Google Scholar</button>
</div>


<div>
    <label>ORCID:</label>
    <input
        type="text"
        value={tempValues.ORCID}
        onChange={(e) => setTempValues({ ...tempValues, ORCID: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('ORCID')}>Update ORCID</button>
</div>

<div>
    <label>LinkedIn:</label>
    <input
        type="text"
        value={tempValues.LinkedIn}
        onChange={(e) => setTempValues({ ...tempValues, LinkedIn: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('LinkedIn')}>Update LinkedIn</button>
</div>

<div>
    <label>Scopus:</label>
    <input
        type="text"
        value={tempValues.Scopus}
        onChange={(e) => setTempValues({ ...tempValues, Scopus: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('Scopus')}>Update Scopus</button>
</div>





{/* Example for Personal Website - Using input instead of textarea */}
<div>
    <label>Personal Website:</label>
    <input
        type="text"
        value={tempValues.personalWebsite}
        onChange={(e) => setTempValues({ ...tempValues, personalWebsite: e.target.value })}
        style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
    />
    <button onClick={() => handleUpdate('personalWebsite')}>Update Personal Website</button>
</div>






<div>
    <label>Department:</label>
    <select
        value={tempValues.department}
        onChange={(e) => setTempValues({ ...tempValues, department: e.target.value })}
    >
        <option value="">Select Department</option>
        <option value="Civil Engineering">Civil Engineering</option>
        <option value="Mechanical Engineering">Mechanical Engineering</option>
        <option value="Building & Architectural">Building & Architectural</option>
        <option value="Industrial & Manufacturing">Industrial & Manufacturing</option>
        <option value="Electrical Engineering">Electrical Engineering</option>
        <option value="Computer Systems">Computer Systems</option>
        <option value="Electronic Engineering">Electronic Engineering</option>
        <option value="Telecommunication Eng.">Telecommunication Eng.</option>
        <option value="Software Engineering">Software Engineering</option>
        <option value="Electrical (Automation and Control)">Electrical (Automation and Control)</option>
        <option value="Biomedical">Biomedical</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Cyber Security">Cyber Security</option>
        <option value="Data Science">Data Science</option>
        <option value="English">English</option>
        <option value="Mathematics & Statistics">Mathematics & Statistics</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Chemical Engineering">Chemical Engineering</option>
        <option value="Environment Engineering">Environment Engineering</option>
        <option value="Energy Systems Engineering">Energy Systems Engineering</option>
        <option value="Food Engineering Technology">Food Engineering Technology</option>
        <option value="Civil Technology">Civil Technology</option>
        <option value="Electrical Technology">Electrical Technology</option>
        <option value="Mechanical Technology">Mechanical Technology</option>
        <option value="Basic Sciences & Related Studies">Basic Sciences & Related Studies</option>
        {/* Add more options as needed */}
    </select>
    <button onClick={() => handleUpdate('department')}>Update Department</button>
</div>

            </div>

            {/* Displaying updated data */}
<div className="profile-display">
    <h2>Profile Information</h2>
    <p><strong>Name:</strong> {facultyData.name}</p>
    <p><strong>Designation:</strong> {facultyData.designation}</p>
    <p><strong>Qualification:</strong> {facultyData.qualification}</p>
    <p><strong>Objectives:</strong> {facultyData.objectives}</p>
    <p><strong>Email:</strong> {facultyData.email}</p>
    <p><strong>Phone:</strong> {facultyData.phoneNumber}</p>
    <p><strong>Department:</strong> {facultyData.department}</p>

    {/* New fields */}
    <p><strong>Current Portfolio:</strong> {facultyData.currentPortfolio}</p>
    <p><strong>Diplomas:</strong> {facultyData.diplomas}</p>
    <p><strong>Professional Background:</strong> {facultyData.professionalBackground}</p>
    <p><strong>Areas of Expertise:</strong> {facultyData.areasOfExpertise}</p>
    <p><strong>Current Research Interests:</strong> {facultyData.currentResearchInterests}</p>
    <p><strong>Professional Skills:</strong> {facultyData.professionalSkills}</p>
    <p><strong>Research Impact:</strong> {facultyData.researchImpact}</p>
    <p><strong>Funded Projects:</strong> {facultyData.fundedProjects}</p>
    <p><strong>Patents:</strong> {facultyData.patents}</p>
    <p><strong>Courses Currently Teaching:</strong> {facultyData.coursesCurrentlyTeaching}</p>
    <p><strong>Courses Taught Previously:</strong> {facultyData.coursesTaughtPreviously}</p>
    <p><strong>Supervised Completed Theses:</strong> {facultyData.supervisedCompletedTheses}</p>
    <p><strong>Currently Supervising Theses:</strong> {facultyData.currentlySupervisingTheses}</p>
    <p><strong>Proposed Research Topics:</strong> {facultyData.proposedResearchTopics}</p>
    <p><strong>Professional Memberships:</strong> {facultyData.professionalMemberships}</p>
    <p><strong>Awards and Distinctions:</strong> {facultyData.awardsDistinctions}</p>
    <p><strong>Nominations:</strong> {facultyData.nominations}</p>
    <p><strong>Professional Certificates:</strong> {facultyData.professionalCertificates}</p>
    <p><strong>Volunteer Work:</strong> {facultyData.volunteerWork}</p>
    <p><strong>Other Distinctions:</strong> {facultyData.otherDistinctions}</p>
    <p><strong>Personal Interests:</strong> {facultyData.personalInterests}</p>
    <p><strong>Office Hours:</strong> {facultyData.officeHours}</p>
    <p><strong>Google Scholar:</strong> {facultyData.GoogleScholar}</p>
    <p><strong>ORCID:</strong> {facultyData.ORCID}</p>
    <p><strong>Scopus:</strong> {facultyData.Scopus}</p>
    <p><strong>LinkedIn:</strong> {facultyData.LinkedIn}</p>
    <p><strong>Personal Website:</strong> {facultyData.personalWebsite}</p>
</div>

          {/* Research Publications Section */}
          <div>
        <h2>Research Publications</h2>
        <div className="publication-list">
            {Object.keys(groupedPublications).map((type) => (
                <div key={type}>
                    <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                    {groupedPublications[type].map((publication, index) => (
                        <div key={index} className="publication-item">
                            <p className="publication-details">{publication.details}</p>
                            <div className="publication-controls">
                                <button className="btn update-btn" onClick={() => openModifyModal(publication)}>Modify</button>
                                <button className="btn delete-btn" onClick={() => deletePublication(publication.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <button className="btn add-btn" onClick={() => setShowPublicationModal(true)}>+</button>
        </div>
    </div>

            {/* Modal for Adding Publications */}
    {showPublicationModal && (
        <div style={{ 
                position: 'fixed', 
                top: '10%', 
                left: '25%', 
                backgroundColor: 'white', 
                padding: '20px', 
                border: '1px solid black', 
                width: '50%', 
                boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' 
    }}>
        <h3>Add Publication</h3>
        <select 
            value={newPublication.type} 
            onChange={(e) => setNewPublication({ ...newPublication, type: e.target.value })}
            style={{ width: '100%', marginBottom: '10px' }}
        >
            <option value="">Select Type</option>
            <option value="journal">Journal Publication</option>
            <option value="conference">Conference</option>
            <option value="book">Book</option>
            <option value="bookChapter">Book Chapter</option>
            <option value="article">Article</option>
        </select>
        <textarea
            value={newPublication.details}
            onChange={(e) => setNewPublication({ ...newPublication, details: e.target.value })}
            style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
        ></textarea>
        <br />
        <button 
            onClick={addPublication} 
            disabled={!newPublication.type || !newPublication.details}
            style={{ marginRight: '10px' }}
        >Add</button>
        <button onClick={() => setShowPublicationModal(false)}>Cancel</button>
        </div>
    )}

            {/* Modal for Modifying Publications */}
        {showModifyModal && (
            <div className="modify-modal" style={{ position: 'fixed', top: '10%', left: '25%', backgroundColor: 'white', padding: '20px', border: '1px solid black', width: '50%', boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}>
            <h3>Modify Publication</h3>
            <textarea
                value={modifyingPublication.details}
                onChange={(e) => setModifyingPublication({ ...modifyingPublication, details: e.target.value })}
                style={{ width: '100%', minHeight: '100px', marginTop: '10px' }}
            ></textarea>
            <br />
            <button className="update-btn" onClick={() => modifyPublication()}>Modify</button>
            <button className="cancel-btn" onClick={() => setShowModifyModal(false)} style={{ marginLeft: '10px' }}>Cancel</button>
        </div>
        )}
        </div>

        </div>
    );
};

export default FacultyProfile;