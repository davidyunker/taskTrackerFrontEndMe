"use strict";

var app = angular.module("TaskTrackerAPI", ["ngRoute"]);



app.config(function($routeProvider) {
    $routeProvider.
        when("/newtask", {
            templateUrl: "partials/newtask.html",
            controller: "ToDoCtrl"
        }).
         when("/tasks", {
            templateUrl: "partials/tasks.html",
            controller: 'ToDoCtrl'
        }).
        when("/task", {
            templateUrl: "partials/task.html",
            controller: 'ToDoCtrl'
        }).

        otherwise("/")
        // way to make sure they don't go anywhere else.
});