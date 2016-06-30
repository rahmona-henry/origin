
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('customers').insert({id: 1, country: 'Ireland'}),
        knex('customers').insert({id: 2, country: 'United Kingdom'}),
        knex('customers').insert({id: 3, country: 'New Zealand'})
      ]);
    });
};
