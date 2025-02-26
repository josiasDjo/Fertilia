const passport = require('passport');
const Utilisateur = require('../models/Utilisateurs');
const bcrypt = require("bcrypt");
const { where } = require('sequelize');

exports.createUtilisateur = async (req, res) => {
    try {
        let { nom, prenom, email, phone, default_mot_de_passe } = req.body;
        console.log(`Email : ${email}, Password : ${default_mot_de_passe}`);
        const role_id = 1;
        const UtilisateurExiste  = await Utilisateur.findOne({ where: { email }});
        if (UtilisateurExiste) {
            return res.json({ success:false, message : 'Cet Email existe déjà ' });
        }

        const saltRounds = 10;
        const hashed_mot_de_passe = await bcrypt.hash(default_mot_de_passe, saltRounds);
        const nouvelUtilisateur = await Utilisateur.create({ nom, prenom, email,phone, mot_de_passe: hashed_mot_de_passe, role_id });
        
        req.session.users = {
            id_user: utilisateur.id_utilisateurs,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            email: utilisateur.email,
            role_id: utilisateur.role_id
        }

        console.log(`Nouvel utilisateur ajouter avec succès }`);
        return res.json({ success: true, message : 'Nouvel utilisateur ajouter avec succès ! ', nouvelUtilisateur });
    } catch (err) {
        console.log(`Erreur lors de la création de l\'utilisateur, ${err}`)
        return res.json({ success: false, message: 'Erreur lors de l\'enregistrement' });
    }
};

exports.getUtilisateur = async (req, res) => {
    try {
        const { email, mot_de_passe } = req.body;
        const error = "Email ou mot de passe incorrect";
        console.log(`Email : ${email}, Password : ${mot_de_passe}`);
        const utilisateur = await Utilisateur.findOne({ where: { email }});
        if (!utilisateur) {
            res.locals.error_conn = error;
            return res.status(500).json({ success: false, message: error});
        }
        const mdp_user = await Utilisateur.findOne({where : { mot_de_passe }});
        if (!mdp_user)  {
            res.locals.error_conn = error;
            return res.json({ success: false, message: error});
            // return res.render('index', { error_conn:  error});
        }

        req.session.users = {
            id_user: utilisateur.id_utilisateurs,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            email: utilisateur.email,
            role_id: utilisateur.role_id
        }
        console.log('Utilisateur rédiriger')
        if (utilisateur.role_id === 1) return res.json({ success: true, message: 'Utilisateur authentifié'});
    } catch (err) {
        console.log(`Erreur lors de la récupération de l\'utilisateur, ${err} `);
        res.status(500).json({ success: false, error: 'Erreur lors de la récupération de l\'utilisateur', err });
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
