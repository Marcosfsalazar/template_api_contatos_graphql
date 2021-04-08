
exports.up = function(knex) {
  return knex.schema.createTable('contatos', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('email').notNull().unique()
    table.string('phoneNumber').notNull()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contatos');  
};
