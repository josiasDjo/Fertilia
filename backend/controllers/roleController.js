const Role = require('../models/Roles');

exports.createRole = async (req, res) => {
    try {
        const { nom_role } = req.body;

        const RoleExiste = await Role.findOne({ where: { nom_role }});
        if (RoleExiste) {
            return res.status(500).json({ error: 'Ce role existe déjà !! ' });
        }

        const nouvelRole = await Role.create({ nom_role });
        return res.status(201).json({ message: 'Nouvel role ajouter avec succès '});
    } catch (err) {
        console.log(`Une erreur s'est produite, ${err}`);
        return res.status(500).json({ message: 'Un problème est survenu'});
    }
};

exports.getRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);

        if (!role) return res.status(404).json({ error : 'Role non trouvé '});
        res.json(role);
    } catch (err) {
        console.log(`Une erreur s'est produite lors de l'ajout du role, ${err}`);
        return res.status(500).json({ message: 'Une erreur s\'est produite'});
    }
};

exports.updateRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);

        if (!role) return res.status(404).json({ error: 'Aucun role trouvé'});

        await role.update(req.body);
        res.json({ message: 'Role mis à jour avec succès'});
    } catch(err) {
        console.log(`Erreur lors de la modification du role, ${err}`);
        res.status(500).json({ error: 'Erreur lors de la modification du role'});
    } 
};

exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (!role) return res.status(404).json({error: 'L\'élement n\'existe pas !!!! '});

        await role.destroy();
        res.json({ message: 'Role supprimé avec succès'});
    } catch (err) {
        console.log(`Erreur lors de la supression du role, ${err}`);
        res.status(500).json({ error: 'Erreur lors de la suppression du role'});
    }
};