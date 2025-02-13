
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Utilisateur = require('./Utilisateurs');

const Livraison = sequelize.define('table_livraison', {
    id_livraison: { type: DataType.INTEGER, allowNull: false },
    utilisateur_id: { type: DataTypes.INTEGER, allowNull: false },	
    acheteur: { type: DataTypes.INTEGER, allowNull: false },	
    produit: { type: DataTypes.STRING, allowNull: false },	
    destination: { type: DataTypes.TEXT, allowNull: false },	
    etat: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamp: true
});

Livraison.belongsTo(Utilisateur, {foreignKey: 'utilisateur_id'});
Utilisateur.hasMany(Livraison, { foreignKey: 'id_utilisateurs'});

module.exports = Livraison;