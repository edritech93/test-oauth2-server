const TransactionsModel = require('../models').Transactions;

exports.addTransactions = function (req, res) {
    const {amount, remark, attachmentUrl} = req.body;
    TransactionsModel
        .create({
            amount: amount,
            remark: remark,
            attachmentUrl: attachmentUrl,
        })
        .then((transactionResult) => {
            res.status(200).json(transactionResult);
        })
        .catch((error) => {
            res.status(400).json({message: error});
        });
};

exports.getTransactions = function (req, res) {
    const userId = null;
    TransactionsModel.findAll({ where: { userId: userId } })
        .then((transaction) => {
            if (transaction) {
                res.status(200).json(transaction)
            } else {
                res.status(400).json({ message: 'Data Not Found' });
            }
        });
};
