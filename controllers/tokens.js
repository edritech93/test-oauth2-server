const ModelUsers = require('../models').Users;

exports.register = function (req, res) {
    const { username, password, fullName } = req.body;
    ModelUsers
        .create({
            username: username,
            password: password,
            fullName: fullName
        })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json({ message: error });
        });
};

exports.login = function (req, res) {
    
};