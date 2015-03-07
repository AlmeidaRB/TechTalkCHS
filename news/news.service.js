(function () {
  "use strict";
  angular.module('newsRoute')
    .factory('NewsService', function ($location,$http) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/newsModule';

      var postArticle = function (newArticle) {
        $http.post(url, newArticle).success(function(){

        })
        .error(function(){
          console.log('ERROR NewsService/postArticle');
        });
      };

      var getArticles = function () {
        return $http.get(url);
      };

      var getOneArticle = function (articleId) {
        return $http.get(url + '/' + articleId);
      };

      var deleteArticle = function (articleId) {
        $http.delete(url + '/' + articleId);
      };

      var postComment = function (passedArticle, newComment) {
        if(passedArticle.comments){
          passedArticle.comments.push(newComment);
          $http.put(url + '/' + passedArticle._id, passedArticle);
        }else{
          passedArticle.comments = [newComment];
          $http.put(url + '/' + passedArticle._id, passedArticle);
        };
      };

      return {
        postArticle: postArticle,
        getArticles: getArticles,
        getOneArticle: getOneArticle,
        deleteArticle: deleteArticle,
        postComment: postComment
      };

    });
})();
