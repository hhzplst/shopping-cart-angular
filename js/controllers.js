app.controller("MainController", function($scope, mainService, $location){
    $scope.teas = mainService.allTea();
    $scope.qty = ["1","2","3","4","5"];
    $scope.summary = {};
    $scope.summary.count = "Empty!";
    
    $scope.addToBag = function(index,qty){
        $scope.summary.count = mainService.addToBag(index,qty);
    };

    $scope.checkout = function(){
        mainService.checkout();
    };
});

app.controller("CheckoutController", function($scope, mainService){
    $scope.buy = mainService.boughtItem();

    $scope.getTotal = function(){
        return mainService.getTotal();
    };
    $scope.toggleEditForm = function(item){
        item.editForm = !item.editForm;
    };
    $scope.editQty = function(qty, index){
        $scope.buy[index].editForm = false;
        mainService.editQty(qty, index);
    };
    $scope.removeItem = function(index){
        mainService.removeItem(index);
    };
});

