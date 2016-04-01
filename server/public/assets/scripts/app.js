var heroApp = angular.module("heroApp", ["ngRoute"]);

heroApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/enter", {
            templateUrl: "/views/partials/enter.html",
            controller: "EnterCtrl"
        }).
        when("/list", {
            templateUrl: "/views/partials/list.html",
            controller: "ListCtrl"
        }).
        otherwise({
            redirectTo: '/list'
        });
}]);
