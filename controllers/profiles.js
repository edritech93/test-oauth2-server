const ModelClients = require('../models').Users;

exports.getProfiles = function (req, res) {
    ModelClients.findAll({})
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(400).json({ message: error });
        });
};
