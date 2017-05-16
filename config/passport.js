'use strict';

var twitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/users');
var configAuth = require('./auth');
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new twitterStrategy({
            consumerKey: configAuth.twitter.clientID,
            consumerSecret: configAuth.twitter.clientSecret,
            callbackURL: configAuth.twitter.callbackURL
        },
        function(token, refreshToken, profile, done) {
            process.nextTick(function() { 
                User.findOne({ 'twitter.id': profile.id }, function(err, user) {
                    if (err) {
                        console.log('err');
                        return done(err);
                    }

                    if (user) {
                        console.log('user');
                         return done(null, user);
                    } else {
                        console.log('new User');
                        var newUser = new User();
                        newUser.twitter.id = profile.id; 
                        newUser.twitter.name = profile.username; 
                        newUser.twitter.screen_name = profile.screen_name; 
                        newUser.twitter.profile_image = profile._json.profile_image_url_https; 

                        newUser.save(function(err) {
                            if (err) {
                                throw err;
                            }

                            return done(null, newUser);
                        });
                    }
                });
            });
     }));
};