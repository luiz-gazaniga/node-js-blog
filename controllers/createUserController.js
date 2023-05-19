const createUserController = (req, res) => {
    const data = req.flash('data');
    const errors = req.flash('registrationErrors');
    const renderedData = data.length > 0 ? data[0] : {};
  
    res.render('register', { errors, data: renderedData });
  };
  
  module.exports = createUserController;