const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.post('/authors', AuthorController.createAuthor);
    app.get('/authors', AuthorController.getAllAuthors);
    app.patch('/authors/:id', AuthorController.updateAuthor);
    app.delete('/authors/:id', AuthorController.deleteAuthor);
}