(function () {
  "use strict";

  angular.module('ttcApp', [
    'ngRoute',
    'newsRoute',
    'calendarRoute'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'core/views/main.html',
        //controller: 'CoreController as coreCtrl'
      })
      .when('/notfound', {
        templateUrl: 'core/views/notFound.html'
      })
      .otherwise({
        redirectTo: '/notfound'
      });
  })

  .constant('_', _);

})();
