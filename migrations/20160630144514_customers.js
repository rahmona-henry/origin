exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('customers', function(table) {
   table.increments('id')
   table.string('country')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('customers')
};
