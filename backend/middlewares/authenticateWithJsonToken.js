const jwt = require('jsonwebtoken')

const token = jwt.sign(
    {
        user_id: user_id, email: email, role_id: role_id
    }, process.env.JWT_SECRET,
    {
        expiresIn: '14j'
    }
)

module.exports = token