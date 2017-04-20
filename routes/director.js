'use strict'

const { Router } = require('express')
const router = Router()

const { getDirector } = require('../controllers/directorCtrl')
router.get('/director/:id', getDirector)

module.exports = router
