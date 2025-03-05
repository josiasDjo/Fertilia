const Champ = require('../models/Champs');

exports.createChamp = async (req, res) => {
    try {	
        const utilisateur_id = req.session.users.id_user
        const { nom, surface, type_culture, longitude, latitude, etat } = req.body;
        const champ = await Champ.create({ utilisateur_id, nom, surface, type_culture, longitude, latitude, etat  });
        console.log('Champ Ajouté', champ)
        res.json({ success: true, message: 'Nouvel champ ajouté avec succès'});
    } catch (err) {
        console.log('Erreur lors de l\'ajout du champ', err)
        res.json({ success: false, message: 'Erreur lors de la création du champ' });
    }
};

exports.getAllChamps = async (req, res) => {
    try {
        const champs = await Champ.findAll();
        res.json(champs);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des champs' });
    }
};

exports.getChampById = async (req, res) => {
    try {
        const champ = await Champ.findByPk(req.params.id);
        if (!champ) return res.status(404).json({ error: 'Champ non trouvé' });
        res.json(champ);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération du champ' });
    }
};

exports.updateChamp = async (req, res) => {
    try {
        const champ = await Champ.findByPk(req.params.id);
        if (!champ) return res.status(404).json({ error: 'Champ non trouvé' });

        await champ.update(req.body);
        res.json({ message: 'Champ mis à jour avec succès' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du champ' });
    }
};

exports.deleteChamp = async (req, res) => {
    try {
        const champ = await Champ.findByPk(req.params.id);
        if (!champ) return res.status(404).json({ error: 'Champ non trouvé' });

        await champ.destroy();
        res.json({ message: 'Champ supprimé avec succès' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la suppression du champ' });
    }
};
