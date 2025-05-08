const express = require('express')
// carga las rutas de tu api
const router = express.Router()

router.use('/admin/hosters', require('./admin/hosters'))

module.exports = router
