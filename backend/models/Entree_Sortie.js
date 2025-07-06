const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const utilisateur = require('./Utilisateurs');

const Entree_Sortie = sequelize.define('table_entree_sortie', {
    id_action: { type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true },
    produit: { type: DataTypes.STRING, allowNull: false },
    type_produit: { type: DataTypes.STRING, allowNull: false },
    quantite: { type: DataTypes.FLOAT, allowNull: false },
    unite: { type: DataTypes.STRING, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false },
    quantite_totale: { type: DataTypes.FLOAT, allowNull: false },
    id_utilisateurs: { type: DataTypes.INTEGER, allowNull: false },
}, {
    timestamps: true,
});

Entree_Sortie.belongsTo(utilisateur, { foreignKey: 'id_utilisateurs'});
utilisateur.hasMany(Entree_Sortie, { foreignKey: 'id_utilisateurs'});

module.exports = Entree_Sortie;