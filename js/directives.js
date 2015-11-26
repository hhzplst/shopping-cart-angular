app.directive("ivyTeaInfo", function(){
  return{
    restrict: "A",
    templateUrl: "templates/teaInfo.html",
    scope: {
      tea: "="
    }
  };
});