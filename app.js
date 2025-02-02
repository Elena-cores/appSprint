var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registroRouter = require('./routes/registro');
var tiendaRouter = require('./routes/tienda');
var referentesRouter = require('./routes/referentes');
var deportistaConcretoRouter = require('./routes/deportistaConcreto');
var iniciacionRouter = require('./routes/iniciacion');
var noticiasYEventosRouter = require('./routes/noticiasYEventos');
var deporteConcretoRouter = require('./routes/deporteConcreto');
var noticiaConcretaRouter = require('./routes/noticiaConcreta');
var administradorRouter = require('./routes/administrador');
var opinionRouter = require('./routes/opinion');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'El secreto que queramos nosotros'
}));

app.use(function(req, res, next){
  let error = req.session.error;
  let message = req.session.message;
  delete req.session.error;
  delete req.session.message;
  res.locals.error = "";
  res.locals.message = "";
  if (error) res.locals.error = `<p>${error}</p>`;
  if (message) res.locals.message = `<p>${message}</p>`;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', restrictLoginRegistro, loginRouter);
app.use('/registro', restrictLoginRegistro, registroRouter);
app.use('/tienda', tiendaRouter);
app.use('/referentes', referentesRouter);
app.use('/deportistaConcreto', deportistaConcretoRouter);
app.use('/iniciacion', iniciacionRouter);
app.use('/noticiasYEventos', restrictNoticias, noticiasYEventosRouter);
app.use('/deporteConcreto', deporteConcretoRouter);
app.use('/noticiaConcreta', restrictNoticias, noticiaConcretaRouter);
app.use('/administrador', restrict, administradorRouter);
app.use('/opinion', restrict, opinionRouter); /*comprueba si necesita un restrict*/
app.use('/logout', function(req, res, next){
  req.session.destroy(function(){
    res.redirect("/");
  })
}); 

function restrict(req, res, next){
  if(req.session.rol == "Administrador" || req.session.rol == "Premium"){
    next();
  } else {
    req.session.error = "Acceso no autorizado";
    res.redirect("/login");
  }
}


function restrictNoticias(req, res, next){
  if(req.session.rol == "Administrador" || req.session.rol == "Premium" || req.session.rol == "Estándar"){
    next();
  } else {
    req.session.message = "Si quieres tener las últimas novedades de nuestras publicaciones deportivas, regístrate <br> Si ya tienes una cuenta, inicia sesión";
    res.redirect("/registro");
  }
}

function restrictLoginRegistro(req, res, next){
  if(req.session.rol == "Administrador" || req.session.rol == "Premium" || req.session.rol == "Estándar"){
    req.session.error = "Para acceder, cierre sesión primero";
    res.redirect("/");
  } else {
    next()
  }
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
