var userCtrl = require('../build/controllers/user.controller');

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
};