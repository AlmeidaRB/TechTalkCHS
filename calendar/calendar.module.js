(function () {
  "use strict";

  angular.module('calendarRoute', [
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('calendar', {
      abstract: true,
      templateUrl: 'calendar/views/calendarAbstract.html'
    })
    .state('calendar.full', {
      url: '/calendar',
      templateUrl: 'calendar/views/calendar.html',
      controller: 'CalendarController as calCtrl'
    })
  });

})();
