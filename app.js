let express = require("express");
let load = require("express-load");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let expressSession = require("express-session"); 
let path = require("path");
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
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

load('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(3000,function(){
  console.log("servidor rodando")
});

module.exports = app;
