const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Utilisateur = require('./Utilisateurs');

const Stock = sequelize.define('table_stocks', {
    id_stock: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    utilisateur_id: { type: DataTypes.INTEGER, allowNull: false },
    produit: { type: DataTypes.STRING, allowNull: false },
    type_produit: { type: DataTypes.STRING, allowNull: false },
    quantite: { type: DataTypes.DECIMAL, allowNull: false },
    unite: { type: DataTypes.STRING, allowNull: false },
    emplacement: { type: DataTypes.STRING, allowNull: false },
    fournisseur: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamp: true
});

Stock.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id '});
Utilisateur.hasMany(Stock, { foreignKey: 'utilisateur_id ' });

module.exports = Stock;