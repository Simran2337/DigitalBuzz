var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('**', (req, res) => {
    const s = path.join(__dirname, 'error_handler_pages', 'index.html');
    const s1 = path.join(__dirname, 'public', 'index.html');
    if (fs.existsSync(s1)) {
        res.sendFile(s1);
    }
    else {
        res.sendFile(s);
    }
})

module.exports = app;
