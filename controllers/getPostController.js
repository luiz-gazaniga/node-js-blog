const Post = require('../database/models/Post');

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author');
    res.render('post', { post });
  } catch (error) {
    console.error('Error get post:', error);
  } 
};

module.exports = getPost;
