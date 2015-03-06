(function () {
  "use strict";
  angular.module('newsRoute')
    .factory('NewsService', function ($location,$http) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/newsModule';

      //adds article to db
      var postArticle = function (newArticle) {
        $http.post(url, newArticle).success(function(){
          //things can happen here
        })
        .error(function(){
          console.log('ERROR NewsService/postArticle');
        });
      };
      

      //returns specified number of articles from db
      var getArticles = function (passedQuantity) {
        $http.get(url);
      };

      return {
        postArticle: postArticle,
        getArticles: getArticles,
        // getArticlesFew: getArticlesFew,//marked for deletion
        // getArticlesAll: getArticlesAll,//marked for deletion
        // getArticlesOne: getArticlesOne,
        // deleteArticle: deleteArticle,
        // postComment: postComment,
        // getComments: getComments
      };

    });
})();
