//O método up é responsável pela criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary(); //Primeiro campo tipo string e chave primária da tabela
      table.string('name').notNullable(); //Nao pode criar uma ong sem nome
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    });
};

//O método down serve para deletar uma tabela, caso ocorra algum erro no preenchimento dos dados
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
