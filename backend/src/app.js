//Importando algo do express para o projeto
const express = require('express');

//Importando o cors
const cors = require('cors');

//Importando erros do celebrate
const { errors } = require('celebrate');

//Importando as rotas
const routes = require('./routes');

//Instanciando minha aplicação
const app = express();

//Informando que utilizamos JSON para nossas requisições
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
//Rota raiz do node '/', ex: rota contato index/contato
//Rota é o recurso completo localhost:3333/users, recurso é somente o /users, geralmente está associado a alguma tabela no BD.

/*Métodos HTTP:
GET: Buscar/listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end


Tipos de parâmetros:
Query Params: Parâmetros nomeados enviados na rota após o "?", geralmente servem para
(Filtros, paginação).
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

Bancos de Dados:
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc.

Instalação do BD:
Driver: SELECT * FROM users (query sql)
Query Builder: table('users').select('*').where()

*/

//Escolhendo a porta 3333 para acessar a aplicação
module.exports = app;




//Pensando nas entidades:
//Algo que precisa ser salvo no DB.
/*
1ª Entidade: ong (realizar cadastro, faz login, cadastra novos casos)
2ª Entidade: caso (incident)

Funcionalidades:
Login de Ong
Logout de Ong
Cadastro de Ong
Cadastrar novos casos
Deletar casos
Listar casos específicos de uma Ong
Listar todos os casos
Entrar em contato com a Ong
*/