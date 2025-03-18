const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Utilisateur = require('./Utilisateurs');

const Fournisseur = sequelize.define('table_fournisseur', {
    id_fournisseur : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom_fournisseur: { type: DataTypes.STRING, allowNull: false },
    contact_fournisseur: { type: DataTypes.STRING, allowNull: false },
    id_utilisateurs : { type: DataTypes.INTEGER, allowNull: false },
}, {
    timestamp: true 
});

Fournisseur.belongsTo(Utilisateur, { foreignKey: 'id_utilisateurs'});
Utilisateur.hasMany(Stock, { foreignKey: 'id_utilisateurs' });

module.exports = Fournisseur;