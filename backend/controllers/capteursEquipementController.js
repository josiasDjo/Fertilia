const CapteurEquipement = require('../models/capteurs_equipements')
const { v4: uuidv4 } = require('uuid');

exports.addCapteur = async (req, res) => {
    try {
        const id_capteur = uuidv4()
        const id_utilisateurs = req.session.users.id_user;
        const { nom_capteur,type_capteur,model_capteur,numero_de_serie,is_champs,latitude,longitude,date_installation,statut,last_communication,photo } = req.body
        const serialNumberExist = await CapteurEquipement.findOne({where: {numero_de_serie}})
        if(serialNumberExist) return res.json({ success: false, message: 'Ce capteur existe déjà'})
        await CapteurEquipement.create({id_capteur,nom_capteur,type_capteur,model_capteur,numero_de_serie,is_champs,id_utilisateurs,latitude,longitude,date_installation,statut,last_communication,photo})
    } catch(err) {
        const error = 'Erreur lors l\'ajout du capteur, réessayer plus tard'
        console.log(error, err)
        return res.json({ success: false, message: error })
    }
}

exports.getCapteursChamps = async (req, res) => {
    try {
        const id_utilisateurs = req.session.users.id_user;
        const is_champs = req.body.is_champs
        const champsExist = await CapteurEquipement.findAll({ where: is_champs})
        if(!champsExist) return res.json({ success: false, message: 'Données introuvables'})
        return res.json({ success: true, message: champsExist})
    } catch(err) {
        const error = 'Erreur lors de la récupération des capteurs'
        console.log(error, err)
        return res.json({ success: false, message: error})
    }
}

exports.getCapteur = async (req, res) => {
    try {
        const id_utilisateurs = req.session.users.id_user;
        const id_capteur = req.body.id_capteur
        const capteurExist = await CapteurEquipement.findOne({where: id_capteur})
        if(!capteurExist) return res.json()
    } catch(err) {
        const error = 'Erreur lors de la récupération du capteur'
        console.log(error, err)
        return res.json({ success: false, message: error})
    }
}