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

      //returns number of articles passed through function
      newsCtrl.getArticles = function(passedQuantity){
        NewsService.getArticles(passedQuantity)
      };





      ////////////////////////////////////////////////////////////

      // //returns 3 articles for main page
      // NewsService.getArticlesFew().success(function(data){
      //   newsCtrl.getArticlesFew = data;
      // })
      // .error(function(){
      //   console.log('ERROR newsCtrl.getArticlesFew')
      // });
      //
      // //returns all articles for full list view
      // NewsService.getArticlesAll().success(function(data){
      //   newsCtrl.getArticlesAll = data;
      // })
      // .error(function(){
      //   console.log('ERROR newsCtrl.getArticlesAll')
      // });
      //
      // //returns one article using submitted article _id
      // newsCtrl.getArticlesOne = function(){
      //   NewsService.getArticlesOne().success(function(data){
      //     return data;
      //   })
      //   .error(function(){
      //     console.log('ERROR newsCtrl.getArticlesOne')
      //   });
      // };
      //
      // //adds new article
      // newsCtrl.addArticle = function(newArticle){
      //   NewsService.postArticle(newArticle);
      //   $scope.newArticle = {};
      // };
      //
      // //delete a specified article based on article _id
      // newsCtrl.deleteArticle = function (passedId) {
      //   NewsService.deleteArticle(passedId);
      // };
      //
      // //add new comment
      // newsCtrl.postComment = function (newComment,passedId) {
      //   NewsService.postComment(newComment,passedId);
      //   $scope.newComment = {};
      // };
      //
      // //get all comments for one article (based on article _id)
      // newsCtrl.getComments = function (passedId) {
      //   NewsService.getComments(passedId).success(function(data){
      //     return data;
      //   })
      //   .error(function(){
      //     console.log('newsCtrl.getComments error')
      //   });
      // };

  });

})();
