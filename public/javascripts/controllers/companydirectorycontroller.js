payrollApp.controller('companyDirectoryController', function ($http, $window, $location, $scope) {

$scope.employees = [
    {
        fullname: "Sanketh Doddapaneni",
        position: "Sr. Software Enigneer",
        department: "Mobile",
        serviceDate: "2017-06-06",
        reportsTo: "Daniel"
    },
      {
        fullname: "Srinadh Krothapalli",
        position: "Sr. Software Enigneer",
        department: "Web",
        serviceDate: "2017-06-06",
        reportsTo: "Rock"
    },
      {
        fullname: "Roopesh Reddy",
        position: "Sr. Software Enigneer",
        department: "IOS",
        serviceDate: "2017-06-06",
        reportsTo: "John"
    },
];
});
