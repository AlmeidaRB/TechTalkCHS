//two versions of controller built
//we will pick one depending on live server/format of plugin

//version 1
//applied when not using live server
(function () {
  "use strict";

  angular.module('ttcApp')
    .controller('CalendarController', function (CalendarService, $scope, $location) {
        var mainCtrl = this;

        calCtrl.events = CalendarService.getEvents();

        mainCtrl.addEvent = function (event) {
          CalendarService.addEvent(newEvent);
          $scope.newEvent = {};
        };
    });

  })();


//version 2
//applied when using live server

(function () {
      "use strict";

  angular.module('ttcApp')
    .controller('CalendarController', function (CalendarService, $rootScope, $scope, $routeParams, $location) {
      var mainCtrl = this;

      CalendarService.getEvents().success(function(data) {
        calCtrl.events = data;
      });

      CalendarService.getEvent($routeParams.eventIndex).success(function(data) {
        calCtrl.singleEvent = data;
      });

      mainCtrl.currentIndex = $routeParams.eventIndex;

      mainCtrl.addEvent = function (event) {
      CalendarService.addEvent(newEvent);
      $scope.newEvent = {};

    });

  })();
