const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../data/db');
const validate = require('../data/validators');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    let user = req.body;
    const { error } = validate.user(user);
    if (error) {
      res.status(400).json({
        error: error.details[0].message
      });
    } else {
      const hash = bcrypt.hashSync(user.password, 4); // 12 in production
      user.password = hash;
      const newUser = await db.users.create(user);
      // generate token and return to caller
      res.status(201).json({
        message: 'User created!'
        // token
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Cannot create user.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = username ? await db.users.getBy({ username }) : null;
    const credentialsValid =
      user && password ? await bcrypt.compare(password, user.password) : false;
    if (!user || !credentialsValid) {
      res.status(401).json({ error: 'Invalid Credentials.' });
    } else {
      res.status(200).json({ message: `Welcome, ${user.first_name}.` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await db.users.getAll();
    res.status(200).json(users);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: 'Cannot get users.' });
  }
});

module.exports = router;
