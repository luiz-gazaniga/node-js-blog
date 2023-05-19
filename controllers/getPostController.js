const Post = require('../database/models/Post');

const getPostController = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author');
    if (!post) {
      throw new Error('Post not found');
    }
    res.render('post', { post });
  } catch (error) {
    console.error('Error getting post:', error);
    // Handle the error and send an appropriate response
    res.status(404).send('Post not found');
  }
};

module.exports = getPostController;
