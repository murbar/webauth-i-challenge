const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../data/db');
const validate = require('../data/validators');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    let user = req.body;
    const { errors } = validate.user(user);
    if (errors) {
      res.status(400).json({
        error: errors.details[0].message
      });
    } else {
      const hash = bcrypt.hashSync(user.password, 4); // 12 in production
      user.password = hash;
      const newUser = db.users.create(user);
      // generate token and return to caller
      res.status(201).json({
        message: 'User created!'
        // token
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/login', (req, res) => {});

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
