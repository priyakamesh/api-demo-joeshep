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

module.exports.getAllDirectors = (req,res,next)=>{
  Director.getAll()
  .then((directors)=>{
    return res.status(200).json(directors)
  })
  .catch((err)=>{
    return err
  })
}
module.exports.getdirectorShows = ({query: {id}},res,next)=>{
  Director.forge({id:id})
  .fetch({withRelated: ['shows'], require: true})
  .then((directorShow)=>{
    return res.status(200).json(directorShow)
  })
  .catch((err)=>{
    return err
  })
}
