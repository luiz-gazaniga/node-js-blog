const User = require('../database/models/User');
const bcrypt = require('bcrypt');
const loginUserController = async (req, res) => {
    const { email, password } = req.body;
    //try to find the user
    const user = await User.findOne({ email });
    if (user) 
    {
        //compare user password
        const isSame = await bcrypt.compare(password, user.password);
        //if user password is correct, then, login user.
        if (isSame){
            //store session.
            req.session.userId = user._id;
            return res.redirect('/');
        }
    }
    res.redirect('/auth/login');
};

module.exports = loginUserController;