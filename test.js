const mongoose = require('mongoose');

const Post = require('./database/models/Post');

mongoose.connect('mongodb://localhost/node-js-test-blog');

const cleanPostCollection = async () => {
  try {
    const result = await Post.deleteMany({});
    console.log('Post collection cleaned:', result);
  } catch (error) {
    console.error('Error cleaning post collection:', error);
  } 
};

const createPost = async (title, description, content) => {
  try {
    const post = await Post.create({
      title,
      description,
      content
    });
    console.log('Post created:', post);
  } catch (error) {
    console.error('Error creating post:', error);
  } 
};

const findPostByTitle = async (title) => {
    try {
      const post = await Post.findOne({ title });
      return post;
    } catch (error) {
      console.error('Error finding post:', error);
      return null;
    }
  };

const getAllPosts = async () => {
  try {
    const posts = await Post.find({});
    console.log('All posts:', posts);
  } catch (error) {
    console.error('Error getting all posts:', error);
  } 
};

const updatePostById = async (postId, updatedData) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(postId, updatedData, { new: true });
      console.log('Post updated:', updatedPost);
      return updatedPost;
    } catch (error) {
      console.error('Error updating post:', error);
    } 
};

(async () => {
    try {
      await cleanPostCollection();
      await createPost('My first blog post', 'Blog post description', 'Loren ipsum content');
      await createPost('My Second blog post', 'Blog post description', 'Loren ipsum content');
      const post = await findPostByTitle('My first blog post');
      post.title = 'My first blog post updated';
      await updatePostById(post.id, post);
      const updatedPost = await findPostByTitle('My first blog post updated');
      console.log('Updated post:', updatedPost);
      await getAllPosts();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      mongoose.disconnect();
    }
})();