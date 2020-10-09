const express = require('express');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running dude!' });
});

server.use('/api/users', usersRouter);

module.exports = server;
