//O método up é responsável pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable(); //Nao pode criar uma ong sem nome
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
      });
  };
  
  //O método down serve para deletar uma tabela, caso ocorra algum erro no preenchimento dos dados
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  