const logoutController = (req, res) => {
    req.session.destroy((error) => {
      if (error) {
        console.error('Error during session destroy:', error);
      }
      res.redirect('/');
    });
  };
  
  module.exports = logoutController;  