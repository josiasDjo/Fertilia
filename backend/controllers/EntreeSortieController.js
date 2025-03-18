const EntreeSortie = require('../models/Entree_Sortie');


exports.ajouterEntreeSortie = async (req, res) => {
    try {
        const { produit, type_produit, quantite, unite, action, quantite_totale, id_utilisateurs } = req.body;
        
        await EntreeSortie.create({produit, type_produit, quantite, unite, action, quantite_totale, id_utilisateurs});
        return res.json({ success: true, message: 'Action enregistrer'});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite'});
    }
}

exports.getEntreeSortie = async (req, res) => {
    try {
        const { id_utilisateurs } = req.body.users_id;

        const actionExiste = await EntreeSortie.findAll({ where: { id_utilisateurs: id_utilisateurs }});
        if (!actionExiste) return "Vous n'avez pas d'historique pour le moment";
        return actionExiste;
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        return { 
            success: false, 
            message: 'Une erreur s\'est produite'
        };
    }
}

