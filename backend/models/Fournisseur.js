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

Stock.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id'});
Utilisateur.hasMany(Stock, { foreignKey: 'utilisateur_id' });

module.exports = Fournisseur;