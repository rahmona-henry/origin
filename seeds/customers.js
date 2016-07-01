exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('customers').insert({id: 1, country: 'Australia', total: '24'}),
        knex('customers').insert({id: 2, country: 'United Kingdom', total: '12'}),
        knex('customers').insert({id: 3, country: 'Ireland', total: '6'})
      ]);
    });
};
