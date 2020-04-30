const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        
        const cases = await connection('cases').select('*')
        return res.json(cases)
    },
    
    async create(req, res) {
        const { fish, description, latitude, longitude } = req.body
        const author = req.headers.authorization
        const date = Date.now()

        const [id] = await connection('cases').insert({
            fish,
            description,
            date,
            latitude,
            longitude,
            author
        })
        return res.json({ id })
    },
    async delete(req, res) {
        const { id } = req.params
        const author = req.headers.authorization

        const caseToDelete = await connection('cases').where('id', id).select('author').first()

        if (caseToDelete.author !== author)
            return res.status(401).json({error: 'Operation not permited.'})

        await connection('cases').where('id', id).delete()

        return res.status(204).send();

    }
}