const Capteur = require('../models/Capteurs')
const { v4: uuidv4 } = require('uuid');

exports.addCapteur = async (req, res) => {
    try {
        const id_capteur = uuidv4()
        const { type_capteur,valeur,is_champs,unit,longitude,latitude } = req.body;
        await Capteur.create({id_capteur,type_capteur,valeur,is_champs,unit,longitude,latitude})
    } catch(err) {
        console.log('Erreur lors de l\'ajout du champ', err)
        res.json({ success: false, message: 'Erreur lors de la création du champ' });
    }
}