var userCtrl = require('../build/controllers/user.controller');
var adminCtrl = require('../build/controllers/admin.controller');

module.exports = function (app) {

    app.get('/api/user/login/:email/:password', userCtrl.login);

    app.get('/api/user/announcement', userCtrl.announcement);

    app.get('/api/user/all/announcements', userCtrl.viewAnnouncements);

    app.get('/api/user/viewProjects/:empID', userCtrl.viewProjects);

    app.get('/api/user/holiday', userCtrl.nextHoliday);

    app.get('/api/user/all/holidays', userCtrl.holidayCalender);

    app.get('/api/user/contactus', userCtrl.contactus);

    app.get('/api/user/all/leaveDetails/:empID', userCtrl.leaveDetails);

    app.get('/api/user/all/employees', userCtrl.companyDirectory);

    app.get('/api/user/insurance/:empID', userCtrl.insuranceDetails);

    app.get('/api/user/dependent/:empID', userCtrl.dependentDetails);

    app.get('/api/user/nextPay/:empID', userCtrl.nextPay);

    app.get('/api/user/all/previousPay/:empID', userCtrl.previousAllPay);

    app.get('/api/user/lastPay/:empID', userCtrl.lastPay);

    app.get('/api/user/profile/:empID', userCtrl.profile);

    app.post('/api/user/insert/leave', userCtrl.insertLeave);
    
    app.post('/api/user/update/leave', userCtrl.updateLeavesLeft);

    app.post('/api/admin/insert/emp', userCtrl.addEmployee);

    app.post('/api/admin/insert/announcement', userCtrl.insertAnnouncement);




    app.get('/api/admin/lastPayDate', adminCtrl.lastPayDate);

    app.get('/api/admin/lastmonth/emp', adminCtrl.lastAddedEmp);

    app.post('/api/admin/insert/paycheck', adminCtrl.insertPaycheck);

    app.get('/api/admin/analytics/totalSalary/:deptName', adminCtrl.totalSalary);

};