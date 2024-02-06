// E:\QUESTWEB\backend\models\publications.js

module.exports = (sequelize, DataTypes) => {
    const Publications = sequelize.define('publications', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        faculty_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        publication_type: DataTypes.STRING,
        details: DataTypes.TEXT
        // Add other fields as needed
    });

    return Publications;
};

