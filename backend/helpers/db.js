const config = require('../config/db.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const path = require('path');


const db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    await connection.end(); // Don't forget to close the connection
    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init Faculty model
    db.faculty = require(path.join(__dirname, '..', 'models', 'faculty'))(sequelize, Sequelize);

    // init Publications model
    db.publications = require(path.join(__dirname, '..', 'models', 'publications'))(sequelize, Sequelize);

    
    


// Establish relationships
db.faculty.hasMany(db.publications, { foreignKey: 'faculty_id' });
db.publications.belongsTo(db.faculty, { foreignKey: 'faculty_id' });

// sync all models with database
await sequelize.sync({ alter: true }); // Use with caution in production
}

initialize().catch(console.error);
// Rest of your code...
module.exports = db;