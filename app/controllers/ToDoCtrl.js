"use strict";


app.controller("ToDoCtrl", function ($scope, $location, ApiCallFactory, $routeParams) {

$scope.ToDoInfo = {
  Id: "",
  Name: "",
  Description: "",
  Status: "",
  CompletedOn: ""

};


// Create a simple Angular frontend.
// Users should be able to create a new task.
// Users should be able to update a task's Name, Description and Status.
// Validation should be performed.
// Users should be able to view a list of tasks by Status.
// Users should be able to view a list of tasks by CompletedOn.

    $scope.loadAllToDos = function() {
        console.log("loadAllToDos has started!")
        ApiCallFactory.getToDos()
          .then(function(data){
            console.log("it worked!")
            console.log("data", data);
            $scope.ToDoInfo = data
          })
    }

    $scope.getOneToDo = function() {
      console.log("getOneToDo is running")
      console.log($scope.ToDoInfo, "ToDoInfo")
      ApiCallFactory.getSingleToDo($routeParams)
        .then(function(data){
          console.log("data", data);
        })

 }

    $scope.AddNewToDo = function() {
      console.log("AddNewToDo has started")
      ApiCallFactory.postToDo($scope.ToDoInfo)
        .then(function(data){
          console.log("it worked!")
          console.log("data", data)

        })


    }

   

    $scope.GetToDoByStatus = function(){
      console.log("getToDoByStatus running")
      ApiCallFactory.toDoByStatus(id)
        .then(function(data){
          console.log("it worked")
          console.log("data", data)
        })

 }


    $scope.EditToDo = function(){
      console.log("EditToDo running")
      ApiCallFactory.putToDo(ToDoInfo, id)
        .then(function(data){
          console.log("it worked")
          console.log("data", data)
        })

 }

})