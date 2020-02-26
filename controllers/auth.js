const bCrypt = require('bcryptjs'), //Password encryption
      jwt = require('jsonwebtoken'), //JSON web token
      User = require('../models/User'),
      keys = require('../config/keys'),
      errorHandler = require('../utils/errorHandler');

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({ email: req.body.email });

    if(candidate) {
        const passwordResult = bCrypt.compareSync(req.body.password, candidate.password);
        if(passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.JWT, {expiresIn: 60 * 60});

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Passwords don\'t match, try again.'
            })
        }
    } else {
        res.status(404).json({
            message: 'The user with this E-mail was not found.'
        })
    }
};

module.exports.register = async (req, res) => {
   const salt = bCrypt.genSaltSync(10),
         password = req.body.password;

   const candidate = await User.findOne({ email: req.body.email });

   if(candidate) {
       res.status(409).json({
           message: 'This E-mail is already busy, try another one.'
       })
   } else {
       const user = new User({
           email: req.body.email,
           password: bCrypt.hashSync(password, salt)
       });

       try {
           await user.save();
           res.status(201).json(user)
       } catch (e) {
           errorHandler(res, e)
       }
   }
};