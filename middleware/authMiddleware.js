const User = require('../database/models/User');

const authMiddleware = async (req, res, next) => {
  try {
    if (req.session && req.session.userId) {
      const user = await User.findById(req.session.userId);

      if (user) {
        // User is verified, permit the request
        return next();
      }
    }

    res.redirect('/');
  } catch (error) {
    console.error('Error in authentication middleware:', error);
    res.redirect('/');
  }
};

module.exports = authMiddleware;
