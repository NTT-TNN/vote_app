'use strict';
var Poll=require('../models/polls');

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var savepoll=require(path+'/app/controllers/savePoll.server.js');
module.exports = function (app, passport) {

    function isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/login');
        }
    }

    var clickHandler = new ClickHandler();

    var savePoll=new savepoll();
    app.route('/')
        .get(isLoggedIn, function (req, res) {
            res.sendFile(path + '/public/index.html')
        })
        .post(isLoggedIn,function(req,res){
          var poll=new Poll(req.body);
          poll.question=req.body.question;
          for(var i=0;i<req.body.optional.length;++i){
            poll.choices[i]={
              text:req.body.optional[i],
              votes:0
            };
          }

          console.log(req.body.optional.length);
          poll.save(function(err){
            if(err) throw err;
          })
          //res.send(req.body);
          res.sendFile(path + '/public/index.html')
        });


    app.route('/login')
        .get(function (req, res) {
            res.sendFile(path + '/public/login.html');
        });

    app.route('/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/login');
        });

    app.route('/newpoll')
      .get(isLoggedIn,function(req,res){
        res.sendFile(path+'/public/newpoll.html')
      })

    app.route('/profile')
        .get(isLoggedIn, function (req, res) {
            res.sendFile(path + '/public/profile.html');
        });

    app.route('/api/:id/userGithub')
        .get(isLoggedIn, function (req, res) {
            res.json(req.user.github);
            //console.log(req.user.id);
        });

    app.route('/auth/github')
        .get(passport.authenticate('github'));

    app.route('/auth/github/callback')
        .get(passport.authenticate('github', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));


    app.route('/api/polls')
      .get(isLoggedIn,clickHandler.auto);

    app.route('/api/user/poll')
      .get(isLoggedIn,savePoll.save)
      .post(isLoggedIn,function(req,res){
        res.send(req.body);
      })
};
