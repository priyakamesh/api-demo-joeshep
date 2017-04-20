'use strict'

const { Router } = require('express')
const router = Router()

const { getDirector,getAllDirectors } = require('../controllers/directorCtrl')
router.get('/director/:id', getDirector)
router.get('/directors', getAllDirectors)

module.exports = router
