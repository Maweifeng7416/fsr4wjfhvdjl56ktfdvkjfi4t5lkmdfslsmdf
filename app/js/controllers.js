'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [function () {

    }])
    .controller('MyCtrl2', [function () {

    }])
    .controller("PlayerController",["$scope", function($scope){
        $scope.playing = false;
        $scope.audio = document.createElement('audio');
        $scope.audio.src = 'img/353091144164886164.mp3';
        $scope.play = function(){
            $scope.audio.play();
            $scope.playing = true;
        };
        $scope.stop = function(){
            $scope.audio.pause();
            $scope.playing = false;
        };
        $scope.audio.addEventListener('ended', function(){
            $scope.$apply(function(){
                $scope.stop();
            })
        })
    }]);
