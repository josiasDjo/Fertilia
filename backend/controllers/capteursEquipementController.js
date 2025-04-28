const CapteurEquipement = require('../models/capteurs_equipements')
const { v4: uuidv4 } = require('uuid');

exports.addCapteur = async (req, res) => {
    try {
        const { id_capteur,nom_capteur,type_capteur,model_capteur,numero_de_serie,is_champs,id_utilisateurs,latitude,longitude,date_installation,statut,last_communication,photo } = req.body

        await CapteurEquipement.create({id_capteur,nom_capteur,type_capteur,model_capteur,numero_de_serie,is_champs,id_utilisateurs,latitude,longitude,date_installation,statut,last_communication,photo})
    } catch(err) {
        const error = 'Erreur lors l\'ajout du capteur, réessayer plus tard'
        console.log(error, err)
        return res.json({ success: false, message: error })
    }
}