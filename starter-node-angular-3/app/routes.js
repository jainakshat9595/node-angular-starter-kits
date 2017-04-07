// app/routes.js

// grab the nerd model

var Nerd = require('./models/nerd');

    module.exports = function(app) {

        // server routes ===========================
        // handle things like api calls
        // authenticate routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. nothing after res.send(err) will execure
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON
            });
        });

        // route to handle creating (app.post)
        // route to handle delete (app.delete)

        // front routes ==========================
        // route to handle all angular requests
        app.get('*', function (req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
