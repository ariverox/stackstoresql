exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table) {
    table.bigIncrements('id').primary()
    table.string('name', 255).notNullable().unique()
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.decimal('price', 17, 2).notNullable()
    table.integer('quantity').notNullable()
    table.text('description')
    table.text('image')

  })
};

exports.down = function(knex, Promise) {};
