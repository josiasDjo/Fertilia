const { DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('./index');
const Utilisateur = require('./Utilisateurs');

const Champ = sequelize.define('table_champs', {
    is_champs: { type: DataTypes.STRING, primaryKey: true },
    utilisateur_id:	{ type: DataTypes.INTEGER, allowNull: false },
    nom: { type: DataTypes.STRING, allowNull: false },
    surface: { type: DataTypes.DECIMAL, allowNull: false },
    type_culture: { type: DataTypes.STRING, allowNull: false },	
    longitude: { type: DataTypes.FLOAT, allowNull: true},
    latitude: { type: DataTypes.FLOAT, allowNull: true},
    etat: {type: DataTypes.STRING, allowNull: false }
}, {
    timestamp: true
});

Champ.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id'});
Utilisateur.hasMany(Champ, { foreignKey: 'utilisateur_id'});

module.exports = Champ;