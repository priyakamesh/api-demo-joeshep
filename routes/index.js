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
    "favorites": "https://api-demo-priya.herokuapp.com/api/v1/shows/favorites?showId=3",
    "Show_directors": "https://api-demo-priya.herokuapp.com/api/v1/shows/directors?showId=3",
    "Single_director": "https://api-demo-priya.herokuapp.com/api/v1/director/<directorId>",
    "Directors": "http://api-demo-priya.herokuapp.com/api/v1/directors"
  });
});

module.exports = router;
