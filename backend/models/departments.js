// E:\QUESTWEB\backend\models\departments.js
module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // created_at and updated_at fields are handled automatically by Sequelize
    });

    return Department;
};
