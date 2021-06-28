const ModelUsers = require('../models').Users;

exports.getProfiles = function (req, res) {
    ModelUsers.findOne({where: {id: 4}})
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json({ message: error });
        });
};
