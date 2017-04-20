'use strict'

const { Router } = require('express')
const router = Router()
router.use(require('./show'))
router.use(require('./director'))
// require('./director')
router.get('/', function(req, res) {
  res.json({
    "title": "Shows and Directors",
    "Shows": "http://localhost:3000/api/v1/shows",
    "favorites": "https://api-demo-priya.herokuapp.com/api/v1/shows/favorites?showId=3",
    "directors": "https://api-demo-priya.herokuapp.com/api/v1/shows/directors?showId=3"
  });
});

module.exports = router;
