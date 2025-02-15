const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Utilisateur = require('./Utilisateurs');

const Champ = sequelize.define('table_champs', {
    is_champs: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    utilisateur_id:	{ type: DataTypes.INTEGER, allowNull: false },
    nom: { type: DataTypes.STRING, allowNull: false },
    surface: { type: DataTypes.DECIMAL, allowNull: false },
    type_culture: { type: DataTypes.STRING, allowNull: false },	
    etat: {type: DataTypes.STRING, allowNull: false }
}, {
    timestamp: true
});

Champ.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id'});
Utilisateur.hasMany(Champ, { foreignKey: 'id_utilisateurs'});

module.exports = Champ;