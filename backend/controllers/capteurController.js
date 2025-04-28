const Capteur = require('../models/Capteurs')
const { v4: uuidv4 } = require('uuid');

exports.addCapteur = async (req, res) => {
    try {
        const id_capteur = uuidv4()
        const { type_capteur,valeur,is_champs,unit,longitude,latitude } = req.body;
        await Capteur.create({id_capteur,type_capteur,valeur,is_champs,unit,longitude,latitude})
        res.json({ success: true, message: 'Capteur ajouté'})
    } catch(err) {
        console.log('Erreur lors de l\'ajout du capteur', err)
        res.json({ success: false, message: 'Erreur lors de la création du capteur' });
    }
}

exports.getCapteur = async (req, res) => {
    try {

    } catch(err) {
        
    }
}

exports.updateCapteur = async (req, res) => {
    try {
        // const {id_capteur,type_capteur,valeur,is_champs,unit,longitude,latitude} = req.body;
        const id_capteur = req.body.id_capteur
        const capteurExiste = Capteur.findByPk(id_capteur)
        if(!capteurExiste) return res.json({ success: false, message: 'Capteur introuvable, réessyer plus tard'})
        await Capteur.update(req.body)
        res.json({ success: true, message:'Capteur mise à jour avec succès'})
    } catch(err) {
        console.log('Erreur lors de l\'ajout du capteur', err)
        res.json({ success: false, message: 'Erreur lors de la mise à jour du capteur' })
    }
}