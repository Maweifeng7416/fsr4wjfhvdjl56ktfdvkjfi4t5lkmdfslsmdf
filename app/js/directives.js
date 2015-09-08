'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive("myDateTime", function($timeout,dateFilter){
      return function(scope, element, attrs){
        var format,timeoutId;
        function updateTime(){
          element.text( dateFilter( new Date(), format ))
        }

        scope.$watch(attrs.myDateTime, function(value){
          format = value
          updateTime()
        });

        function updateLater(){
          timeoutId = $timeout( function(){
            updateTime();
            updateLater();
          },1000 );
        };

        element.bind('$destory', function(){
          $timeout.cancel(timeoutId);
        });

        updateLater();
      }
    });
