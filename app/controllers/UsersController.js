/*const User = require('../models/User.js')*/

const User = require('../models/user.model.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
};

exports.index = (req, res) => {
};


exports.authorize = (req, res) => {
    console.log(req.body);
    User.findOne({email: req.body.email}, function (err, user) {
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(200).send({auth: false, token: null,message:'please enter valid email & password'});

        var token = jwt.sign({id: user._id}, 'supersecret', {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({auth: true, token: token});
    });
};

exports.store = (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    });
    const saltRounds = 10;
    const hash_password = bcrypt.hashSync(req.body.password, saltRounds);
    user.password = hash_password;
   // Save Note in the database
    user.save()
        .then(data => {
            res.status(200).send({message: 'user has been succcessfully inserted!',success:true})
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note.",success:true
        });
    });
};


exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};