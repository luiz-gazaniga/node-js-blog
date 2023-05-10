const Post = require('../database/models/Post');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log(posts);
    res.render('index', { posts })
  } catch (error) {
    console.error('Error getting all posts:', error);
  } 
};

module.exports = getAllPosts;
