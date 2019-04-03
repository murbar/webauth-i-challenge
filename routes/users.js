const express = require('express');
const db = require('../data/db');
const restricted = require('../middleware/restricted-route');

const router = express.Router();

router.get('/', restricted, async (req, res) => {
  try {
    const users = await db.users.getAll();
    res.status(200).json(users);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: 'Cannot get users.' });
  }
});

module.exports = router;
