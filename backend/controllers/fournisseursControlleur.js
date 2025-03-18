const Fournisseur = require('../models/Fournisseur');

exports.createFournisseur = async (req, res) => {
    try {
        const { nom_fournisseur, contact_fournisseur, id_utilisateurs } =  req.body;

        const FournisseurExiste = await Fournisseur.findOne({where: { nom_fournisseur: id_utilisateurs }});
        if (FournisseurExiste) return res.json({ success: false, message: 'Ce fournisseur existe déjà !! '});

        const NouveauFournisseur = await Fournisseur.create({ nom_fournisseur, contact_fournisseur, id_utilisateurs });
        console.log('Nouvel fournisseur : ', NouveauFournisseur);
        return res.json({ success: true, message: 'Fournisseur ajouté avec succès !! '});
    } catch(err) {
        console.log('Une erreur s\'est produite lors de la création du fournisseur : ', err);
        return res.json({ success: false, message: 'Une erreur s\'est produite lors de la création du fournisseur'});
    }
}

exports.getAllFournisseur = async (req, res) => {
    try {
        const id_utilisateur = req.body.id_utilisateur;
        const Fournisseurs = await Fournisseur.findAll({ where: { id_utilisateurs: id_utilisateur }});
        
        if (!Fournisseurs) return res.json({ success: false, message: 'Aucun fournisseur trouvé ! '});
        return res.json({Fournisseurs});
    } catch(err) {
        console.log('Une erreur s\'est produite : ', err);
        res.json({ success: false, message: 'Une erreur s\'est produite !! '});
    }
}

exports.getFournisseur = async (req, res) => {
    try {
        const { id_utilisateur, nom_fournisseur } = req.body;
        
        const Fournisseur_one = await Fournisseur.findOne({ where: { id_utilisateur, nom_fournisseur}});
        if (!Fournisseur_one) return res.json({ success: false, message: 'Auncun fournisseur trouvé'});
        return res.json({Fournisseur_one});
    } catch (err) {
        console.log('Une erreur s\'est produite : ', err);
        res.json({ success: false, message: 'Une erreur d\'est produite'});
    }
}

exports.modifyFournisseur = async (req, res) => {
    try {
        const { id_fournisseur, nom_fournisseur, contact_fournisseur, id_utilisateurs } = req.body;
        const fournisseurExiste = await Fournisseur.findByPk(id_fournisseur);

        if (!fournisseurExiste) return res.json({ success: false, message: 'Aucun fournisseur trouvé'});

        const 
    } catch {

    }
}

exports.deleteFournisseur = async (req, res) => {

}