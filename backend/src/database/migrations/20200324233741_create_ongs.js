exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
}; // método up é responsável pela criação da tabela, o que vai acontecer quando a migration for executado

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
}; // método down é responsável por ações corretivas caso algo de errado
