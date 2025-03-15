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

exports.getAllProducts = async (req, res) =>  {
    try {
        const utilisateur_id = req.users_id;
        console.log('User ID: ', utilisateur_id);
        const allProducts = await Stock.findAll({where: {utilisateur_id: utilisateur_id}}); 
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
        const { id_stock, produit, quantite, emplacement } = req.body;
        console.log('ID stock : ', id_stock);
        const updateProduct = await Stock.findByPk(id_stock);
        if (!updateProduct) return res.json({ success: false, message: 'Produit non trouvé' });
        await Stock.update({produit, quantite, emplacement}, {where:{id_stock: id_stock}});
        return res.json({ success: true, message: 'Produit modifié avec succès' });
    } catch (err) {
        console.log('Une erreur est survenue', err);
        return res.json({ success: false, message: 'Une erreur est survenue' });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id_stock = req.body.id_stock;
        console.log('ID stock : ', id_stock);
        const deleteProduit = await Stock.findByPk(id_stock);
        if (!deleteProduit) return res.json({ success: false, message: 'Produit non trouvé'});
        await Stock.destroy({where: {id_stock: id_stock}});
        return res.json({ success: true, message:'Produit supprimé avec succès' });
    } catch (err) {
        console.log('Une erreur est survenue lors de la suppression', err);
        return res.json({ success: false, message: 'Une erreur est survenue lors de la suppression'});
    } 
}