(function () {
  "use strict";

  angular.module('newsRoute', [
    'ui.router'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('news', {
      abstract: true,
      templateUrl: 'news/views/newsAbstract.html'
    })
    .state('news.admin', {
      url: '/news/admin',
      templateUrl: 'news/views/newsAdmin.html',
      controller: 'NewsController as newsCtrl'
    })
    .state('news.list', {
      url: '/news/list',
      templateUrl: 'news/views/newsList.html',
      controller: 'NewsController as newsCtrl'
    })
    .state('news.detail', {
      url: '/news/detail/:articleId',
      templateUrl: 'news/views/newsDetail.html',
      controller: 'NewsController as newsCtrl'
    })
  });

})();
