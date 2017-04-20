
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('shows', (t)=>{
      t.increments()
      t.string('name').notNullable().unique()
      t.string('channel').notNullable()
      t.string('genre').notNullable()
      t.boolean('inProduction').notNullable()
    })
    .createTable('favorites', (t)=>{
      t.increments()
      t.timestamp('dateAdded').notNullable().defaultTo(knex.fn.now())
      t.integer('show_id').unsigned().references('shows.id')
    })
    // .createTable('directors', (t)=>{
    //   t.increments()
    //   t.string('name').notNullable().unique()
    //   t.string('gender').notNullable()
    //   t.integer('birthYear')
    //   t.string('twitterHandle')
    // })
    // .createTable('shows_directors', (t)=>{
    //   t.increments()
    //   t.integer('director_id').unsigned().references('directors.id')
    //   t.integer('show_id').unsigned().references('shows.id')
    // })

};

exports.down = function(knex, Promise) {
  return knex.schema
    // .dropTable('shows_directors')
    .dropTable('favorites')
    // .dropTable('directors')
    .dropTable('shows')
};
