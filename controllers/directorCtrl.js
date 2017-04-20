'use strict';

const { bookshelf } = require('../db/database');
const Director = require('../models/director');

module.exports.getDirector = ({params: {id}},res,next)=>{
  Director.getDirector(id)
  .then((director) =>{
    return res.status(200).json(director)
  })
  .catch((err)=>{
    return err
  })
}
