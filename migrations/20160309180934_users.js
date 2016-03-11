
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',function(table){
    table.bigIncrements('id').primary()
    table.string('username',16).notNullable().unique()
    table.string('password')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('email').unique()
    table.decimal('balance',17,2)
    table.boolean('banned')
    table.string('address',34)
    table.string('tfa_key')


})
};

exports.down = function(knex, Promise) {

};
