const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Role = require('./Roles');

const Utilisateur = sequelize.define('table_utilisateurs', {
    id_utilisateurs: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom:  { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.INTEGER, allowNull: false }, 
    mot_de_passe: { type: DataTypes.STRING, allowNull: false },
    role_id: { type: DataTypes.INTEGER, allowNull: true}
}, {
    timestamp: true 
});

module.exports = Utilisateur;