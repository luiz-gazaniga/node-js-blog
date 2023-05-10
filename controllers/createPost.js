const Post = require('../database/models/Post');
const path = require('path')

const createPost = async (req, res) => {
  const { image } = req.files;
//path.join(__dirname, '..', 'public', 'posts', '9556.jpg_wh860.jpg');
  await image.mv(path.join(__dirname, '..', 'public', 'posts', image.name));

  const post = new Post({
    ...req.body,
    image: `/posts/${image.name}`
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
