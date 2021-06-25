
'use strict'
module.exports = function (app) {
    const controller = require('../controllers/transactions')
    app.route('/v1/transactions').get(controller.getTransactions)
    app.route('/v1/transactions').post(controller.addTransactions)
}