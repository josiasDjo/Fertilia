const express = require('express')
const router = express.Router()
const { faker } = require('@faker-js/faker')

router.get('/sensor', (req, res) => {
    const sensors = Array.from({ length: 10 }, () => ({
        id: faker.string.uuid(),                           // UUID unique :contentReference[oaicite:2]{index=2}
        type: faker.helpers.arrayElement([
            'temperature', 'humidity', 'soilMoisture', 'ph', 'luminosity'
        ]),
        value: Number(faker.number.float({
            min: 0, max: 100, precision: 0.1
        }).toFixed(1)),                                    // Nombre décimal :contentReference[oaicite:3]{index=3}
        unit: '°C',                                        // Exemple d’unité
        location: {
          latitude: faker.address.latitude(),              // Latitude aléatoire :contentReference[oaicite:4]{index=4}
          longitude: faker.address.longitude()             // Longitude aléatoire :contentReference[oaicite:5]{index=5}
        },
        timestamp: faker.date.recent().toISOString()       // Date ISO récente
    }));
    
    res.json(sensors);
})

module.exports = router;