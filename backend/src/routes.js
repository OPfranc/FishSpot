const { Router } = require('express')

const UserController = require('./controllers/UserController')
const CaseController = require('./controllers/CaseController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.post('/users', UserController.create)
routes.get('/users', UserController.index)

routes.get('/cases', CaseController.index)
routes.post('/cases', CaseController.create)
routes.delete('/cases/:id', CaseController.delete)

routes.get('/search', SearchController.index)

module.exports = routes