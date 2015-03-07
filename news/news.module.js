(function () {
  "use strict";

  angular.module('newsRoute', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/news/add', {
        templateUrl: 'news/views/addArticle.html',
        controller: 'NewsController as newsCtrl'
      })
      .when('/news/list', {
        templateUrl: 'news/views/newsList.html',
        controller: 'NewsController as newsCtrl'
      })
      .when('/news/detail/:articleId', {
        templateUrl: 'news/views/newsDetail.html',
        controller: 'NewsController as newsCtrl'
      })
  });

})();
