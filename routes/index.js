'use strict';

var path = process.cwd();
var _ = require('underscore');
var uuidV4 = require('uuid/v4');
var endOfLine = require('os').EOL;
var Promise = require('promise');
var colors = require('all-colors');



module.exports = function(app, passport, mongoose) {
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            //if login fails
            res.redirect('/login');
        }
    }

    app.route('/')
        .get(function(req, res) {
            var User = mongoose.model('User');
            var polls = [];
            var promise = new Promise(function(resolve, reject) {

                User.find({}, function(err, docs) {

                    if (!err) {
                        docs.forEach(function(user) {
                            user.twitter.polls.forEach(function(poll) {
                                polls.push({ 'uid': poll.uid, 'title': poll.title });
                            })

                        }, this);
                        resolve(polls);
                    } else { throw err; };
                }, polls);
            }).then(function(polls) {
                res.render('index', {
                    title: 'Let\'s vote',
                    message: '†††',
                    authorised: req.isAuthenticated(),
                    user: (req.user) | [],
                    session: req.session,
                    polls: polls.length ? polls : []
                });
            });

        });

    app.route('/login')
        .get(function(req, res) {
            res.render('login', {
                title: 'Hey Hey Hey!',
                message: '†††',
                authorised: req.isAuthenticated(),
                user: (req.user),
                session: req.session
            });
        });

    app.route('/logout')
        .get(function(req, res) {
            req.logout();
            res.redirect('/login');
        });

    app.route('/profile')
        .get(isLoggedIn, function(req, res) {

            res.render('profile', {
                title: 'Hey Hey Hey!',
                message: '†††',
                authorised: req.isAuthenticated(),
                user: (req.user),
                session: req.session
            });

        });

    app.route('/api/:id')
        .get(isLoggedIn, function(req, res) {
            res.json(req.user.twitter);
        });
    app.route('/poll/create')
        .get(isLoggedIn, function(req, res) {
            res.render('create_poll', {
                title: 'Hey Hey Hey!',
                message: '†††',
                authorised: req.isAuthenticated(),
                user: (req.user),
                session: req.session
            });
        });
    app.route('/poll/get/:id')
        .get(isLoggedIn, function(req, res) {

            var pollIndex = _.findIndex(req.user.twitter.polls, { uid: req.params.id })
            var options = "";
            var words = req.user.twitter.polls[pollIndex].options;
            for (var i = 0; i < words.length; i++) {
                options += words[i].name + endOfLine;
            }

            options = options.trim();

            res.render('edit_poll', {
                title: 'Poll for ',
                message: '†††',
                authorised: req.isAuthenticated(),
                user: (req.user),
                session: req.session,
                poll: req.user.twitter.polls[pollIndex],
                polloptions: options,
                url: req.params.id
            });
        });
    app.route('/poll/view/:id')
        .get(function(req, res) {
            var User = mongoose.model('User');
            var pollId = (req.params.id);
            var optionAvailable = [];
            var pollSelect = [];
            var options = [];
            var promise = new Promise(function(resolve, reject) {

                User.find({}, function(err, docs) {
                    if (!err) {
                        docs.forEach(function(user) {
                            user.twitter.polls.forEach(function(poll) {
                                if (poll.uid === pollId) {
                                    pollSelect = (poll);
                                    poll.options.forEach(function(element) {
                                        optionAvailable.push(element.name.toString());
                                    });
                                }
                            }, this);
                        }, this);
                        for (var i = 0; i < optionAvailable.length; i++) {
                            options.push({ 'name': optionAvailable[i] });
                        }
                        resolve({ 'pollSelect': pollSelect, 'options': options });
                    } else { throw err; };
                }, this);

            }).then(function(poll) {

                res.render('view_poll', {
                    title: 'Poll for ',
                    message: '†††',
                    authorised: req.isAuthenticated(),
                    user: (req.user),
                    session: req.session,
                    poll: poll.pollSelect,
                    polloptions: poll.options,
                    url: req.params.id
                });
            });


        });

    app.route('/poll/data/:id')
        .get(function(req, res) {

            var User = mongoose.model('User');
            var pollsdata = {
                labels: [],
                datasets: []
            };

            var promise = new Promise(function(resolve, reject) {

                User.find({}, function(err, docs) {
                    if (!err) {
                        docs.forEach(function(user) {
                            var optionAvailable = [];
                            user.twitter.polls.forEach(function(poll) {
                                if (poll.uid === req.params.id) {
                                    poll.options.forEach(function(element) {
                                        pollsdata.labels.push(element.name.toString());
                                        optionAvailable.push(element.count || 0);
                                    });
                                }
                            }, this);
                            colors.ideaColorThemes
                            var pieColors = colors.ideaColorThemes.tauCeti.slice(0, optionAvailable.length);
                            pollsdata.datasets.push({
                                data: optionAvailable,
                                borderWidth: 2,
                                backgroundColor: pieColors,
                                hoverBackgroundColor: pieColors,
                                fillColor: ["rgba(205,64,64,0.5)", "rgba(220,220,220,0.5)", "rgba(24,178,235,0.5)", "rgba(220,220,220,0.5)"],
                                strokeColor: "rgba(220,220,220,0.8)",
                                highlightFill: "rgba(220,220,220,0.75)",
                                highlightStroke: "rgba(220,220,220,1)"
                            });
                        }, this);
                        resolve(pollsdata);
                    } else { throw err; };

                }, this);
            }).then(function(option) {

                res.send(option);
            });
        });
    app.route('/poll/my')
        .get(isLoggedIn, function(req, res) {
            var options = req.user.twitter.polls.map(function(a) {
                return { title: a.title, uid: a.uid };
            });

            res.render('view_my_poll', {
                title: 'Poll for ',
                message: '†††',
                authorised: req.isAuthenticated(),
                user: (req.user),
                session: req.session,
                polls: options
            });
        });
    app.route('/polls')
        .get(function(req, res) {
            var User = mongoose.model('User');
            var polls = [];
            var promise = new Promise(function(resolve, reject) {
                User.find({}, function(err, docs) {
                    if (!err) {
                        docs.forEach(function(user) {
                            user.twitter.polls.forEach(function(poll) {
                                polls.push({ 'uid': poll.uid, 'title': poll.title });
                            })
                        }, this);
                        resolve(polls);
                    } else { throw err; };
                }, polls);
            }).then(function(polls) {
                res.render('view_poll', {
                    title: 'Poll for ',
                    message: '†††',
                    authorised: req.isAuthenticated(),
                    user: (req.user),
                    session: req.session,
                    polls: polls
                });
            });

        });
    app.route('/poll/update/:id').post(isLoggedIn, function(req, res) {
        var pollIndex = _.findIndex(req.user.twitter.polls, { uid: req.params.id })
        var User = mongoose.model('User');

        var options = req.body.options.trim().split('\n');
        var optset = [];
        var newSet = [];

        User.findById(req.user.id, function(err, user) {
            // Handle any possible database errors
            if (err) {
                res.status(500).send(err);
            } else {

                pollFound = (_.findWhere(user.twitter.polls, {
                    "uid": req.params.id,
                }));

                // if poll exist 
                if (pollFound !== undefined) {
                    for (var i = 0; i < options.length; i++) {
                        var pollFound = {};
                        var optionsFound = [];
                        var opt = {};
                        var newOpt = {};

                        optionsFound = _.where(pollFound.options, {
                            "name": options[i],
                        });

                        // if option does not exist create it
                        if (optionsFound.length <= 0) {
                            opt = { 'name': options[i], 'count': null };
                            optset.push(opt);
                        }
                    }
                    var pollIndex = _.findIndex(user.twitter.polls, { "uid": req.params.id })
                    user.twitter.polls[pollIndex].title = req.body.title;
                    user.twitter.polls[pollIndex].options = optset;
                    user.markModified('twitter');

                    user.save(function(err, user) {
                        if (err) {

                            res.status(500).send(err)
                        } else {
                            res.send(user.twitter.polls[pollIndex]);
                        }
                    });

                } else {
                    res.status(500).send(err);
                }
            }
        });

    });
    app.route('/poll/delete/:id').post(isLoggedIn, function(req, res) {
        var pollIndex = _.findIndex(req.user.twitter.polls, { uid: req.params.id })
        var User = mongoose.model('User');

        var optset = [];
        var newSet = [];

        User.findById(req.user.id, function(err, user) {
            // Handle any possible database errors
            if (err) {
                res.status(500).send(err);
            } else {

                var pollFound = (_.findWhere(user.twitter.polls, {
                    "uid": req.params.id,
                }));


                // if poll exist 
                if (pollFound !== undefined) {

                    var pollIndex = _.findIndex(user.twitter.polls, { "uid": req.params.id })
                    var newPolls = [];

                    user.twitter.polls.forEach(function(poll, key) {
                        if (poll.uid !== user.twitter.polls[key].uid) {
                            newPolls.push(poll);
                        }
                    });
                    user.twitter.polls = newPolls;

                    user.markModified('twitter');

                    user.save(function(err, user) {
                        if (err) {

                            res.status(500).send(err)
                        } else {
                            res.send(user.twitter.polls[pollIndex]);
                        }
                    });

                } else {
                    res.status(500).send(err);
                }
            }
        });

    });
    app.route('/poll/vote/:id').post(function(req, res) {

        var options = req.body.options;
        var optset = [];
        var newSet = [];
        var User = mongoose.model('User');
        var polls = [];
        var promise = new Promise(function(resolve, reject) {
            User.find({}, function(err, docs) {
                if (!err) {
                    docs.forEach(function(user) {
                        user.twitter.polls.forEach(function(poll) {
                            var pollIndex = _.findIndex(poll.options, { name: req.body.options })
                            if (pollIndex > -1) {

                                User.findById(user.id, function(err, user) {
                                    // Handle any possible database errors
                                    if (err) {
                                        res.status(500).send(err);
                                    } else {

                                        var pollFound = [];
                                        pollFound = (_.findIndex(user.twitter.polls, {
                                            "uid": req.params.id,
                                        }));

                                        // if poll exist 
                                        if (pollFound > -1) {

                                            var optionIndex = _.findIndex(user.twitter.polls[pollFound].options, { "name": req.body.options });

                                            var x = (poll.options[pollIndex].count | 0)
                                            poll.options[pollIndex].count = x++;
                                            user.twitter.polls[pollFound].options[optionIndex].count = x;
                                            user.markModified('twitter');
                                            user.save(function(err, user) {
                                                if (err) {
                                                    res.status(500).send(err)
                                                } else {
                                                    res.send(user.twitter.polls[pollIndex]);
                                                }
                                            });

                                        } else {
                                            res.status(500).send(err);
                                        }
                                    }
                                });
                            }
                        })
                    }, this);
                    resolve(polls);
                } else { throw err; };
            }, polls);
        })
    });

    app.route('/poll/create')
        .post(isLoggedIn, function(req, res) {
            var User = mongoose.model('User');

            var options = req.body.options.split('\n');
            var optset = [];
            var newSet = [];

            User.findById(req.user.id, function(err, user) {
                // Handle any possible database errors
                if (err) {
                    res.status(500).send(err);
                } else {


                    pollFound = (_.findWhere(user.twitter.polls, {
                        "title": req.body.title,
                    }));

                    // if poll exist 
                    if (pollFound !== undefined) {

                        for (var i = 0; i < options.length; i++) {
                            var pollFound = {};
                            var optionsFound = [];
                            var opt = {};
                            var newOpt = {};

                            optionsFound = _.where(pollFound.options, {
                                "name": options[i],
                            });

                            // if option does not exist create it
                            if (optionsFound.length <= 0) {
                                opt = { 'name': options[i], 'count': null };
                                optset.push(opt);
                            }
                        }
                        var pollIndex = _.findIndex(user.twitter.polls, { title: req.body.title })
                        user.twitter.polls[pollIndex].options = optset;
                        //console.log(user.twitter.polls[pollIndex].options);

                    } else {

                        for (var i = 0; i < options.length; i++) {
                            // set  poll options
                            newOpt = { 'name': options[i], 'count': null };
                            newSet.push(newOpt);
                        }
                        // create new poll
                        var uniqID = _.uniqueId('poll_' + Date.now() + '_' + uuidV4() + '_')
                        var g2g = { uid: uniqID, title: req.body.title, options: newSet, date: Date.now() };
                        user.twitter.polls.push(g2g)
                    }
                    var pollIndex = _.findIndex(user.twitter.polls, { title: req.body.title })

                    //user.twitter.polls = [];
                    user.save(function(err, user) {
                        if (err) {
                            res.status(500).send(err)
                        } else {
                            res.send(user.twitter.polls[pollIndex].uid);
                        }
                    });
                }

            });
        });

    app.route('/auth/twitter')
        .get(passport.authenticate('twitter'));

    app.route('/auth/twitter/callback')
        .get(passport.authenticate('twitter', {
            successRedirect: '/',
            failureRedirect: '/login'
        }));

}