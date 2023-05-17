const User = require('../database/models/User');

const storeUserController = async (req, res) => {
  
  const user = new User({
    ...req.body
  });

  user.save()
    .then((_result) => {
        res.redirect('/')
    })
    .catch((err) => {
      const registrationErrors = Object.keys(err.errors).map(key => err.errors[key].message);
      req.flash('registrationErrors', registrationErrors);
      req.flash('data', req.body);
      res.redirect('/auth/register');
    });
};

module.exports = storeUserController;
