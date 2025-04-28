const sequelize = require('./index')
const { DataTypes } = require('sequelize')

const Card = sequelize.define('v_champs_derniers_capteurs', {
    is_champs: { type: DataTypes.STRING, allowNull: false },
    utilisateur_id:{ type: DataTypes.INTEGER, allowNull: false },
    nom: { type: DataTypes.STRING, allowNull: false },
    surface: { type: DataTypes.DECIMAL, allowNull: false },
    type_culture: { type: DataTypes.STRING, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: true },
    latitude: { type: DataTypes.FLOAT, allowNull: true },
    etat: { type: DataTypes.STRING, allowNull: false },
    id_capteur: { type: DataTypes.STRING, allowNull: true },	
    nom_capteur: { type: DataTypes.STRING, allowNull: true },	
    type_capteur: { type: DataTypes.STRING, allowNull: true },	
    valeur: { type: DataTypes.DECIMAL, allowNull: true },	
    unit: { type: DataTypes.STRING, allowNull: true },	
    etat_connecte: { type: DataTypes.STRING, allowNull: true },	
    max_date: { type: DataTypes.DATE, allowNull: true },
}, {
    tableName: 'v_champs_derniers_capteurs',
    timestamps: false, 
    freezeTableName: true,     
    createdAt: false,
    updatedAt: false,
    primaryKey: false,
    id: false
})

module.exports = Card