const User = require('../database/models/User');

const storeUserController = async (req, res) => {
  try {
    const user = new User({ ...req.body });

    await user.save();

    res.redirect('/');
  } catch (error) {
    console.error('Error storing user:', error);
    const registrationErrors = Object.values(error.errors).map(err => err.message);
    req.flash('registrationErrors', registrationErrors);
    req.flash('data', req.body);
    res.redirect('/auth/register');
  }
};

module.exports = storeUserController;