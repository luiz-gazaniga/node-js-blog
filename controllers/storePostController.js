const Post = require('../database/models/Post');
const path = require('path');
const cloudinary = require('cloudinary').v2;

const createPostController = async (req, res) => {
  try {
    const { image } = req.files;
    const uploadPath = path.join(__dirname, '..', 'public', 'posts', image.name);
    await image.mv(uploadPath);

    const imageResult = await cloudinary.uploader.upload(uploadPath);
    const post = new Post({
      ...req.body,
      image: imageResult.secure_url,
      author: req.session.userId
    });

    post.save()
      .then((result) => {
        res.redirect('/');
      })
      .catch((err) => {
        console.error('Error creating post:', err);
        res.status(500).send('Error creating post');
      });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).send('Error uploading image');
  }
};

module.exports = createPostController;