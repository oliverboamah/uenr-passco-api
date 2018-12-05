var AccountModel = require('../model/AccountModel');

const account = {

    /**
    * Add new account
    * 
    * @param {Object} request HttpRequest
    * @param {Object} response HttpResponse
    * @param {Object} next Next Callable
    */
    store(request, response, next) {

        new AccountModel({
            user_id: request.body.user_id,
            num_remaining_downloads: request.body.num_remaining_downloads,
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
     * Get account info
     * 
     * @param {Object} request HttpRequest
     * @param {Object} response HttpResponse
     * @param {Object} next Next Callable
     */
    show(request, response, next) {

        AccountModel.find({
            user_id: request.param('user_id')
        }).then(doc => {
                return response.status(200).json(doc);
            })
            .catch(err => {
                return response.status("401").json(err);
            })
    },

    /**
    * Update account
    * 
    * @param {Object} request HttpRequest
    * @param {Object} response HttpResponse
    * @param {Object} next Next Callable
    */
    update(request, response, next) {

        AccountModel.findOneAndUpdate(
            {
                user_id: request.body.user_id
            },
            {
                num_remaining_downloads: request.body.num_remaining_downloads,
                last_updated_datetime: new Date()
            },
            {
                new: true  // return updated doc
            })
            .then(doc => {
                return response.status(200).json({
                    status: 'success',
                    doc
                });
            }).catch(err => {
                return response.status("401").json(err);
            })
    }
}
module.exports = account;