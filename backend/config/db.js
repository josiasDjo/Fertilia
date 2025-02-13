require('dotenv').config();
const mysql = require('mysql2/promise');

// Configuration du pool de connexions
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,  // limete des connexions en simultanées
    queueLimit: 0
});

// Vérifier la connexion
async function checkDatabaseConnection() {
    try {
        const connection = await db.getConnection(); // Obtenir une connexion du pool
        console.log('✅ Connecté à la base de données MySQL');
        connection.release(); // Libérer la connexion
    } catch (err) {
        console.error('Erreur de connexion à MySQL :', err);
        process.exit(1); // Arrête l'application en cas d'erreur critique
    }
}

// Vérification au démarrage
checkDatabaseConnection();

// Exporter la connexion
module.exports = db;