app.directive("ivyTeaInfo", function(){
  return{
    restrict: "A",
    templateUrl: "templates/teaInfo.html",
    scope: {
      tea: "=",
      qty: "=",
      index: "@",
      count: "@",
      addToBag: "&"
    }
  };
});

app.directive("caffeineScale",function(){
  return{
    restrict: "A",
    templateUrl: "templates/caffeineScale.html",
    scope: {
      caffeinemg: "@"
    },
    link: function(scope, element, attrs){
      if(attrs.caffeinemg < 100){
        element.addClass("low");
        scope.level = "low";
      }else if(attrs.caffeinemg > 100 && attrs.caffeinemg < 200){
        scope.level = "medium";
        element.addClass("medium");
      }else{
        element.addClass("high");
        scope.level = "high";
      }
    }
  };
});