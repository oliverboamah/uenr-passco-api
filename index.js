var app = require('express')();
var bodyParser = require('body-parser');
const database = require('./database');
var setUpRouter = require('./src/route/route');

app.set('port', process.env.PORT || 3000);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set up api routes
setUpRouter(app);

// 404 catch-all handler (middleware)
app.use('*', function (req, res) {
    res.status(404).json({
        message: 'Route does not exist'
    });
});

// 500 catch-all handler (middleware)
app.use(function (err, req, res, next) {
    console.log(err);
    if (Object.keys(req).indexOf('file') > -1) {
        fs.unlink(req.file.path);
    }

    res.status(err.status || 500).json({
        errors: ['An unknown error occurred']
    });
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});