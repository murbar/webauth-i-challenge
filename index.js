const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const auth = require('./routes/auth');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api', auth);

const port = 4000;

server.listen(port, () => {
  console.log(`\n*** Server listening on http://localhost:${port} ***\n`);
});
