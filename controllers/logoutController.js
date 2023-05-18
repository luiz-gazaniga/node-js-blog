const logoutController = async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};

module.exports = logoutController;