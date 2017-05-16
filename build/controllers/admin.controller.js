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

};

module.exports.insertPaycheck = function (req, res) {
    console.log("Inserting paycheck");

    var user = req.body;

    query = "INSERT INTO paycheck (date, empID, amountPaid) SELECT ?, empID, (annualCompensation/12)-((annualCompensation*32)/1200) FROM employee";

    var connection = mysql.getConnection();
    var sqlquery = connection.query(query, [user.date], function (err, results) {
        if (err) {
            console.log(err);
            res
                .status(500)
                .json(err);
        } else {
            console.log(results);
            console.log("pay inserted into paycheck Table");
            res
                .status(201)
                .json(results);
        }
    });
    console.log("SQL Query:", sqlquery.sql);
    console.log("\nConnection closed");
    connection.end();
};

module.exports.totalSalary = function (req, res) {
    console.log('analytics 1 Details');

    var deptName = req.params.deptName;

    query = "select p.date,sum(p.amountPaid) as TotalSalary, d.deptName from paycheck p, employee e, department d where p.empID = e.empID and e.deptID = d.deptID and deptName = '" + deptName + "' group by deptName, date having date < curdate() order by date desc limit 1";

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