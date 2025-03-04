const { Sequelize } = require('sequelize');
require('dotenv').config();

// Création de l'instance Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || process.env.DB_HOST2,
        dialect: 'mysql', // Indique que l'on utilise MySQL
        logging: false, // Désactive les logs SQL dans la console
        pool: {
            max: 20,  // Nombre maximum de connexions simultanées
            min: 0,   // Nombre minimum de connexions
            acquire: 30000, // Temps max pour obtenir une connexion
            idle: 10000  // Temps max d'inactivité avant de fermer une connexion
        }
    }
);

// Vérifier la connexion
async function checkDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Connecté à la base de données MySQL avec Sequelize');
    } catch (err) {
        console.error('❌ Erreur de connexion à MySQL :', err);
        process.exit(1);
    }
}

// Vérification au démarrage
checkDatabaseConnection();

module.exports = sequelize;
