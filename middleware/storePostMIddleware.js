const validateCreatePostMiddleware = (req, res, next) => {
    const { files, body } = req;
    const { title, subtitle, content } = body;
  
    if (!files || !title || !subtitle || !content) {
      return res.redirect('/posts/new');
    }
  
    next();
  };
  
  module.exports = validateCreatePostMiddleware;  