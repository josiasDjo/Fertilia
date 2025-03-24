const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.users) {
        return next();
    }
    req.flash('error_msg', 'Vous avez été déconnecter');
    return res.redirect("/");
};

module.exports = { isAuthenticated };