/* 6- Sequelize with Cats
 *  (((SOLUTION)))
 * -/-/-/-/-/-/-/-/-/-/-/ */


/* STUDENTS
 * Your instructions lie in users_controller.js
 * and cats_controller.js
 * Good luck!
 * -/-/-/-/-/ */



// Dependencies
// ============
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser'); // for working with cookies
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override'); // for deletes in express
var Users = require("./models")["User"];
var Charity = require("./models")["Charity"]
var Donation = require("./models")["Donation"]
Users.sync();
Charity.sync();
Donation.sync();

// Our model controllers (rather than routes)
var application_controller = require('./controllers/application_controller');
var main_controller = require('./controllers/main_controller');
var donation_controller = require('./controllers/donation_controller');
var report_controller = require('./controllers/report_controller');

// Express settings
// ================

// instantiate our app
var app = express();
var PORT = process.env.PORT || 8080;

// override POST to have DELETE and PUT
app.use(methodOverride('_method'))

//allow sessions
app.use(session({
    secret: 'app',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', application_controller);
app.use('/main', main_controller);
app.use('/donation', donation_controller);
app.use('/report', report_controller);

module.exports = app;


app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})