var TransactionModel = require("../model/TransactionModel");

const transaction = {

    /**
    * Add new transaction
    * 
    * @param {Object} request HttpRequest
    * @param {Object} response HttpResponse
    * @param {Object} next Next Callable
    */
    store(request, response, next) {

        new TransactionModel({
            user_id: request.body.user_id,
            amount: request.body.amount,
            last_updated_datetime: new Date()
        }).save()
            .then(doc => {
                return response.status(200).json({
                    status: 'success',
                    doc
                });
            })
            .catch(err => {
                return response.status("401").json(err);
            });
    },

    /**
     * Get transaction info
     * 
     * @param {Object} request HttpRequest
     * @param {Object} response HttpResponse
     * @param {Object} next Next Callable
     */
    show(request, response, next) {

        TransactionModel.find({
            user_id: request.param("user_id")
        }).then(doc => {
                return response.status(200).json(doc);
            })
            .catch(err => {
                return response.status("401").json(err);
            })
    }
}
module.exports = transaction;