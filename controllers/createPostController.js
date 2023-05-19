const createPostControler = (req, res) => {
    if (req.session.userId) {
      return res.render('create');
    } else {
      return res.redirect('/auth/login');
    }
  };
  
  module.exports = createPostControler;  