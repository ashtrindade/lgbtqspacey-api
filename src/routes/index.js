const express = require('express')
const apiRoutes = require('./apiRoutes')

const routes = (app) => {
  app.use(
    express.json(),
    apiRoutes,
  )
}

module.exports = routes
