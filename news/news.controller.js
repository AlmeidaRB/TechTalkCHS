(function () {
  "use strict";
  angular.module('newsRoute')
    .controller('NewsController', function(NewsService,$routeParams,$location,$scope,_){

      var newsCtrl = this;

      //adds new article
      newsCtrl.addArticle = function(newArticle){
        NewsService.postArticle(newArticle);
        $scope.newArticle = {};
      };

      NewsService.getArticles().success(function(data){
        newsCtrl.getArticles = data;
      })
      .error(function(){
        console.log('newsCtrl.getProducts error')
      });

      NewsService.getOneArticle($routeParams.articleId).success(function(data){
      newsCtrl.getOneArticle = data;
      })
      .error(function(){
        console.log('ERROR newsCtrl.getOneArticle')
      });

      newsCtrl.routeTo = function (path) {
        $location.path(path);
      };

      newsCtrl.deleteArticle = function (articleId) {
        NewsService.deleteArticle(articleId);
      };

      newsCtrl.addComment = function (passedArticle, newComment) {
        NewsService.postComment(passedArticle, newComment);
        $scope.newComment = {};
      };

  });

})();
