// Routing of the website

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index',  {
        templateURL : 'index.html', 
        controller : 'APIController'
    }).when( '/customer' , {
        templateURL : '/customer.html' ,
        controller : 'customerController'
    }).when( '/driver' , {
        templateURL : 'driver.html' ,
        controller :'driverController'
    }).when( '/rideStatus' , {
        templateURL :'rideStatus.html' ,
        controller : 'rideStatusController'
    }).when( '/about' , {
        templateURL : 'about.html' ,
        controller : 'aboutController'
       }).otherwise({
        redirectto : '/index'
    });
}]);