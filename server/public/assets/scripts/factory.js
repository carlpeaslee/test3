heroApp.factory("HeroService", ["$http", function($http){

    var getData = function(){
       $http.get("/hero").then(function(response){
          heroTeam.members = response.data;
          console.log(heroTeam);
       });
    };

    var postData = function(data){
       $http.post("/hero", data).then(function(response){
           getData();
       });
    };

    var deleteData = function(data){
        console.log(data);
        $http.delete("/hero/" + data).then(function(response){
           getData();
       });
    };

    var assemble = function(){
        if(heroTeam.members === undefined){
            getData();
      }
    };

    var heroTeam = {};

    var powers = ["Invisibility", "Flight", "Super Speed", "Heat Vision", "Super Strength", "Accelerated Healing", "Power Blast", "Animal Affinity"]

    return {
      postData: postData,
      getData: getData,
      assemble: assemble,
      heroTeam: heroTeam,
      deleteData: deleteData,
      powers : powers
    };
}]);
