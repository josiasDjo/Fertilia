const sequelize = require('./index')
const { DataTypes } = require('sequelize')
const Champs = require('./Champs')
const Utilisateur = require('./Utilisateurs')

const Capteurs_equipment = sequelize.define('table_capteurs_equipement', {
    id_capteur: { type: DataTypes.STRING, primaryKey: true },
    nom_capteur: { type: DataTypes.STRING, allowNull: false }, 	
    type_capteur: { type: DataTypes.STRING, allowNull: false }, 	
    model_capteur: { type: DataTypes.STRING, allowNull: false }, 	
    numero_de_serie: { type: DataTypes.STRING, allowNull: false }, 	
    is_champs: { type: DataTypes.STRING, allowNull: false }, 	
    id_utilisateurs: { type: DataTypes.INTEGER, allowNull: false }, 	
    latitude: { type: DataTypes.FLOAT, allowNull: false }, 	
    longitude: { type: DataTypes.FLOAT, allowNull: false }, 	
    date_installation: { type: DataTypes.DATE, allowNull: false }, 	
    statut: { type: DataTypes.STRING, allowNull: false }, 	
    last_communication: {type: DataTypes.DATE, allowNull: false}, 	
    photo: { type: DataTypes.STRING, allowNull: false }, 	
}, {
    timestamps: true
})

Utilisateur.hasMany(Capteurs_equipment, { foreignKey: 'id_utilisateurs'})
Capteurs_equipment.belongsTo(Utilisateur, { foreignKey: 'id_utilisateurs'})
Champs.hasMany(Capteurs_equipment, { foreignKey: 'is_champs'})
Capteurs_equipment.belongsTo(Champs, { foreignKey: 'is_champs'})

module.exports = Capteurs_equipment