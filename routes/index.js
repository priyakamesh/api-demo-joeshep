'use strict'

const { Router } = require('express')
const router = Router()

const { getShows, getShowFaves, getShow, addShow, deleteShow, getShowDirectors } = require('../controllers/showCtrl')

router.get('/shows', getShows)
router.post('/shows/new', addShow)
router.delete('/shows/:id', deleteShow)
router.get('/shows/favorites', getShowFaves)
router.get('/shows/directors', getShowDirectors)
router.get('/shows/:id', getShow)

module.exports = router
