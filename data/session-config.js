const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const { db } = require('./db');

module.exports = {
  name: 'monster', // defaults to sid
  secret: 'keep it secret, keep it safe!',
  cookie: {
    maxAge: 600000,
    secure: false, // use cookie over https
    httpOnly: true // false means JS can access the cookie on the client
  },
  resave: false, // avoid recreating unchanged sessions
  saveUninitialized: false, // GDPR compliance
  store: new KnexSessionStore({
    knex: db,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 30 // delete expired sessions
  })
};
