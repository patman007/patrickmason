const express = require("express");
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser())

const port = process.env.PORT || 5000;
// simplify logging instead of typing console.log each time
const log = console.log;

// used for logging routes, status codes, timimg, and data transfers
const logger = require("morgan");
app.use(logger("dev"));
// used for color coding console.logs
const chalk = require("chalk");

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
const db = "passport_react_DEMO";
mongoose
  .connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(log(`Connected to ${chalk.blue(db)} databse`))
  .catch((error) => log(chalk.redBright(error)));

let User = require("./models/user");

const passport = require("passport");
const LocalStrategy = require("passport-local");
app.use(
  require("express-session")({
    secret: "Blah blah blah", // used to calculate the hash to protect our password
    resave: false,
    saveUninitialized: false,
  })
);

// starts a session
app.use(passport.initialize());
// allows access to
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
// stores User object in session
passport.serializeUser(User.serializeUser());
// removes User object from session
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  log("Root route");
  res.end();
  // res.render("home.ejs");
});

app.get("/newsfeed", isLoggedIn, (req, res) => {
  console.log('Newsfeed: ', req.isAuth)
  res.json({isAuth: req.isAuth});
});

// app.get("/signup", (req, res) => {
//   res.render("signup.ejs");
// });

app.post("/signup", (req, res) => {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      log(chalk.red.inverse(err));
      res.json({ isAuth: false });
    } else {
      passport.authenticate("local")(req, res, function () {
        res.json({ isAuth: true });
      });
    }
  });
});

app.get("/login", function (req, res) {
  res.json({isAuth: false})
});

// app.post("/login", (req, res, next)=>{
//   passport.authenticate("local", (err, user, info)=>{
//     console.log('User: ', URLSearchParams)
//     !err ? res.json({isAuth: true}) : res.json({isAuth: false})
//   })
  
// });

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/newsfeed",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

app.get("/logout", function (req, res) {
  // When we logout, Passport destroys all user data in the session.
  req.logout();
  // redirect them to the home page
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  // isAuthenticated is a built in Passport method
  if (req.isAuthenticated()) {
    log(req.isAuthenticated());
    req.isAuth = req.isAuthenticated()
    // next() tells it to move onto the next piece of code
    return next();
  }
  res.redirect("/login");
}

app.listen(port, () => {
  log(`App listening on port ${chalk.yellowBright.inverse(port)}`);
});
