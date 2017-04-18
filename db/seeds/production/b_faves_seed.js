
exports.seed = function(knex, Promise) {
  return knex('favorites').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('favorites').insert({
          show_id: 1
        }),
        knex('favorites').insert({
          show_id: 1
        }),
        knex('favorites').insert({
          show_id: 3
        }),
        knex('favorites').insert({
          show_id: 4
        }),
        knex('favorites').insert({
          show_id: 6
        }),
        knex('favorites').insert({
          show_id: 5
        }),
        knex('favorites').insert({
          show_id: 2
        }),
        knex('favorites').insert({
          show_id: 3
        })
      ]);
    });
};
