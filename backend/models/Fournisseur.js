const sequelize = require('./index');
const { DataTypes, INTEGER } = require('sequelize');

const Fournisseur = sequelize.define('table_fournisseur', {
    id_fournisseur : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom_fournisseur: { type: DataTypes.STRING, allowNull: false },
    contact_fournisseur: { type: DataTypes.STRING, allowNull: false },
})