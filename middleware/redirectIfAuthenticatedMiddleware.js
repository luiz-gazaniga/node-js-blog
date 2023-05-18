const redirectIfAuthenticatedMiddleware = async (req, res, next) => {
    //fetch user from database
    if (req.session && req.session.userId){
        return res.redirect('/');
    }
    next();
}

module.exports = redirectIfAuthenticatedMiddleware;