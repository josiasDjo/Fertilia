const passport = require('passport');
const Utilisateur = require('../models/Utilisateurs');
const bcrypt = require("bcrypt");

exports.createUtilisateur = async (req, res) => {
    try {
        let { nom, prenom, email, default_mot_de_passe } = req.body;
        const role_id = 1;
        const UtilisateurExiste  = await Utilisateur.findOne({ where: { email }});
        if (UtilisateurExiste) {
            return res.status(500).json({ error : 'Cet Email existe déjà ' });
        }

        const saltRounds = 10;
        const hashed_mot_de_passe = await bcrypt.hash(default_mot_de_passe, saltRounds);
        const nouvelUtilisateur = await Utilisateur.create({ nom, prenom, email, mot_de_passe: hashed_mot_de_passe, role_id });
        console.log(`Nouvel utilisateur ajouter avec succès }`);
        res.status(201).json({message : 'Nouvel utilisateur ajouter avec succès ! ', nouvelUtilisateur });
    } catch (err) {
        console.log(`Erreur lors de la création de l\'utilisateur, ${err}`)
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
};

exports.getUtilisateur = async (req, res) => {
    try {
        const { email, mot_de_passe } = req.body;
        const error = "Email ou mot de passe incorrect";
        const utilisateur = await Utilisateur.findOne({ where: { email }});
        if (!utilisateur) {
            res.locals.error_conn = error;
        }
        const mdp_user = await Utilisateur.findOne({where : { mot_de_passe }});
        if (!mdp_user)  {
            res.locals.error_conn = error;
        }
        // res.json(utilisateur);
        // res.render('signin', { error_conn });
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
