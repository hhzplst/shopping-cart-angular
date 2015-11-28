var app = angular.module("shoppingCart", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "templates/main.html",
      controller: "MainController"
    })
    .when("/checkout", {
      templateUrl: "templates/checkout.html",
      controller: "CheckoutController"
    })
    .otherwise({
      redirectTo: "/"
    });
});