var mysql = require('../database/db');
var https = require('https');

module.exports.login = function (req, res) {
    console.log('User Login');

    var email = req.params.email;
    var password = req.params.password;
    req.session.email = email;
    console.log('Email is:: %s', email);
    console.log('Password is:: %s', password);
    query = "select * from profile where email = '" + email + "' and password = '" + password + "'";

    mysql.fetchData(function (err, results) {
        if (err) {
            res.status(500)
                .json(err);
        }
        else if (results.length > 0) {
            res.status(200)
                .json(results);
        }
        else {
            res.status(204)
                .json(results);
        }
    }, query);

};


module.exports.insertUser = function (req, res) {
    console.log("Inserting user");

    var user = req.body;
    req.session.email = user.email;
    console.log("User is: ", JSON.stringify(user));

    query = "insert into profile (fname, lname, phone, email, password) values(?,?,?,?,?)";

    var connection = mysql.getConnection();
    var sqlquery = connection.query(query, [user.firstname, user.lastname, user.phone, user.email, user.password], function (err, results) {
        if (err) {
            console.log(err);
            res
                .status(500)
                .json(err);
        } else {
            console.log(results);
            console.log("User inserted into User Table");
            res
                .status(201)
                .json(results);
        }
    });
    console.log("SQL Query:", sqlquery.sql);
    console.log("\nConnection closed");
    connection.end();
};



module.exports.updateFitbit = function (req, res) {                 //Updating Activity data into Fitbit table in DB
    console.log("Updating Fitbit");

    var fitbit = req.body;
    console.log("User is: ", JSON.stringify(fitbit));

    query = "update fitbit SET steps = ?, calories = ?, distance = ?, activeminutes = ? where email = ?";

    var connection = mysql.getConnection();
    var sqlquery = connection.query(query, [fitbit.steps, fitbit.calories, fitbit.distance, fitbit.activeminutes, fitbit.email], function (err, results) {
        if (err) {
            console.log(err);
            res
                .status(500)
                .json(err);
        } else {
            res
                .status(201)
                .json(results);
        }
    });
    connection.end();

};
