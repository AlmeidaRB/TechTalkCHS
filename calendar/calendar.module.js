(function () {
  "use strict";

  angular.module('calendarRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '', // Add file route here
        controller: '' // Add controller for above route here
      })
  });

})();
