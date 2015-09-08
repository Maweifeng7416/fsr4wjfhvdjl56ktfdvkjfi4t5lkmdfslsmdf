'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [function () {

    }])
    .controller('MyCtrl2', [function () {

    }])
    .controller("GreetCtrl",function($scope){
        $scope.name="World";
    })
    .controller('ListCtrl', function ($scope){
        $scope.names = ['Igor','Misko', 'Vojta']
    })
    .controller('Ctrl2', function($scope){
        $scope.format = 'M/d/yy h:mm:ss a';
    });
