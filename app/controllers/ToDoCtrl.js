"use strict";


app.controller("ToDoCtrl", function ($scope, $location, ApiCallFactory) {

$scope.ToDoInfo = {
  Id: "",
  Name: "",
  Description: "",
  Status: "",
  CompletedOn: ""

};




    $scope.loadAllToDos = function() {
        console.log("loadAllToDos has started!")
        ApiCallFactory.getToDos()
          .then(function(data){
            console.log("it worked!")
            console.log("data", data);
            $scope.ToDoInfo = data
          })
    }
})