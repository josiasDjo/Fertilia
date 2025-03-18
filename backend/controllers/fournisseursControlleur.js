const Fournisseur = require('../models/Fournisseur');

exports.createFournisseur = async (req, res) => {
    try {
        const { nom_fournisseur, contact_fournisseur, id_utilisateurs } =  req.body;

        const FournisseurExiste = await Fournisseur.findOne({where: { nom_fournisseur: id_utilisateurs }});
        if (FournisseurExiste) return res.json({ success: false, message: 'Ce fournisseur existe déjà !! '});

        const NouveauFournisseur = await Fournisseur.create()
    } catch(err) {

    }
}

exports.getAllFournisseur = async (req, res) => {

}

exports.getFournisseur = async (req, res) => {

}

exports.modifyFournisseur = async (req, res) => {

}

exports.deleteFournisseur = async (req, res) => {

}