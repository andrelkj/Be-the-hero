const express = require('express'); //importar funcionalidades do pacote instalado
const cors = require('cors'); // determina quem poderá acessar a aplicação
const routes = require('./routes');
// Criando a aplicação

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Utilizar Insomnia para testar os comandos
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
  * Route params: parâmetros utilizados para identificar recursos
  * Request body: corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Bancos de dados:
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsof SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Drive: SELECT * FROM users
    * Query builder: table('users').select('*').where() - KNEX.JS
    */