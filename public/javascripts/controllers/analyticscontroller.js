payrollApp.controller('analyticsController', function ($scope, $http, $location, $rootScope, $window) {
    $scope.page = "analytics";
    $scope.depts = [
        { name: 'Devops 1' },
        { name: 'Engineering' },
        { name: 'Devops 2' },
        { name: 'Human Resources' }
    ];
    $scope.employees = [
        { name: 'Roopesh Reddy' },
        { name: 'Sai Teja Racharla' },
        { name: 'Hemanth Kocherlakota' },
        { name: 'Koushik mekala' },
        { name: 'Sanketh Doddapaneni' },
        { name: 'Sai Srinadh Krothapalli' },
        { name: 'Varun Nuthalapati' },
        { name: 'chandra' }
    ];


    function monthName(dStr) {
        var d = new Date(dStr);
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[d.getMonth()];
    }
    $scope.update = function () {
        console.log("Dept name", $scope.deptName.name);

        $http.get('/api/admin/analytics/totalSalary/' + $scope.deptName.name).then(function (response) {
            console.log("REsponse from Total Salary Analytics", response);
            if (response.status === 200) {

                $scope.totalSalary = response.data;
                console.log("Total Salary", $scope.totalSalary);
                Highcharts.chart('lastPaychecks', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Last Month Salary'
                    },
                    subtitle: {
                        text: 'Monthly Data'
                    },
                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Amount'
                        }
                    },
                    legend: {
                        enabled: true
                    },
                    series: [{
                        name: 'Months',
                        data: [
                            [monthName($scope.totalSalary["0"].date), Number($scope.totalSalary["0"].TotalSalary)]
                        ]
                    }]
                });

            }
        }).catch(function (error) {
            console.log(error);
        });
    }
    $scope.employeeUpdate = function () {
        $http.get('/api/admin/analytics/quarterlySalary/' + $scope.employeeName.name).then(function (response) {
            console.log("Employee Response", response.data);
            if (response.status === 200) {
                var quarter1 = (Number(response.data[0].TotalSalary)).toFixed(2);
                var quarter2 = (Number(response.data[1].TotalSalary)).toFixed(2);
                var quarter3 = (Number(response.data[2].TotalSalary)).toFixed(2);
                var quarter4 = (Number(response.data[3].TotalSalary)).toFixed(2);
                Highcharts.chart('quarterlySalary', {
                    chart: {
                        type: 'column',
                        options3d: {
                            enabled: true,
                            alpha: 10,
                            beta: 25,
                            depth: 70
                        }
                    },
                    title: {
                        text: 'Quarterly Salary Details of Employee'
                    },
                    plotOptions: {
                        column: {
                            depth: 25
                        }
                    },
                    xAxis: {
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    series: [{
                        name: 'Salary',
                        data: [Number(quarter1),Number(quarter2),Number(quarter3),Number(quarter4)]
                    }]
                });
            }
        });
    };

});