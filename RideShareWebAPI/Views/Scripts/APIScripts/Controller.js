app.controller('APIController', function ($scope,$location, APIService, dataService) {
    getAll();

    function getAll() {
        var servCall = APIService.getSubs();
        servCall.then(function (d) {
            console.log(d.data);
            $scope.customer = d.data;
        }, function (error) {
            $scope.error('Oops! Something went wrong while fetching the data.');
        })
    }

   $scope.check = function checkCustomer(Email,Pword) {
        angular.forEach($scope.customer, function (value, index) {
            console.log(value.XCoordinate, value.YCoordinate);
            console.log(index);
            if (value.Email == Email && value.Password == Pword) {
                var servCall = APIService.getDrivers();
                servCall.then(function (d) {
                    $scope.drivers = d.data;
                    validatedCustomer = value;
                    dataService.customer = validatedCustomer;
                    dataService.driverList = $scope.drivers;
                    //Did a match happen on Customer's email to the database?
                    console.log("Hi b****");
                    //Lets try to keep the Customer Info Via Service
                    APIService.keepCustomer(validatedCustomer);
                    //APIService.giveCustomer(Email);
                    $route.redirectTo()
                    
                    
                }, function (error) {
                    $scope.error('Oops! Something went wrong while fetching the data.');
                })
            }
        })
   }

})

app.controller('customerController', function ($scope, APIService) {
  // $scope.validatedCustomer = APIService.giveCurrentCustomer();
    //console.log($scope.validatedCustomer);
    //console.log(APIService.giveCustomer("em322609@ohio.edu"));
    $scope.populateMapfn = function populateMap() {
        angular.forEach(dataService.driverList, function (value, index) {
            
        })
    }

})

app.controller('driverController', function ($scope) {

})

app.controller('rideStatusController', function ($scope) {

})

app.controller('aboutController', function ($scope) {

})