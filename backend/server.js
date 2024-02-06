const express = require('express');
const multer = require('multer');
const bcrypt = require('bcrypt');
const cors = require('cors');
const db = require('./helpers/db');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/fimages', express.static('E:/QUESTWEB/frontend/public/fimages/'));
app.use(express.static('public'));

// Define the storage configuration for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'E:/QUESTWEB/frontend/public/fimages/'); // Make sure this path exists and is writable
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Image upload route for faculty
app.post('/api/faculty/uploadImage', upload.single('image'), async (req, res) => {
    const { facultyId } = req.body; // Or however you're getting the faculty ID
    const imageUrl = `/fimages/${req.file.filename}`; // The path where the image is stored

    try {
        // Assuming 'db' is your Sequelize instance and 'faculty' is the model name
        await db.faculty.update({ fimages: imageUrl }, { where: { id: facultyId } });
        res.json({ message: 'Image uploaded successfully', imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Server error');
    }
});






    




// Registration Route
app.post('/register', async (req, res) => {
    const { username, password, designation, objectives } = req.body;
    const qualification = ''; // Initialize qualification with an empty string or the appropriate default value

    try {
        const existingUser = await db.faculty.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

await db.faculty.create({
    username,
    password: hashedPassword,
    name: '', // Default or empty if not required
    designation, // New field
    qualification,
    objectives,  // New field
    createdBy: 'system', // Default value
    updatedBy: 'system', // Default value

    // Add all new fields with default values
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

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).send('Server error: ' + error.message);
    }
});


// This route is just an example. Adjust it to fit your application structure.
app.post('/faculty/uploadImage/:id', upload.single('fimage'), async (req, res) => {
    const { id } = req.params;
    const imagePath = req.file.path;

    try {
        const faculty = await db.faculty.findByPk(id);
        if (!faculty) {
            return res.status(404).send('Faculty not found');
        }

        // Update the faculty record with the image path
        faculty.fimages = imagePath;
        await faculty.save();

        res.status(200).json({ message: 'Image uploaded successfully', imagePath });
    } catch (error) {
        console.error('Error uploading faculty image:', error);
        res.status(500).send('Server error');
    }
});




// Route to get faculty details by username
app.get('/api/faculty/:username', async (req, res) => {
    const { username } = req.params; // Get the username from the URL parameter
    
    try {
        // Fetch the faculty member by username, including related data as needed
        const facultyMember = await db.faculty.findOne({
            where: { username: username },
            include: [{ model: db.publications }], // Example: Including related publications
            // You can add other options here (attributes, etc.)
        });

        if (!facultyMember) {
            // If no faculty member is found with the given username, send a 404 response
            return res.status(404).send('Faculty member not found');
        }

        // If a faculty member is found, send back the faculty member's details
        res.json(facultyMember);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error fetching faculty member:', error);
        res.status(500).send('Server error');
    }
});


// Update Faculty Route
app.post('/updateFaculty', async (req, res) => {
    const {
        id,
        name,
        email,
        phoneNumber,
        department,
        qualification,
        designation,
        objectives,
        fimages,
        // Add all new fields here
        currentPortfolio,
        diplomas,
        professionalBackground,
        areasOfExpertise,
        currentResearchInterests,
        professionalSkills,
        researchImpact,
        fundedProjects,
        patents,
        coursesCurrentlyTeaching,
        coursesTaughtPreviously,
        supervisedCompletedTheses,
        currentlySupervisingTheses,
        proposedResearchTopics,
        professionalMemberships,
        awardsDistinctions,
        nominations,
        professionalCertificates,
        volunteerWork,
        otherDistinctions,
        personalInterests,
        officeHours,
        GoogleScholar,
        ORCID,
        LinkedIn,
        Scopus,
        personalWebsite
    } = req.body;


    try {
        const faculty = await db.faculty.findByPk(id);
        if (!faculty) {
            return res.status(404).send('Faculty not found');
        }

faculty.name = name || faculty.name;
faculty.email = email || faculty.email;
faculty.phoneNumber = phoneNumber || faculty.phoneNumber;
faculty.department = department || faculty.department;
faculty.designation = designation || faculty.designation; // Existing new field
faculty.fimages = fimages || faculty.fimages;
faculty.qualification = qualification || faculty.qualification; // Existing new field
faculty.objectives = objectives || faculty.objectives; // Existing new field


faculty.currentPortfolio = currentPortfolio || faculty.currentPortfolio;
faculty.diplomas = diplomas || faculty.diplomas;
faculty.professionalBackground = professionalBackground || faculty.professionalBackground;
faculty.areasOfExpertise = areasOfExpertise || faculty.areasOfExpertise;
faculty.currentResearchInterests = currentResearchInterests || faculty.currentResearchInterests;
faculty.professionalSkills = professionalSkills || faculty.professionalSkills;
faculty.researchImpact = researchImpact || faculty.researchImpact;
faculty.fundedProjects = fundedProjects || faculty.fundedProjects;
faculty.patents = patents || faculty.patents;
faculty.coursesCurrentlyTeaching = coursesCurrentlyTeaching || faculty.coursesCurrentlyTeaching;
faculty.coursesTaughtPreviously = coursesTaughtPreviously || faculty.coursesTaughtPreviously;
faculty.supervisedCompletedTheses = supervisedCompletedTheses || faculty.supervisedCompletedTheses;
faculty.currentlySupervisingTheses = currentlySupervisingTheses || faculty.currentlySupervisingTheses;
faculty.proposedResearchTopics = proposedResearchTopics || faculty.proposedResearchTopics;
faculty.professionalMemberships = professionalMemberships || faculty.professionalMemberships;
faculty.awardsDistinctions = awardsDistinctions || faculty.awardsDistinctions;
faculty.nominations = nominations || faculty.nominations;
faculty.professionalCertificates = professionalCertificates || faculty.professionalCertificates;
faculty.volunteerWork = volunteerWork || faculty.volunteerWork;
faculty.otherDistinctions = otherDistinctions || faculty.otherDistinctions;
faculty.personalInterests = personalInterests || faculty.personalInterests;
faculty.officeHours = officeHours || faculty.officeHours;
faculty.GoogleScholar = GoogleScholar || faculty.GoogleScholar;
faculty.LinkedIn = LinkedIn || faculty.LinkedIn;
faculty.Scopus = Scopus || faculty.Scopus;
faculty.ORCID = ORCID || faculty.ORCID;



faculty.personalWebsite = personalWebsite || faculty.personalWebsite;

await faculty.save();

        res.status(200).send('Profile updated successfully');
    } catch (error) {
        console.error('Error updating faculty:', error);
        res.status(500).send('Server error');
    }
});

// Get Faculty by ID Route
app.get('/faculty/:id', async (req, res) => {
    try {
        const facultyId = req.params.id;
        const facultyDetails = await db.faculty.findByPk(facultyId, {
            include: [db.publications]
        });

        if (!facultyDetails) {
            return res.status(404).send('Faculty not found');
        }

        res.json(facultyDetails);
    } catch (error) {
        console.error('Error fetching faculty:', error);
        res.status(500).send('Server error');
    }
});

// Example: API endpoint to get faculty members by department
app.get('/api/faculty/department/:department', async (req, res) => {
    const department = req.params.department;
    try {
        const facultyMembers = await db.faculty.findAll({
            where: { department: department }
        });
        res.json(facultyMembers);
    } catch (error) {
        console.error('Error fetching faculty by department:', error);
        res.status(500).send('Server error');
    }
});

app.get('/api/departments', async (req, res) => {
    try {
        const departments = await db.departments.findAll();
        res.json(departments);
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).send('Server error: ' + error.message);
    }
});



// Login Route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const faculty = await db.faculty.findOne({ where: { username } });
        if (!faculty) {
            return res.status(404).send('Faculty not found');
        }

        const validPassword = await bcrypt.compare(password, faculty.password);
        if (!validPassword) {
            return res.status(401).send('Invalid password');
        }

        const facultyData = {
            id: faculty.id,
            username: faculty.username
        };
        res.json(facultyData);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Server error');
    }
});


