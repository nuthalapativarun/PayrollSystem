var mysql = require('../database/db');
var https = require('https');
var dateTime = require('node-datetime');

module.exports.login = function (req, res) {
    console.log('User Login');

    var email = req.params.email;
    var password = req.params.password;
    req.session.email = email;
    console.log('Email is:: %s', email);
    console.log('Password is:: %s', password);
    query = "select * from employee where email = '" + email + "' and password = '" + password + "'";

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

module.exports.announcement = function (req, res) {
    console.log('Announcements');
    var dt = dateTime.create();
    var date = dt.format('Y-m-d');

    query = "SELECT * FROM announcement where aDate>= '" + date + "' order by aDate asc limit 3";

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

module.exports.viewAnnouncements = function (req, res) {
    console.log('Announcements');

    query = "SELECT * FROM announcement order by aDate asc";

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

module.exports.viewProjects = function (req, res) {
    console.log('Projects');

    var empID = req.params.empID;

    query = "select * from project where projID = any (select projID from proj_emp where empID = '" + empID + "')";

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

module.exports.nextHoliday = function (req, res) {
    console.log('Holiday');

    query = "SELECT * FROM holidays_calender where hDate > curdate() limit 1";

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

module.exports.holidayCalender = function (req, res) {
    console.log('Holiday Calender');

    query = "SELECT * FROM holidays_calender order by hDate asc";

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

module.exports.contactus = function (req, res) {
    console.log('Contact Us');

    query = "SELECT * FROM contactus";

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

module.exports.leaveDetails = function (req, res) {
    console.log('Leave Details');

    var empID = req.params.empID;

    query = "select * from empLeave where empID = '" + empID + "'";

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

module.exports.companyDirectory = function (req, res) {
    console.log('Company Directory Details');

    query = "select e.fullname,e.position, d.deptName, e.serviceDate, e.reportsTo from employee e, department d where d.deptID = e.deptID";

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

module.exports.insuranceDetails = function (req, res) {
    console.log('Insurance Details');

    var empID = req.params.empID;

    query = "SELECT * FROM insurance where empID = '" + empID + "'";

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

module.exports.dependentDetails = function (req, res) {
    console.log('Dependent Details');

    var empID = req.params.empID;

    query = "SELECT * FROM dependent where empID = '" + empID + "'";

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

module.exports.nextPay = function (req, res) {
    console.log('Next Pay Details');

    var empID = req.params.empID;

    query = "SELECT * FROM paycheck where empID = '" + empID + "' and date > curdate() order by date asc limit 1";

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

module.exports.previousAllPay = function (req, res) {
    console.log('Previous Pay Details');

    var empID = req.params.empID;

    query = "select * from paycheck where empID = '" + empID + "' and date < curdate() order by date desc limit 4";

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

module.exports.lastPay = function (req, res) {
    console.log('Last Pay Details');

    var empID = req.params.empID;

    query = "select p.date, p.amountPaid, s.federalTax, s.stateTax, s.localTax from paycheck p, salary s where p.empID = s.empID and p.empID = '" + empID + "' and date < curdate() order by date desc limit 1";

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

module.exports.profile = function (req, res) {
    console.log('profile Details');

    var empID = req.params.empID;

    query = "select * from employee where empID = '" + empID + "'";

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
module.exports.addEmployee = function (req, res) {               
    console.log("User Data Post to database");

      var user = req.body;
    req.session.empID = user.empID;
    console.log("User is: ", JSON.stringify(user));

    query = "INSERT INTO employee (empID, fullname, ssn, gender, maritalStatus, citizenship, militaryStatus, address, dob, email, serviceDate, employmentType, annualCompensation, hours, deptID, position, password, phone, paidLeaves, leavesLeft) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    var connection = mysql.getConnection();
    var sqlquery = connection.query(query, [user.empID, user.fullname, user.ssn, user.gender, user.maritalStatus, user.citizenship, user.militaryStatus, user.address, user.dob, user.email, user.serviceDate, user.employmentType, user.annualCompensation, user.hours, user.deptID, user.position, user.password, user.phone, user.paidLeaves, user.leavesLeft,], function (err, results) {
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
    
module.exports.insertLeave = function (req, res) {
    console.log("Inserting Leave");

    var user = req.body;
    req.session.email = user.email;
    console.log("Leave is: ", JSON.stringify(user));

    query = "INSERT INTO empLeave (date, reason, hours, empID) VALUES (?,?,?,?)";

    var connection = mysql.getConnection();
    var sqlquery = connection.query(query, [user.date, user.reason, user.hours, user.empID], function (err, results) {
        if (err) {
            console.log(err);
            res
                .status(500)
                .json(err);
        } else {
            console.log(results);
            console.log("Leave inserted into empLeave Table");
            res
                .status(201)
                .json(results);
        }
    });
    console.log("SQL Query:", sqlquery.sql);
    console.log("\nConnection closed");
    connection.end();
};

module.exports.updateLeavesLeft = function (req, res) {
    console.log("Inserting Leave");

    var user = req.body;
    req.session.empID = user.empID;
    console.log("Leave is: ", JSON.stringify(user));

    query = "UPDATE employee SET leavesLeft = leavesleft - ? WHERE empID = ?";
   
    var connection = mysql.getConnection();
    var sqlquery = connection.query(query, [user.hours,user.empID], function (err, results) {
        if (err) {
            console.log(err);
            res
                .status(500)
                .json(err);
        } else {
            console.log(results);
            console.log("Leave Left updated into emp Table");
            res
                .status(201)
                .json(results);
        }
    });
    console.log("SQL Query:", sqlquery.sql);
    console.log("\nConnection closed");
    connection.end();
};

module.exports.insertAnnouncement = function (req, res) {
    console.log("Inserting announcement");

    var user = req.body;
    console.log("announcement is: ", JSON.stringify(user));

    query = "INSERT INTO announcement (aDate, aHeading, aText) VALUES (?, ?, ?)";

    var connection = mysql.getConnection();
    var sqlquery = connection.query(query, [user.aDate, user.aHeading, user.aText], function (err, results) {
        if (err) {
            console.log(err);
            res
                .status(500)
                .json(err);
        } else {
            console.log(results);
            console.log("announcment inserted into announcement Table");
            res
                .status(201)
                .json(results);
        }
    });
    console.log("SQL Query:", sqlquery.sql);
    console.log("\nConnection closed");
    connection.end();
};