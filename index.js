var app = require('express')();

app.set('port', process.env.PORT || 3000);


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