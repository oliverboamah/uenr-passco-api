var QuestionModel = require("../model/QuestionModel");

const question = {

    /**
    * Add new course question papers info
    * 
    * @param {Object} request HttpRequest
    * @param {Object} response HttpResponse
    * @param {Object} next Next Callable
    */
    store(request, response, next) {

        new QuestionModel({
            programme: request.body.programme,
            course_code: request.body.course_code,
            course_name: request.body.course_name,
            lecturer: request.body.lecturer,
            level: request.body.level,
            semester: request.body.semester,
            num_credit: request.body.num_credit,
            num_pages: request.body.num_pages,
            total_files_size: request.body.total_files_size,
            url: request.body.url,
            datetime: new Date()
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
     * Get course question papers info
     * 
     * @param {Object} request HttpRequest
     * @param {Object} response HttpResponse
     * @param {Object} next Next Callable
     */
    show(request, response, next) {

        QuestionModel.find({
            programme: request.param('programme'),
            level: request.param('level')
        }).then(doc => {
            return response.status(200).json(doc);
        })
            .catch(err => {
                return response.status("401").json(err);
            })
    },

    /**
 * Get course question papers info
 * 
 * @param {Object} request HttpRequest
 * @param {Object} response HttpResponse
 * @param {Object} next Next Callable
 */
    search(request, response, next) {

        const query = request.param('query');

        QuestionModel.find()
            .or([
                { course_code: { $regex: `.*${query}.*` } },
                { course_name: { $regex: `.*${query}.*` } },
                { lecturer: { $regex: `.*${query}.*` } }
            ])
            .then(doc => {
                return response.status(200).json(doc);
            })
            .catch(err => {
                return response.status("401").json(err);
            })

        console.log(query);
    }
}
module.exports = question;