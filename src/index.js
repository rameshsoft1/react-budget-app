<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
<body ng-app="myApp">
<p><a href="#/!">Main</a></p>
<a href="#!banana">Banana</a>
<a href="#!tomato">Tomato</a>

<div ng-view></div>
<script>
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/banana", {
        template : "<div ng-controller='bananaCtrl' <h1>Banana</h1><button ng-click='myFunction()'>click</button></div>"
    })
    .when("/tomato", {
        template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
    })
    .otherwise({
        template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
    });
});
//controller
app.controller('bananaCtrl', function($scope, myservice) {
    
     $scope.myFunction = function() { // here you calling banana template's function 
        $scope.myfun = myservice.myFunc();// here you calling service function 
        console.log($scope.myfun); // output : banana
    }

});

//services
app.service('myservice', function() {
    this.myFunc = function () {
        return "banana";
    }
});

</script>
</body>
</html>
