const express = require('express')
const swaggerUi = require('swagger-ui-express')
const routes = require('./src/routes/index')
const swaggerDocument = require('./src/swagger/apiDocs.json')

const PORT = process.env.PORT || 8000

const app = express()

routes(app)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT)

module.exports = app
