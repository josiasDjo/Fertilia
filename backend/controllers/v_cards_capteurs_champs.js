const V_Card = require('../models/v_cards_capteurs_champs')

exports.getAllCards = async (req, res) => {
    try {
        const utilisateur_id = req.users_id
        const champs = await V_Card.findAll({where: {utilisateur_id:utilisateur_id}})
        if(!champs) return {success: false, message: 'Aucun élément trouvé'}
        console.log(champs)
        return champs
    } catch (err) {
        console.log('Erreur lors de la récupération des cards', err)
        return {success: false, message: 'Erreur lors de la récupération des cards'}
    }
}

exports.searchCards = async (req, res) => {
    try {

    } catch(err) {
        console.log('Erreur de recherche : ', err)
        return res.json({ success: false, message:'Erreur de recherche'})
    }
}