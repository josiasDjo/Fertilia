const jwt = require('jsonwebtoken')

const token = jwt.sign(
    {
        user_id: userSign.user_id,
        nom: userSign.nom,
        prenom: userSign.prenom,
        email: userSign.email, 
        role_id: userSign.role_id
    }, process.env.JWT_SECRET,
    {
        expiresIn: '1h'
    }
)
console.log('Token : ', token)
module.exports = token