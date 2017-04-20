'use strict'

const { Router } = require('express')
const router = Router()
router.use(require('./show'))
router.use(require('./director'))
// require('./director')
router.get('/', function(req, res) {
  res.json({
    "title": "Shows and Directors",
    "Shows": "http://api-demo-priya.herokuapp.com/api/v1/shows",
    "Single_Show": "http://api-demo-priya.herokuapp.com/api/v1/shows/<showId>",
    "favorites": "https://api-demo-priya.herokuapp.com/api/v1/shows/favorites?showId=<showId>",
    "Show_directors": "https://api-demo-priya.herokuapp.com/api/v1/shows/directors?showId=<showId>",
    "Single_director": "https://api-demo-priya.herokuapp.com/api/v1/director/<directorId>",
    "Directors": "http://api-demo-priya.herokuapp.com/api/v1/directors",
    "Director_Shows": "https://api-demo-priya.herokuapp.com/api/v1/director/shows?id=<directorId>"
  });
});

module.exports = router;
