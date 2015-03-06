(function () {
  "use strict";

  angular.module('calendarRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/calendar', {
        templateUrl: 'calendar/views/calendar.html',
        controller: 'CalendarController as calCtrl'
      })
  });

})();
