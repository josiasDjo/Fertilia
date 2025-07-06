const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Roles = sequelize.define('table_roles', {
    id_role: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom_role: { type: DataTypes.STRING, allowNull:false }
}, {
    timestamps: true
})

module.exports = Roles;