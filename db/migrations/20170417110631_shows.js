
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
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('favorites')
    .dropTable('shows')

};
