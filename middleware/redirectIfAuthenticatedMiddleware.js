const redirectIfAuthenticatedMiddleware = (req, res, next) => {
    if (req.session && req.session.userId) {
      return res.redirect('/');
    }
    next();
  };
  
  module.exports = redirectIfAuthenticatedMiddleware;  