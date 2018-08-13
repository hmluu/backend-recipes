
exports.up = function(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.integer('number_of_ingredients').notNullable().unsigned();
    table.text('instructions').notNullable();
    table.text('url').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes');
};
