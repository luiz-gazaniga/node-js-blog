const createUserController = async (req, res) => {
    const data = req.flash('data');
    res.render('register', {
        errors: req.flash('registrationErrors'),
        data: data[0]? data[0]: {}
    });
};

module.exports = createUserController;