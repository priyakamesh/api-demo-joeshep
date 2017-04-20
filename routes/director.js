'use strict'

const { Router } = require('express')
const router = Router()

const { getDirector,getAllDirectors, getdirectorShows } = require('../controllers/directorCtrl')
router.get('/directors', getAllDirectors)
router.get('/director/shows', getdirectorShows )
router.get('/director/:id', getDirector)


module.exports = router