// Route to add a new publication
app.post('/addPublication', async (req, res) => {
    console.log(req.body); // Log the request body
    const { facultyId, publicationType, details } = req.body;
    try {
        const newPublication = await db.publications.create({
            faculty_id: facultyId,
            publication_type: publicationType,
            details: details
        });
        res.status(201).json(newPublication);
    } catch (error) {
        console.error('Error adding publication:', error);
        res.status(500).send('Server error');
    }
});

// Route to delete a publication
app.delete('/deletePublication/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Assuming 'db.publications' is correctly set up in your ORM
        const result = await db.publications.destroy({ where: { id } });
        if (result === 0) {
            return res.status(404).send('Publication not found');
        }
        res.send(`Publication with ID ${id} deleted`);
    } catch (error) {
        console.error('Error deleting publication:', error);
        res.status(500).send('Server error');
    }
});

// Route to modify a publication
app.put('/modifyPublication/:id', async (req, res) => {
    const { id } = req.params;
    const { details } = req.body;
    try {
        const publication = await db.publications.findByPk(id);
        if (!publication) {
            return res.status(404).send('Publication not found');
        }
        publication.details = details;
        await publication.save();
        res.json(publication); // Send back the updated publication as a response
    } catch (error) {
        console.error('Error modifying publication:', error);
        res.status(500).send('Server error');
    }
});

// server.js or routes file

app.get('/api/departments', async (req, res) => {
    try {
        const departments = await db.departments.findAll();
        res.json(departments);
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).send('Server error');
    }
});

app.get('/api/faculty/:facultyUsername', async (req, res) => {
    const { facultyUsername } = req.params;
    try {
        const facultyDetails = await db.faculty.findOne({
            where: { username: facultyUsername },
            include: [{
                model: db.publications, // Assuming 'publications' is the correct association name
                as: 'publications', // Use the alias defined in your association, if any
            }],
            attributes: ['id', 'name', 'designation', 'department', 'email', 'phoneNumber', 'fimages', 'currentPortfolio', 'qualifications'] // Ensure to include 'fimages' and any other fields you need
        });
        
        if (!facultyDetails) {
            return res.status(404).send('Faculty not found');
        }
        
        res.json(facultyDetails);
    } catch (error) {
        console.error('Error fetching faculty:', error);
        res.status(500).send('Server error');
    }
});



app.get('/api/faculty-directory', async (req, res) => {
    try {
        const facultyMembers = await db.faculty.findAll({
          attributes: ['id', 'name', 'designation', 'department', 'email', 'phoneNumber', 'currentPortfolio','fimages' ], // Include 'fimages'
        });
        res.json(facultyMembers);
      } catch (error) {
        console.error('Error fetching faculty directory:', error);
        res.status(500).send('Server error');
      }
    });


    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
