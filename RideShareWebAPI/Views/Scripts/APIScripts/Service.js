app.service("APIService", function ($http) {
    var cCustomer;
    this.getSubs = function () {
        return $http.get("http://localhost:61017/api/Customers");
    }

    this.getDrivers = function () {
        return $http.get("http://localhost:61017/api/Drivers");
    }

    this.keepCustomer = function (currentCustomer) {
        this.cCustomer = currentCustomer;
    }

    this.giveCurrentCustomer = function(){
        return this.cCustomer;
    }

    this.giveCustomer = function(id) { 
        return $http.post("http://localhost:61017/api/Customers/PostCustomers?paramerter="+id);
    }

    this.giveDriver = function(driverId){
        return $http.post("http://localhost:61017/api/Drivers/PostDrivers?parameter="+driverId);
    } 
});

app.service("dataService", function () {
    this.customer = null;
    this.driverList = null;
    
    
})