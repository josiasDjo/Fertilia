const Utilisateur = require('../models/Utilisateurs');

exports.createUtilisateur = async (req, res) => {
    try {
        const { nom, email, mot_de_passe, role } = req.body;
        const nouvelUtilisateur = await Utilisateur.create({ nom, email, mot_de_passe, role });
        res.status(201).json(nouvelUtilisateur);
    } catch (err) {
        console.log(`Erreur lors de la création de l\'utilisateur, ${err}`)
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
};

exports.getUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });
        res.json(utilisateur);
    } catch (err) {
        console.log(`Erreur lors de la récupération de l\'utilisateur, ${err} `);
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur', err });
    }
};

exports.updateUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });

        await utilisateur.update(req.body);
        res.json({ message: 'Utilisateur mis à jour avec succès' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l’utilisateur' });
    }
};

exports.deleteUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        if (!utilisateur) return res.status(404).json({ error: 'Utilisateur non trouvé' });

        await utilisateur.destroy();
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
    }
};
