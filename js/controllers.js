app.controller("MainController", function($scope, mainService){
    $scope.teas = mainService.allTea();
    $scope.qty = ["1","2","3","4","5"];
});

app.controller("CheckoutController", function($scope, mainService){

});

