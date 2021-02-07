const express = require('express');
const RecipesRouter = require('./recipes-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
    res.json({ message: "api is up and running" });
});

module.exports = server;