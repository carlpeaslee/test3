heroApp.controller("EnterCtrl", ["$scope", "HeroService", function($scope, HeroService){
    var heroService = HeroService;

    $scope.heroObject = {};
    $scope.submit = function(data){
        heroService.postData(data);
        $scope.heroObject = {};
    };

}]);


heroApp.controller("ListCtrl", ["$scope", "HeroService", function($scope, HeroService){
    var heroService = HeroService;
    heroService.assemble();

    $scope.heroTeam = heroService.heroTeam;

    $scope.powerList = heroService.powers;

    console.log($scope.powerList);
    $scope.deleteData = heroService.deleteData;

}]);
