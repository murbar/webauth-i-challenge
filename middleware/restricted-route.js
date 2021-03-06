module.exports = (req, res, next) => {
  try {
    if (req && req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Cannot authenticate request.' });
  }
};
