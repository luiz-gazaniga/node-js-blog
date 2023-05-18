const Post = require('../database/models/Post');
const path = require('path')
const cloudinary = require('cloudinary');

const createPost = async (req, res) => {
  const { image } = req.files;
  const uploadPath = path.join(__dirname, '..', 'public', 'posts', image.name);
  await image.mv(uploadPath);

  const imageResult = await cloudinary.v2.uploader.upload(uploadPath);
  const post = new Post({
    ...req.body,
    image: imageResult.secure_url,
    author: req.session.userId
  });

  post.save()
    .then((result) => {
        res.redirect('/')
    })
    .catch((err) => {
      console.error(err);
      res.send('Error creating post');
    });
};

module.exports = createPost;
