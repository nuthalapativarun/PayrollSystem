payrollApp.controller('addemployeeController', function ($scope,$http,$location,$rootScope,$window) {
    console.log("In admin dashboard controller");
    this.addEmployee = function(){
        console.log(this.user);
    }
});