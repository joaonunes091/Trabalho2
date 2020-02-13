const express = require('express');
const router = express.Router();
//controlador dos livros
const livrosController = require('../app/api/controllers/livros');
//rotas
router.get('/all', livrosController.getAll); //rota para obter um json com todos os livros
router.post('/adicionar', livrosController.create); //rota para a função para inserir um novo livro na base de dados
router.delete('/:livroId', livrosController.deleteById); //rota para apagar um livro
// estas rotas não são usadas nesta aplicação
//router.get('/:livroId', livrosController.getById); //rota para obter um livro por id
//router.put('/:livroId', livrosController.updateById); //rota para editar um livro
module.exports = router;
