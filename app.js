let express = require("express");
let load = require("express-load");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let expressSession = require("express-session"); 
let methodOverride = require("method-override");
let path = require("path");
let error = require("./middlewares/error");
let app = express();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('pratagy-web'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

load('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(3000,() => {
  console.log("servidor rodando")
  
});

module.exports = app;

load('models').then('controllers').then('routes').into(app);

app.use(error.notFound);
app.use(error.serverError)