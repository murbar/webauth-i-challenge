const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const sessionConfig = require('./data/session-config.js');

const auth = require('./routes/auth');
const users = require('./routes/users');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session(sessionConfig));

server.use('/api', auth);
server.use('/api/users', users);

const port = 4000;

server.listen(port, () => {
  console.log(`\n*** Server listening on http://localhost:${port} ***\n`);
});
