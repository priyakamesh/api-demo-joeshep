'use strict'

const { Router } = require('express')
const router = Router()

const { getDirector,getAllDirectors, getdirectorShows } = require('../controllers/directorCtrl')
router.get('/director/shows', getdirectorShows )
router.get('/director/:id', getDirector)
router.get('/directors', getAllDirectors)

module.exports = router
