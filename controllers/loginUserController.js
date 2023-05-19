const User = require('../database/models/User');
const bcrypt = require('bcrypt');

const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const isSame = await bcrypt.compare(password, user.password);

      if (isSame) {
        req.session.userId = user._id;
        return res.redirect('/');
      }
    }

    res.redirect('/auth/login');
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = loginUserController;