const V_Card = require('../models/v_cards_capteurs_champs')

exports.getAllCards = async (req, res) => {
    try {
        const utilisateur_id = req.users_id
        const allCards = await V_Card.findAll({where: {utilisateur_id}})
        if(!allCards) return {success: false, message: 'Aucun élément trouvé'}
        return { success: true, message: allCards}
    } catch (err) {
        console.log('Erreur lors de la récupération des cards')
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