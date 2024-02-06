module.exports = (sequelize, DataTypes) => {
    const Faculty = sequelize.define('faculty', {


            id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: true  // If the name is not mandatory at registration
        },
        username: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        createdBy: { 
            type: DataTypes.STRING,
            allowNull: true  // If createdBy is not mandatory
        },
        updatedBy: { 
            type: DataTypes.STRING,
            allowNull: true  // If updatedBy is not mandatory
        },
        createdAt: { 
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: { 
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        designation: {
            type: DataTypes.STRING,
            allowNull: true
        },

   
        qualification: { // Add this new field with TEXT data type
            type: DataTypes.TEXT,
            allowNull: true
        },


        objectives: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        email: { 
            type: DataTypes.STRING,
            allowNull: true  // New field for email
        },

        fimages: {
            type: DataTypes.STRING,
            allowNull: true
        },

        phoneNumber: { 
            type: DataTypes.STRING,
            allowNull: true  // New field for phone number
        },
        department: {
            type: DataTypes.STRING,
            allowNull: true  // New field for department
        },

        
        
                // Add new fields
                currentPortfolio: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                diplomas: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                professionalBackground: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                areasOfExpertise: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                currentResearchInterests: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                professionalSkills: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                researchImpact: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                fundedProjects: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                patents: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                coursesCurrentlyTeaching: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                coursesTaughtPreviously: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                supervisedCompletedTheses: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                currentlySupervisingTheses: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                proposedResearchTopics: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                professionalMemberships: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                awardsDistinctions: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                nominations: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                professionalCertificates: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                volunteerWork: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                otherDistinctions: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                personalInterests: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                officeHours: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                personalWebsite: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },

                LinkedIn : {
                    
                    type: DataTypes.TEXT,
                    allowNull: true
                },

               Scopus: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },


                GoogleScholar: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },


                ORCID: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },

                

                
            });
        
            return Faculty;
        };
        