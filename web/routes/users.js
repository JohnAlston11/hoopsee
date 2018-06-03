var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSalt(saltRounds);
const passport = require('passport');
let user;
let newReq= '';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Create New User */
router.post('/signup', function (req, res, next) {
  const db = require('../db.js');
  const un = req.body.username;
  const pw = req.body.pw1;

  bcrypt.hash(pw, saltRounds, function (err, hash) {
    db.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [un, hash],
      function (err, results, fields) {
        if (err) throw err;

        db.query('SELECT LAST_INSERT_ID() as user_id', function (error, results, fields) {
          if (error) throw error;

          const user_id = results[0];
          console.log(user_id);
        })
        res.send({
          message: 'All Set.. Now Log In'
        })

      })
  });
});

router.post('/login', passport.authenticate('local'), (req, res)=>{
  newReq = req;
  console.log(req);
  res.send({
    message: 'logged in',
    user: req.body.username
  });
});

router.get('/loggedin', (req, res)=>{
  if(newReq){
    res.send(newReq.isAuthenticated());
  }
})

router.get('/logout', function(req, res){
  user = '';
  newReq.logOut();
  newReq.session.destroy();
  newReq = '';
  res.send({message: 'logged out'})
})

passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});

passport.deserializeUser((user_id, done)=> {
  done(null, user_id);
});

function authenicationMiddleware() {
  return (req, res, next) => {

    if (req.isAuthenticated()) return next();

    res.redirect('/login')
  };
};


module.exports = router;