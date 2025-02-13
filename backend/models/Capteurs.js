const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Champ = require('./Champs');

const Capteur = sequelize.define('table_capteurs', {
    id_capteur: { type: DataTypes.INTEGER, autoIncrement: true },
    champ_id: { type: DataTypes.INTEGER, allowNull: false }, 	
    type_capteur: { type: DataTypes.STRING, allowNull: false }, 	
    valeur: { type: DataTypes.DECIMAL, allowNull: false }
}, {
    timestamp: true
});

Capteur.belongsTo(Champ, { foreignKey: 'champ_id'});
Champ.hasMany(Capteur, { foreignKey: 'is_champs'});

module.exports = Capteur;