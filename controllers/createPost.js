const Post = require('../database/models/Post');

const createPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content
  });

  post.save()
    .then((result) => {
        res.render('index')
    })
    .catch((err) => {
      console.error(err);
      res.send('Error creating post');
    });
};

module.exports = createPost;
