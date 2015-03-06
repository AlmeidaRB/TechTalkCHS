(function () {
  "use strict";
  angular.module('newsRoute')
    .factory('NewsService', function ($location,$http) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/newsModule';

      var postArticle = function (newArticle) {
        $http.post(url, newArticle).success(function(){
          //things can happen here
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


      //returns specified number of articles from db
      // var getArticles = function (passedQuantity) {
      //   if(passedQuantity==='all'){
      //     return $http.get(url);
      //   }else if(passedQuantity){
      //
      //   }
      //
      // };

      return {
        postArticle: postArticle,
        getArticles: getArticles,
        getOneArticle: getOneArticle
        // getArticlesFew: getArticlesFew,//marked for deletion
        // getArticlesAll: getArticlesAll,//marked for deletion
        // getArticlesOne: getArticlesOne,
        // deleteArticle: deleteArticle,
        // postComment: postComment,
        // getComments: getComments
      };

    });
})();
