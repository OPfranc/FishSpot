const connection = require('../database/connection')

module.exports = {
    async index(req, res) {

        const { fish, latitude, longitude } = req.query

        if (fish && !latitude) {
            const casesThatMatch = await connection('cases')
                .where('fish', fish)
                .select('*')
            return res.json(casesThatMatch)
        }

        if (!fish && latitude) {
            const casesThatMatch = await connection('cases')
                .where({
                    'latitude': latitude,
                    'longitude': longitude
                })
                .select('*')
            return res.json(casesThatMatch)
        }

        if (fish && latitude) {
            const casesThatMatch = await connection('cases')
                .where({
                    'fish': fish,
                    'latitude': latitude,
                    'longitude': longitude
                })
                .select('*')
            return res.json(casesThatMatch)
        }
        return res.status(500).send()
    }
}