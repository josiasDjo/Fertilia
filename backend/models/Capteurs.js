const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Champ = require('./Champs');

const Capteur = sequelize.define('table_capteurs', {
    id_capteur: { type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true },
    champ_id: { type: DataTypes.INTEGER, allowNull: false }, 	
    type_capteur: { type: DataTypes.STRING, allowNull: false }, 	
    valeur: { type: DataTypes.DECIMAL, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: true},
    latitude: { type: DataTypes.FLOAT, allowNull: true}
}, {
    timestamp: true
});

Capteur.belongsTo(Champ, { foreignKey: 'champ_id'});
Champ.hasMany(Capteur, { foreignKey: 'is_champs'});

module.exports = Capteur;