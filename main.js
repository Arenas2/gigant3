var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');

//- Rutas

var routes = require('./http/routes');
var routeUsuario = require('./http/routes/routeUsuario');
var routeAtributo = require('./http/routes/routeAtributo');
var routeCategoria = require('./http/routes/routeCategoria');
var routeInfo = require('./http/routes/routeInfo');
var routeProducto = require('./http/routes/routeProducto');
var routeMarca = require('./http/routes/routeMarca');
var routeColor = require('./http/routes/routeColor');
// - Conexion a la base de datos

var con = require('./http/connection');

// require('./conf/auth')(app);

// - Middlewares

var lessMiddleware = require('less-middleware')

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());

app.use(session({secret: '01f4845/564564/6@@fas588--[[}++', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

morgan('combined', {skip: function (req, res) { return res.statusCode < 400 }});

app.use('/', routes);
app.use('/', routeUsuario);
app.use('/', routeAtributo);
app.use('/', routeCategoria);
app.use('/', routeInfo);
app.use('/', routeProducto);
app.use('/', routeMarca);
app.use('/', routeColor);


app.use(lessMiddleware(__dirname + '/assets'));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'http')));

module.exports = app;
