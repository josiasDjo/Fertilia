const { DataTypes } = require('sequelize')
const sequelize = require('./index');
const Fournisseur = require('./Fournisseur');
const Utilisateur = require('./Utilisateurs');

const Commande_Fournisseur = sequelize.define('table_commande_fournisseur', {
    id_commande: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    produit: { type: DataTypes.STRING, allowNull: false },
    type_produit: { type: DataTypes.STRING, allowNull: false },
    quantite: { type: DataTypes.FLOAT, allowNull: false },
    unite: { }
})