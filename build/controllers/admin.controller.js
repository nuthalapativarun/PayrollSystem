var mysql = require('../database/db');
var https = require('https');
var dateTime = require('node-datetime');

module.exports.lastPayDate = function (req, res) {
    console.log('Last pay Date');

    query = "select date from paycheck where date < curdate() order by date desc limit 1";

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

module.exports.lastAddedEmp = function (req, res) {
    console.log('last added Details');

    query = "select fullname,serviceDate from employee where serviceDate > date_sub(curdate(), interval 30 day) and serviceDate <= curdate() order by serviceDate asc limit 6";

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

}