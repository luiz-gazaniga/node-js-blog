const User = require('../database/models/User');
const authMiddleware = async (req, res, next) => {
    //fetch user from database
    if (req.session && req.session.userId){
        const user = await User.findById(req.session.userId);
        if (user){
            //verify user
            //if user is valid, permit request.
            next();
        }
        else {
            res.redirect('/');
        }
    }
    else {
        res.redirect('/');
    }
}

module.exports = authMiddleware;