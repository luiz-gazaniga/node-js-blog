const request = require('supertest');
const app = require('./index'); // Assuming the main file is named index.js
const User = require('./database/models/User');
const Post = require('./database/models/Post');

describe('Testing the API endpoints', () => {
  let user;
  let post;

  beforeAll(async () => {
    // Create a user for testing
    user = new User({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'testpassword'
    });
    await user.save();

    // Create a post for testing
    post = new Post({
      title: 'Test Post',
      subtitle: 'subtitle',
      content: 'This is a test post',
      author: user._id
    });
    await post.save();
  });

  afterAll(async () => {
    // Clean up test data
    await User.deleteMany({});
    await Post.deleteMany({});
  });

  describe('GET /', () => {
    it('should return status 200 and redirect to the expected location', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
    });
  });

});