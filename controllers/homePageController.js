const Post = require('../database/models/Post');

const homePageController = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('author');
    res.render('index', { posts });
  } catch (error) {
    console.error('Error getting posts:', error);
    // Handle the error and send an appropriate response
    res.status(500).send('Internal Server Error');
  }
};

module.exports = homePageController;
