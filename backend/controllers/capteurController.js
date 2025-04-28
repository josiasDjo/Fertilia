const Capteur = require('../models/Capteurs')
const { v4: uuidv4 } = require('uuid');

exports.addCapteur = async (req, res) => {
    try {
        const id_capteur = uuidv4()
        const { nom_capteur,type_capteur,valeur,is_champs,unit,longitude,latitude } = req.body;
        await Capteur.create({nom_capteur,id_capteur,type_capteur,valeur,is_champs,unit,longitude,latitude})
        res.json({ success: true, message: 'Capteur ajouté'})
    } catch(err) {
        console.log('Erreur lors de l\'ajout du capteur', err)
        res.json({ success: false, message: 'Erreur lors de la création du capteur' });
    }
}

exports.getCapteur = async (req, res) => {
    try {
        const id_capteur = req.body.id_capteur
        const capteurExiste = await Capteur.findByPk(id_capteur)
        if(!capteurExiste) return res.json({ success: false, message:'Capteur introuvable, réessayer plus tard'})
        return res.json({ success:true, capteurExiste:capteurExiste })
    } catch(err) {
        console.log('Erreur lors de la récupération du capteur : ', err)
        return res.json({success: false, message:'Erreur lors de la récupération du capteur'})
    }
}

exports.getAllCapteurOfAfield = async (req, res) => {
    try {
        const id_champs = req.body.id_champs
        const AllCapteurs = await Capteur.findAll({where: {id_capteur}})
        return res.json({ success: true, AllCapteurs:AllCapteurs })
    } catch(err){
        console.log('Erreur lors de lé récupération des capteurs d\'un champs : ', err)
        return res.json({success:false, message:'Erreur lors de lé récupération des capteurs d\'un champs'})
    }
}

exports.updateCapteur = async (req, res) => {
    try {
        // const {id_capteur,type_capteur,valeur,is_champs,unit,longitude,latitude} = req.body;
        const id_capteur = req.body.id_capteur
        const capteurExiste = Capteur.findByPk(id_capteur)
        if(!capteurExiste) return res.json({ success: false, message: 'Capteur introuvable, réessayer plus tard'})
        await Capteur.update(req.body)
        res.json({ success: true, message:'Capteur mise à jour avec succès'})
    } catch(err) {
        console.log('Erreur lors de l\'ajout du capteur', err)
        res.json({ success: false, message: 'Erreur lors de la mise à jour du capteur' })
    }
}

exports.deleteCapteur = async (req, res) => {
    try {
        const id_capteur = req.body.id_capteur
        const capteurExiste = await Capteur.findByPk(id_capteur)
        if(!capteurExiste) return res.json({ success: false, message: 'Une erreur s\'est produite, réessayer plus tard !! '})
        await Capteur.destroy({where: {id_capteur}})
    } catch(err) {
        console.log('Erreur lors de la suppression du capteur : ', err)
        return res.json({ success: false, message: 'Erreur lors de la suppression du capteur'})
    }
}