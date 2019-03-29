const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = 5000;

const projectsRouter = require('./projects/projects-router.js');

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/projects', projectsRouter);

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
