'use strict'

const { bookshelf } = require('../db/database')
require('./show')
require('./show_director')
const Director = bookshelf.Model.extend ( {
  tableName: 'directors',
  shows: function (){ return this.belongsToMany('Show').through('Show_Director')}
},{
  getDirector: function (id) {
    return this.forge({id})
      .fetch()
      .then((director)=>{
        return director
      })
      .catch( (err)=>{
        return err
      })
  }
});
module.exports = bookshelf.model('Director', Director)
