const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Champ = require('./Champs'); 

const Prevision = sequelize.define('table_previsions_meteos', {
    id_prevision: { type: DataTypes.STRING, primaryKey: true },
    champ_id: { type: DataTypes.INTEGER, allowNull: false },
    temperature: { type: DataTypes.DECIMAL, allowNull: false },
    humidite: { type: DataTypes.DECIMAL, allowNull: false },
    precipitation: { type: DataTypes.DECIMAL, allowNull: false}
}, {
    timestamp: true
});

module.exports = Prevision;