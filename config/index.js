require('dotenv').config()
console.log(process.env.db_user)
module.exports = {
    db_user: process.env.db_user,
    db_password: process.env.db_password,
    db_name: process.env.db_name,
    stripe_secret: process.env.stripe_secret,
}