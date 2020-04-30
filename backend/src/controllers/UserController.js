const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body
        const userId = crypto.randomBytes(4).toString('HEX')

        await connection('users').insert({
            userId,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return res.json({ userId })
    },
    async index(req, res) {

        const users = await connection('users').select('*')
        return res.json(users)
    }
}