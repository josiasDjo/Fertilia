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
}