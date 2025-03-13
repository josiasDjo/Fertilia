const Stock = require('../models/Stock');

exports.addProduct = async (req, res) => {
    try {
        const { produit, type_produit, quantite, unite, emplacement, fournisseur } = req.body;
        const utilisateur_id = req.session.users.id_user;
        const nouvelStock = await Stock.create({ utilisateur_id, produit, type_produit, quantite, unite, emplacement, fournisseur, utilisateur_id });
        // console.log('Produit ajouter avec succès', nouvelStock);
        return res.json({ success:true, message: 'Produit ajouter avec succès'});
    } catch (err) {
        console.log('Erreur lors de l\'ajout du produit', err);
        return res.json({ success: false, message: 'Erreur lors de l\'ajout du produit'});
    }
}

exports.getAllProducts = async (res, req) =>  {
    try {
        const { utilisateur_id } = req.session.users.id_user;
        const allProducts = await Stock.findAll({ where: { utilisateur_id: utilisateur_id }}); 
        return allProducts;
    } catch (err) {
        console.log('Aucun produit trouvé', err);
        return { 
            success: false,
            message: 'Aucun produit trouver'
        };
    }
}

exports.getProduct = async (res, req) => {
    try {
        const { produit } = req.body;
        const product = await Stock.findOne({ where: { produit }});
        return res.json(produit);
    } catch (err) {
        console.log('Une erreur est survenue', err);
        res.status(500).json({ error: 'Une erreur s\'est produite'});
    }   
} 

exports.updateProduct = async (req, res) => {
    try {
        const updateProduct = await Stock.findByPk(req.params.id_stock);
        if (!updateProduct) return res.status(500).json({ message: 'Produit non trouvé' });
        await Stock.update(req.body);
        return res.json('Produit modifié avec succès');
    } catch (err) {
        console.log('Une erreur est survenue, err');
        return res.status(500).json('Une erreur est survenue');
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const deleteProduit = await Stock.findByPk(req.params.id_stock);
        if (!deleteProduit) return res.status(500).json({ message: 'Produit non trouvé'});
        await Stock.destroy(req.body);
        return res.status(201).json('Produit supprimé avec succès');
    } catch (err) {
        console.log('Une erreur est survenue lors de la suppression', err);
        return res.status(500).json({ message: 'Une erreur est survenue lors de la suppression'});
    } 
}