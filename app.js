(function () {
  'use strict';

  angular.module('ttcApp', [
    'newsRoute',
    'calendarRoute',
    'ui.bootstrap',
    'mwl.calendar',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'core/views/main.html'
      })
      .state('main.home', {
        url: '/',
        views: {
          'news': {
            templateUrl: 'news/views/news.html'
          },
          'calendar': {
            templateUrl: 'calendar/views/calendarMain.html'
          }
        }
      })
  })

  .constant('_', _);

})();
