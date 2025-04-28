const Capteur = require('../models/Capteurs')
const { v4: uuidv4 } = require('uuid');

exports.addCapteur = async (req, res) => {
    try {
        const id_capteur = uuidv4()
        const { type_capteur,valeur,createdAt,updatedAt,is_champs,unit,longitude,latitude } = req.body;
    } catch(err) {

    }
}