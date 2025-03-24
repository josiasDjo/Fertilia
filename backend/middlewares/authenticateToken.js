const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        req.flash('error_msg', 'Token manquant');
        return res.redirect("/");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            req.flash('error_msg', 'Token invalide ou expiré');
            return res.redirect("/");
        }
        req.user = user;
        next();
    });
}

module.export = authenticateToken;